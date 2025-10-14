import React, { useEffect, useState, useRef } from 'react';
import { Container, Title, Description, TwoCols, Col, Label, Actions, SaveButton } from './LanguageCurrencyModal.styled.ts';
import { LanguagesDropdown } from './LanguagesDropdown/LanguagesDropdown.tsx';
import { CurrencyDropdown } from './CurrencyDropdown/CurrencyDropdown.tsx';
import type { Props } from '../../../types/LanguageCurrencyModal_types/LanguageCurrencyModal_types.ts';

export const LanguageCurrencyModal: React.FC<Props> = ({ onClose, onSave, initialLang, initialCurrency }) => {
	const [lang, setLang] = useState(initialLang ?? localStorage.getItem('uiLang') ?? 'ru');
	const [currency, setCurrency] = useState(initialCurrency ?? localStorage.getItem('currency') ?? 'RUB');
	const firstControlRef = useRef<HTMLSelectElement | null>(null);

	// focus first control when modal opens
	useEffect(() => {
		firstControlRef.current?.focus();
	}, []);

	function handleSave() {
		localStorage.setItem('uiLang', lang);
		localStorage.setItem('currency', currency);
		if (onSave) onSave?.({ lang, currency });
		onClose();
	}

	return (
		<Container role='dialog' aria-modal='true' aria-label='Настройки языка и валюты'>
			<Title>Валюта</Title>
			<Description>Выберите знакомую для вас валюту, чтобы оценить стоимость товаров. Валюта оплаты будет рассчитана в рублях.</Description>

			<TwoCols>
				<Col>
					<Label>Язык</Label>
					<LanguagesDropdown lang={lang} setLang={setLang} />
				</Col>

				<Col>
					<Label>Валюта</Label>
					<CurrencyDropdown currency={currency} setCurrency={setCurrency} />
				</Col>
			</TwoCols>

			<Actions>
				<SaveButton type='button' onClick={handleSave}>
					Сохранить
				</SaveButton>
			</Actions>
		</Container>
	);
};

export default LanguageCurrencyModal;
