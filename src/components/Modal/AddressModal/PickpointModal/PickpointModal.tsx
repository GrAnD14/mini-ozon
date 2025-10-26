import React, { useEffect, useState, useRef } from 'react';
import {
	PickpointOverlay,
	PickpointWrapper,
	LeftPane,
	RightPane,
	Heading,
	GreyText,
	ModeRow,
	ModeToggle,
	SearchField,
	FloatingLabel,
	SearchInput,
	ClearButton,
	MapPlaceholder,
	PickpointClose,
	SuggestionsBox,
	SuggestionRow,
	SuggestionTitle,
	SuggestionSubtitle
} from './PickpointModal.styled';
import LeafletMap, { SetViewOnChange, ClickToAddMarker } from './LeafletMap/LeafletMap';
import L from 'leaflet';
import { Marker } from 'react-leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { extractCityName, extractStreetHouse } from '../../../../utils/geocode';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
	iconRetinaUrl: markerIcon2x,
	iconUrl: markerIcon,
	shadowUrl: markerShadow
});

// debounce hook
function useDebounce<T>(value: T, delay = 300) {
	const [debounced, setDebounced] = useState(value);
	useEffect(() => {
		const id = setTimeout(() => setDebounced(value), delay);
		return () => clearTimeout(id);
	}, [value, delay]);
	return debounced;
}

function abbreviateStreetPart(s: string): string {
	if (!s) return s;
	const map: [RegExp, string][] = [
		[/\bмикрорайон\b/gi, 'мкр.'],
		[/\bмикр\b\.?/gi, 'мкр.'],
		[/\bулица\b/gi, 'ул.'],
		[/\bул\b\.?/gi, 'ул.'],
		[/\bпроспект\b/gi, 'пр.'],
		[/\bпереулок\b/gi, 'пер.'],
		[/\bпроезд\b/gi, 'пр-д'],
		[/\bплощадь\b/gi, 'пл.'],
		[/\bбульвар\b/gi, 'бул.'],
		[/\bшоссе\b/gi, 'ш.'],
		[/\bстроение\b/gi, 'стр.'],
		[/\bдом\b/gi, 'д.']
	];
	let out = s;
	for (const [rx, r] of map) out = out.replace(rx, r);
	return out;
}

function truncateMiddle(s: string, max = 18) {
	if (!s) return s;
	if (s.length <= max) return s;
	const start = Math.ceil(max * 0.6);
	const end = max - start;
	return s.slice(0, start) + '…' + s.slice(s.length - end);
}

