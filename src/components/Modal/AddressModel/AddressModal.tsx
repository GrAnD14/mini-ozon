import React, { useEffect, useRef, useState } from 'react';
import { AddressContainer, ImageWrapper, Title, Description, Actions, BigActionButton, NoteText } from './AddressModal.styled';
import ImagesImports from '../../../types/ImagesImports.ts';

type Mode = 'ADDRESS' | 'MAP';

interface SavePayload {
	type: Mode;
	address: string;
}

interface Props {
	onClose: () => void;
	onSave?: (data: SavePayload) => void;
}

// Компонент выбора адреса
export const AddressModal: React.FC<Props> = ({ onClose, onSave }) => {
	// Исправлено: храним state и setter
	const [setMode] = useState<Mode>('ADDRESS');
	const [address] = useState<string>(localStorage.getItem('uiAddress') ?? '');
	const inputRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	function handleBigAction() {
		setMode('MAP');
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
