import React, { useEffect, useState } from 'react';
import AddressModal from '../../../components/Modal/AddressModal/AddressModal';
import { Modal } from '../../../components/Modal/Modal';
import { AddressButtonWrapper } from './AddressButton.styled';

const STORAGE_KEY = 'uiAddresses';
const CITY_KEY = 'uiAddressCity';
const HEADER_KEY = 'uiAddressHeader';

function truncateStreetPart(header: string | null, streetMax = 5) {
	//i want to see the city name comma street in header
	if (!header) return '';
	const parts = header.split(',').map(p => p.trim());
	if (parts.length === 0) return '';
	const city = parts[0];
	const rest = parts.slice(1).join(', ').trim();
	if (!rest) return city;
	const firstPart = rest.split(',')[0].trim();
	const short = firstPart.length > streetMax ? firstPart.slice(0, streetMax) + '…' : firstPart;
	return `${city}${short ? ', ' + short : ''}`;
}

export const AddressButton: React.FC = () => {
	const [open, setOpen] = useState(false);
	const [addressesJSON, setAddressesJSON] = useState<string>(() => localStorage.getItem(STORAGE_KEY) ?? '[]');
	const [city, setCity] = useState<string | null>(() => localStorage.getItem(CITY_KEY) ?? null);
	const [header, setHeader] = useState<string | null>(() => localStorage.getItem(HEADER_KEY) ?? null);

	useEffect(() => {
		const onCustom = () => {
			setAddressesJSON(localStorage.getItem(STORAGE_KEY) ?? '[]');
			setCity(localStorage.getItem(CITY_KEY) ?? null);
			setHeader(localStorage.getItem(HEADER_KEY) ?? null);
		};
		const onStorage = (e: StorageEvent) => {
			if (e.key === STORAGE_KEY) setAddressesJSON(e.newValue ?? '[]');
			if (e.key === CITY_KEY) setCity(e.newValue ?? null);
			if (e.key === HEADER_KEY) setHeader(e.newValue ?? null);
		};
		window.addEventListener('uiAddressesChanged', onCustom as EventListener);
		window.addEventListener('storage', onStorage);
		return () => {
			window.removeEventListener('uiAddressesChanged', onCustom as EventListener);
			window.removeEventListener('storage', onStorage);
		};
	}, []);

	const addresses = (() => {
		try {
			return JSON.parse(addressesJSON || '[]') as any[];
		} catch {
			return [];
		}
	})();

	const hasAddresses = addresses.length > 0;
	const display = header ? truncateStreetPart(header, 5) : (city ?? 'Москва');

	return (
		<>
			<AddressButtonWrapper onClick={() => setOpen(true)} aria-haspopup='dialog'>
				<span className='city'>{display}</span>
				{!hasAddresses && (
					<>
						<span className='dot'>•</span>
						<span className='set-address'>Укажите адрес</span>
					</>
				)}
			</AddressButtonWrapper>

			{open && (
				<Modal onClose={() => setOpen(false)} ariaLabel='Выбор адреса'>
					<AddressModal onClose={() => setOpen(false)} onSave={() => setOpen(false)} />
				</Modal>
			)}
		</>
	);
};

export default AddressButton;