// Nominatim search
async function nominatimSearch(q: string, limit = 6) {
	const url = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=${limit}&q=${encodeURIComponent(q)}`;
	const res = await fetch(url, { headers: { 'Accept-Language': 'ru,en;q=0.8' } });
	if (!res.ok) return [];
	const data = await res.json();
	return data.map((d: any) => {
		const display = (d.display_name || '').trim();
		const parts = display
			.split(',')
			.map((p: string) => p.trim())
			.filter(Boolean);
		const reversed_display = parts.slice().reverse().join(', ');
		const city = extractCityName(d.address || d, '');
		return { display_name: display, lat: parseFloat(d.lat), lon: parseFloat(d.lon), city, reversed_display, raw: d };
	});
}

type DeliveryMode = 'PICKUP' | 'COURIER';
type LatLng = { lat: number; lng: number };

interface Props {
	onClose: () => void;
	onSelect?: (payload: { type: DeliveryMode; place?: LatLng | string | { display_name: string; city?: string; header?: string; lat?: number; lon?: number } }) => void;
	initialAddress?: string;
}

const DEFAULT_CENTER: [number, number] = [55.751244, 37.618423];
const DEFAULT_ZOOM = 11;

export const PickpointModal: React.FC<Props> = ({ onClose, onSelect, initialAddress = '' }) => {
	const [mode, setMode] = useState<DeliveryMode>('PICKUP');
	const [query, setQuery] = useState(initialAddress);
	const [center, setCenter] = useState<LatLng>({ lat: DEFAULT_CENTER[0], lng: DEFAULT_CENTER[1] });
	const [marker, setMarker] = useState<LatLng | null>(null);
	const [selectedDisplayName, setSelectedDisplayName] = useState<string | null>(null);
	const [selectedCity, setSelectedCity] = useState<string | null>(null);
	const [selectedHeader, setSelectedHeader] = useState<string | null>(null);
	const [focused, setFocused] = useState(false);
	const [suggestions, setSuggestions] = useState<any[]>([]);
	const [loading, setLoading] = useState(false);
	const inputRef = useRef<HTMLInputElement | null>(null);

	const debounced = useDebounce(query, 300);

	useEffect(() => {
		let mounted = true;
		async function run() {
			if (!debounced || debounced.trim().length === 0) {
				if (mounted) setSuggestions([]);
				return;
			}
			setLoading(true);
			try {
				const res = await nominatimSearch(debounced.trim(), 6);
				if (!mounted) return;
				setSuggestions(res);
			} catch (err) {
				console.error(err);
			} finally {
				if (mounted) setLoading(false);
			}
		}
		run();
		return () => {
			mounted = false;
		};
	}, [debounced]);

	function onMapClick(latlng: LatLng) {
		setMarker(latlng);
		setSelectedDisplayName(null);
		setSelectedCity(null);
		setSelectedHeader(null);
		setCenter(latlng);
	}

	function buildHeaderFromPlace(placeObj: any): string | undefined {
		// prefer structured street+house extraction
		const streetHouse = extractStreetHouse(placeObj) || '';
		if (!streetHouse) return undefined;
		const abbreviated = abbreviateStreetPart(streetHouse);
		const short = truncateMiddle(abbreviated, 20);
		const city = extractCityName(placeObj, '');
		if (city) return `${city}, ${short}`;
		return short;
	}

	function chooseSuggestion(item: any) {
		const pos = { lat: item.lat, lng: item.lon };
		setQuery(item.display_name);
		setMarker(pos);
		setSelectedDisplayName(item.display_name);
		const city = item.city || extractCityName(item.raw || item, '');
		setSelectedCity(city);
		const header = buildHeaderFromPlace(item.raw || item);
		setSelectedHeader(header ?? null);

		setCenter(pos);
		setSuggestions([]);
		setFocused(false);
	}

	function confirm() {
		let place: any = undefined;
		if (selectedDisplayName) {
			const header = selectedHeader ?? buildHeaderFromPlace({ display_name: selectedDisplayName }) ?? undefined;
			place = { display_name: selectedDisplayName, city: selectedCity ?? undefined, header, lat: marker?.lat, lon: marker?.lng };
		} else if (marker) {
			place = marker;
		} else if (query) {
			const city = extractCityName(query, '');
			const header = (() => {
				const hh = extractStreetHouse(query);
				if (!hh) return undefined;
				return (abbreviateStreetPart(hh), abbreviateStreetPart(hh)); // will be abbreviated
			})();
			place = { display_name: query, city: city || undefined, header };
		}
		onSelect?.({ type: mode, place });
		onClose();
	}

	const shouldFloat = focused || query.length > 0;

	return (
		<PickpointOverlay onClick={onClose}>
			<PickpointWrapper onClick={e => e.stopPropagation()} role='dialog' aria-modal='true' aria-label='Выбор пункта выдачи'>
				<LeftPane>
					<Heading>Способ доставки</Heading>

					<ModeRow>
						<ModeToggle active={mode === 'PICKUP'} onClick={() => setMode('PICKUP')}>
							Самовывоз
						</ModeToggle>
						<ModeToggle active={mode === 'COURIER'} onClick={() => setMode('COURIER')}>
							Курьером
						</ModeToggle>
					</ModeRow>

					<GreyText>Выберите пункт выдачи на карте или используйте поиск</GreyText>

					<SearchField>
						<FloatingLabel htmlFor='pickpoint-search' float={shouldFloat}>
							Искать на карте
						</FloatingLabel>

						<SearchInput
							id='pickpoint-search'
							ref={inputRef}
							value={query}
							onChange={e => {
								setQuery(e.target.value);
								setMarker(null);
								setSelectedDisplayName(null);
								setSelectedCity(null);
								setSelectedHeader(null);
								setSuggestions([]);
								setFocused(true);
							}}
							onFocus={() => setFocused(true)}
							onBlur={() => setTimeout(() => setFocused(false), 120)}
							placeholder=''
							onKeyDown={e => {
								if (e.key === 'Enter') {
									e.preventDefault();
									if (suggestions.length > 0) chooseSuggestion(suggestions[0]);
								}
							}}
						/>

						{query.length > 0 && (
							<ClearButton
								aria-label='Очистить'
								onClick={() => {
									setQuery('');
									setSuggestions([]);
								}}
							>
								{'×'}
							</ClearButton>
						)}

						{focused && (suggestions.length > 0 || loading) && (
							<SuggestionsBox role='listbox'>
								{loading && <div style={{ padding: 12, color: '#666' }}>Загрузка...</div>}
								{!loading &&
									suggestions.map((s, i) => (
										<SuggestionRow
											key={`${s.lat}-${s.lon}-${i}`}
											onMouseDown={e => {
												// use onMouseDown so the click fires before input blur
												e.preventDefault();
												chooseSuggestion(s);
											}}
										>
											<SuggestionTitle>{s.city || s.display_name.split(',').slice(-3).join(', ').trim()}</SuggestionTitle>
											<SuggestionSubtitle>{s.reversed_display}</SuggestionSubtitle>
										</SuggestionRow>
									))}
							</SuggestionsBox>
						)}
					</SearchField>

					<div style={{ marginTop: 12 }}>
						<button style={{ width: '100%', padding: 12, borderRadius: 10, border: 'none', background: '#005bff', color: '#fff', fontWeight: 700 }} onClick={confirm}>
							Подтвердить выбор
						</button>
					</div>
				</LeftPane>

				<RightPane>
					<MapPlaceholder>
						<LeafletMap center={[center.lat, center.lng]} zoom={DEFAULT_ZOOM}>
							<SetViewOnChange center={[center.lat, center.lng]} zoom={DEFAULT_ZOOM} />
							{marker && <Marker position={[marker.lat, marker.lng]} />}
							<ClickToAddMarker onMapClick={onMapClick} />
						</LeafletMap>
					</MapPlaceholder>
				</RightPane>

				<PickpointClose aria-label='Close' onClick={onClose}>
					×
				</PickpointClose>
			</PickpointWrapper>
		</PickpointOverlay>
	);
};

export default PickpointModal;
