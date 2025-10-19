import React, { useState } from 'react';
import { AddressContainer, ImageWrapper, Title, Description, Actions, BigActionButton, NoteText } from './AddressModal.styled';
import ImagesImports from '../../../types/ImagesImports.ts';
import type { Props } from '../../../types/LanguageCurrencyModal_types/LanguageCurrencyModal_types.ts';
import PickpointModal from './PickpointModal/PickpointModal.tsx';

export const AddressModal: React.FC<Props> = ({ onClose, onSave }) => {
	const [address] = useState<string>(localStorage.getItem('uiAddress') ?? '');
	const [showPickpoint, setShowPickpoint] = useState(false);
	function handleBigAction() {
		setShowPickpoint(true);
	}
	function handlePickpointClose() {
		setShowPickpoint(false);
	}
	function handlePickpointSelect(payload: { type: 'PICKUP' | 'COURIER'; place?: { lat: number; lng: number } | string }) {
		// If place is coordinates object, stringify or format as you want
		const addressValue = typeof payload.place === 'string' ? payload.place : payload.place ? `${payload.place.lat.toFixed(6)}, ${payload.place.lng.toFixed(6)}` : address;

		onSave?.({ type: payload.type === 'PICKUP' ? 'MAP' : 'COURIER', address: addressValue });
	}

	return (
		<AddressContainer>
			<Title>Выберите адрес доставки</Title>

			<ImageWrapper>
				<img src={ImagesImports.AddressBackground} alt='background' />
			</ImageWrapper>

			<Description>Добавьте точный адрес, удобный пункт выдачи или постамат, чтобы заранее увидеть условия доставки товаров</Description>

			<Actions>
				<BigActionButton onClick={handleBigAction}>
					Выбрать на карте
					<NoteText>адрес доставки, пункт выдачи, постамат</NoteText>
				</BigActionButton>
				{showPickpoint && <PickpointModal onClose={handlePickpointClose} onSelect={handlePickpointSelect} initialAddress={address} />}
			</Actions>
		</AddressContainer>
	);
};

export default AddressModal;
