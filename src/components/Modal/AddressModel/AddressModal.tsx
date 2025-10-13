import React, { useEffect, useRef, useState } from 'react';
import { AddressContainer, ImageWrapper, Title, Description, ContentArea, Label, Row, Input, Actions, BigActionButton, NoteText, SubText } from './AddressModal.styled';
import ImagesImports from '../../../Imports/ImagesImports';

type Mode = 'ADDRESS' | 'MAP';

interface Props {
	onClose: () => void;
	onSave?: (data: any) => void;
}
// I saved some tags for future address map and pickup point menu realization
export const AddressModal: React.FC<Props> = ({ onClose, onSave }) => {
	const [mode, setMode] = useState<Mode>('ADDRESS');
	const [address, setAddress] = useState<string>(localStorage.getItem('uiAddress') ?? '');
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
