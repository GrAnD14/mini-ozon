import React, { useEffect, useRef, useState } from 'react';
import { Container, Title, Description, TwoCols, Col, Label, NativeSelect, Actions, SaveButton, CancelButton } from './LanguageCurrencyModal.styled.ts';

interface Props {
	onClose: () => void;
	onSave?: (lang: string, currency: string) => void;
}

const LANGS = [
	{ code: 'ru', label: 'Русский' },
	{ code: 'en', label: 'English' }
];

const CURRENCIES = [
	{ code: 'RUB', label: 'Российский рубль, RUB' },
	{ code: 'USD', label: 'Доллар США, USD' }
];

export const LanguageCurrencyModal: React.FC<Props> = ({ onClose, onSave }) => {
	const [lang, setLang] = useState(localStorage.getItem('uiLang') ?? 'ru');
	const [currency, setCurrency] = useState(localStorage.getItem('currency') ?? 'RUB');
	const firstRef = useRef<HTMLSelectElement | null>(null);

	useEffect(() => {
		firstRef.current?.focus();
	}, []);

	function save() {
		localStorage.setItem('uiLang', lang);
		localStorage.setItem('currency', currency);
		onSave?.(lang, currency);
		onClose();
	}

	return (
		<Container>
			<Title>Язык и валюта</Title>
			<Description>Выберите знакомую для вас валюту, чтобы оценить стоимость товаров. Валюта оплаты будет рассчитана в рублях.</Description>

			<TwoCols>
				<Col>
					<Label>Язык</Label>
					<NativeSelect ref={firstRef} value={lang} onChange={e => setLang(e.target.value)}>
						{LANGS.map(l => (
							<option key={l.code} value={l.code}>
								{l.label}
							</option>
						))}
					</NativeSelect>
				</Col>

				<Col>
					<Label>Валюта</Label>
					<NativeSelect value={currency} onChange={e => setCurrency(e.target.value)}>
						{CURRENCIES.map(c => (
							<option key={c.code} value={c.code}>
								{c.label}
							</option>
						))}
					</NativeSelect>
				</Col>
			</TwoCols>

			<Actions>
				<CancelButton onClick={onClose}>Отмена</CancelButton>
				<SaveButton onClick={save}>Сохранить</SaveButton>
			</Actions>
		</Container>
	);
};

export default LanguageCurrencyModal;
