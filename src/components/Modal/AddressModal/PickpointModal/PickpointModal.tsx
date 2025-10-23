import React, { useEffect, useState, useRef } from 'react';
import {
	PickpointOverlay,
	PickpointWrapper,
	LeftPane,
	RightPane,
	Heading,
	SubHeading,
	GreyText,
	ModeRow,
	ModeToggle,
	SearchField,
	FloatingLabel,
	SearchInput,
	ClearButton,
	MapPlaceholder,
	PickpointClose
} from './PickpointModal.styled';

import LeafletMap, { ClickToAddMarker } from './LeafletMap/LeafletMap';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { Marker } from 'react-leaflet';

// Fix Leaflet default icons
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: () => void })._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl: markerIcon2x,
	iconUrl: markerIcon,
	shadowUrl: markerShadow
});

type DeliveryMode = 'PICKUP' | 'COURIER';

interface Props {
	onClose: () => void;
	onSelect?: (payload: { type: DeliveryMode; place?: { lat: number; lng: number } | string }) => void;
	initialAddress?: string;
}

const DEFAULT_CENTER: [number, number] = [55.751244, 37.618423];
const DEFAULT_ZOOM = 11;

export const PickpointModal: React.FC<Props> = ({ onClose, onSelect, initialAddress = '' }) => {
	const [mode, setMode] = useState<DeliveryMode>('PICKUP');
	const [query, setQuery] = useState(initialAddress);
	const [marker, setMarker] = useState<{ lat: number; lng: number } | null>(null);
	const [focused, setFocused] = useState(false);
	const inputRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		document.addEventListener('keydown', onKey);
		return () => document.removeEventListener('keydown', onKey);
	}, [onClose]);

	const handleMapClick = (latlng: { lat: number; lng: number }) => {
		setMarker(latlng);
		onSelect?.({ type: mode, place: latlng });
	};

	const handleChoosePlace = () => {
		if (marker) onSelect?.({ type: mode, place: marker });
		else onSelect?.({ type: mode, place: query });
		onClose();
	};

	const handleClear = () => {
		setQuery('');
		inputRef.current?.focus();
	};

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

					<div style={{ marginTop: 14 }}>
						<SubHeading>Куда доставить заказ?</SubHeading>
					</div>
					<GreyText>Выберите пункт выдачи на карте или используйте поиск</GreyText>

					<SearchField>
						<FloatingLabel htmlFor='pickpoint-search' float={shouldFloat}>
							Искать на карте
						</FloatingLabel>
						<SearchInput
							id='pickpoint-search'
							ref={inputRef}
							value={query}
							onChange={e => setQuery(e.target.value)}
							onFocus={() => setFocused(true)}
							onBlur={() => setFocused(false)}
							onKeyDown={e => {
								if (e.key === 'Enter') handleChoosePlace();
							}}
						/>
						{query.length > 0 && <ClearButton onClick={handleClear}>×</ClearButton>}
					</SearchField>
				</LeftPane>

				<RightPane>
					<MapPlaceholder>
						<LeafletMap center={DEFAULT_CENTER} zoom={DEFAULT_ZOOM}>
							{marker && <Marker position={[marker.lat, marker.lng]} />}
							<ClickToAddMarker onMapClick={handleMapClick} />
						</LeafletMap>
					</MapPlaceholder>
				</RightPane>

				<PickpointClose onClick={onClose}>×</PickpointClose>
			</PickpointWrapper>
		</PickpointOverlay>
	);
};

export default PickpointModal;
