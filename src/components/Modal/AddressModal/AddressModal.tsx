import React, { useEffect, useState } from 'react';
import { AddressContainer, ImageWrapper, Title, Description, Actions, BigActionButton, NoteText, AddressListWrapper } from './AddressModal.styled';
import ImagesImports from '../../../types/ImagesImports';
import PickpointModal from './PickpointModal/PickpointModal';
import AddressItem from '../../../UI/ModalUI/AddressModal/AddressItem';
import { extractCityName, extractStreetHouse } from '../../../utils/geocode';

type SavedAddr = { address: string; city?: string; header?: string };

const STORAGE_KEY = 'uiAddresses';
const CITY_KEY = 'uiAddressCity';
const HEADER_KEY = 'uiAddressHeader';

interface Props {
	onClose?: () => void;
	onSave?: (data: { type: string; address: string; city?: string; header?: string }) => void;
}

export const AddressModal: React.FC<Props> = ({ onSave }) => {
	const savedJson = localStorage.getItem(STORAGE_KEY);
	const initialAddresses: SavedAddr[] = (() => {
		try {
			return savedJson ? JSON.parse(savedJson) : [];
		} catch {
			return [];
		}
	})();

	const [addresses, setAddresses] = useState<SavedAddr[]>(initialAddresses);
	const [selectedIndex, setSelectedIndex] = useState<number>(0);
	const [showPickpoint, setShowPickpoint] = useState(false);
	const [pickpointKey, setPickpointKey] = useState<number>(() => Date.now());

	useEffect(() => {
		if (addresses.length === 0) setSelectedIndex(0);
		else if (selectedIndex >= addresses.length) setSelectedIndex(addresses.length - 1);
	}, [addresses, selectedIndex]);

	function broadcastChange(updated: SavedAddr[], city?: string, header?: string) {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
		if (city) localStorage.setItem(CITY_KEY, city);
		else localStorage.removeItem(CITY_KEY);
		if (header) localStorage.setItem(HEADER_KEY, header);
		else localStorage.removeItem(HEADER_KEY);
		window.dispatchEvent(new CustomEvent('uiAddressesChanged', { detail: { addresses: updated, city, header } }));
	}

	function makeHeaderFor(fullAddress: string, providedCity?: string) {
		const city = providedCity ?? extractCityName(fullAddress, undefined);
		const street = extractStreetHouse(fullAddress);
		if (city && street) return `${city}, ${street}`;
		if (city) return city;
		if (street) return street;
		return fullAddress.split(',')[0] ?? fullAddress;
	}

	function addAddress(newAddress: string, type: 'PICKUP' | 'COURIER', cityName?: string, header?: string) {
		setAddresses(prev => {
			const finalCity = cityName ?? extractCityName(newAddress, undefined);
			const finalHeader = header ?? makeHeaderFor(newAddress, finalCity);
			const existsIndex = prev.findIndex(p => p.address === newAddress);
			if (existsIndex !== -1) {
				const copy = prev.slice();
				copy[existsIndex] = { ...copy[existsIndex], city: finalCity, header: finalHeader };
				broadcastChange(copy, finalCity, finalHeader);
				setSelectedIndex(existsIndex);
				onSave?.({ type: type === 'PICKUP' ? 'MAP' : 'COURIER', address: newAddress, city: finalCity, header: finalHeader });
				return prev;
			}
			const updated = [{ address: newAddress, city: finalCity, header: finalHeader }, ...prev];
			broadcastChange(updated, finalCity, finalHeader);
			setSelectedIndex(0);
			onSave?.({ type: type === 'PICKUP' ? 'MAP' : 'COURIER', address: newAddress, city: finalCity, header: finalHeader });
			return updated;
		});
	}

	function deleteAddress(index: number) {
		setAddresses(prev => {
			const updated = prev.filter((_, i) => i !== index);
			if (index === selectedIndex) {
				if (updated.length > 0) {
					broadcastChange(updated, updated[0].city, updated[0].header);
				} else {
					broadcastChange([], undefined, undefined);
				}
			} else {
				broadcastChange(updated);
			}
			if (index === selectedIndex) setSelectedIndex(0);
			else if (index < selectedIndex) setSelectedIndex(prev => prev - 1);
			return updated;
		});
	}

	function openPickpointForNew() {
		setPickpointKey(Date.now());
		setShowPickpoint(true);
	}

	return (
		<AddressContainer>
			<Title>Выберите адрес доставки</Title>

			<ImageWrapper>
				<img src={ImagesImports.AddressBackground} alt='background' />
			</ImageWrapper>

			<Description>Добавьте точный адрес, удобный пункт выдачи или постамат, чтобы заранее увидеть условия доставки товаров</Description>

			<AddressListWrapper>
				{addresses.length === 0 && <div style={{ color: '#666', padding: 10 }}>Нет сохранённых адресов</div>}
				{addresses.map((item, idx) => (
					<AddressItem
						key={`${item.address}::${idx}`}
						address={item.header ?? item.address}
						selected={idx === selectedIndex}
						onSelect={() => {
							setSelectedIndex(idx);
							localStorage.setItem(CITY_KEY, item.city ?? '');
							localStorage.setItem(HEADER_KEY, item.header ?? item.address);

							window.dispatchEvent(
								new CustomEvent('uiAddressesChanged', {
									detail: { addresses, city: item.city, header: item.header }
								})
							);
						}}
						onDelete={() => deleteAddress(idx)}
					/>
				))}
			</AddressListWrapper>

			<Actions>
				<BigActionButton onClick={openPickpointForNew}>
					Выбрать на карте
					<NoteText>адрес доставки, пункт выдачи, постамат</NoteText>
				</BigActionButton>

				{showPickpoint && (
					<PickpointModal
						key={pickpointKey}
						onClose={() => setShowPickpoint(false)}
						onSelect={payload => {
							const place = payload.place;
							if (!place) return;
							let newAddress = '';
							let cityName: string | undefined;
							let header: string | undefined;

							if (typeof place === 'string') {
								newAddress = place;
							} else if ('display_name' in place) {
								newAddress = place.display_name;
								cityName = place.city ?? extractCityName(place, undefined);
								header = place.header ?? makeHeaderFor(newAddress, cityName);
							} else if ('lat' in place && 'lng' in place) {
								newAddress = `${place.lat.toFixed(6)}, ${place.lng.toFixed(6)}`;
							}

							addAddress(newAddress, payload.type, cityName, header);
							setShowPickpoint(false);
						}}
						initialAddress={''}
					/>
				)}
			</Actions>
		</AddressContainer>
	);
};

export default AddressModal;
