import React, { useState } from 'react';
import { AddressContainer, ImageWrapper, Title, Description, Actions, BigActionButton, NoteText } from './AddressModal.styled';
import ImagesImports from '../../../Imports/ImagesImports';
import type { Props } from '../../../types/LanguageCurrencyModal_types/LanguageCurrencyModal_types.ts';

export const AddressModal: React.FC<Props> = ({ onClose, onSave }) => {
	const [address] = useState<string>(localStorage.getItem('uiAddress') ?? '');

	function handleBigAction() {
		onSave?.({ type: 'MAP', address });
		onClose();
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
			</Actions>
		</AddressContainer>
	);
};

export default AddressModal;
