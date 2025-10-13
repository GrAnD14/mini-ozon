import React, { useState, useRef, useEffect } from 'react';
import { DropdownWrapper, Selected, SelectedInfo, Option, Options, ArrowDown, OptionPrimary, OptionSecondary } from './CurrencyDropdown.styled';

interface Currency {
	code: string;
	primary: string; // e.g. "Российский рубль"
	secondary: string; // e.g. "RUB"
}

interface Props {
	currency: string;
	setCurrency: (code: string) => void;
	width?: string | number;
}

const CURRENCIES: Currency[] = [
	{ code: 'RUB', primary: 'Российский рубль', secondary: 'RUB' },
	{ code: 'USD', primary: 'Доллар США', secondary: 'USD' },
	{ code: 'BYN', primary: 'Белорусский рубль', secondary: 'BYN' },
	{ code: 'KZT', primary: 'Казахстанский тенге', secondary: 'KZT' }
];

export const CurrencyDropdown: React.FC<Props> = ({ currency, setCurrency, width }) => {
	const [open, setOpen] = useState(false);
	const wrapperRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const onDoc = (e: MouseEvent) => {
			if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false);
		};
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setOpen(false);
		};
		document.addEventListener('mousedown', onDoc);
		document.addEventListener('keydown', onKey);
		return () => {
			document.removeEventListener('mousedown', onDoc);
			document.removeEventListener('keydown', onKey);
		};
	}, []);

	const selected = CURRENCIES.find(c => c.code === currency) ?? CURRENCIES[0];

	return (
		<DropdownWrapper ref={wrapperRef} style={width ? { width } : undefined}>
			<Selected
				aria-haspopup='listbox'
				aria-expanded={open}
				onClick={() => setOpen(v => !v)}
				onKeyDown={e => {
					if (e.key === 'Enter' || e.key === ' ') {
						e.preventDefault();
						setOpen(v => !v);
					}
				}}
				type='button'
			>
				<SelectedInfo>
					{/* ✅ one-line version for selected value */}
					<span style={{ fontSize: 15, color: '#222' }}>
						{selected.primary}, {selected.secondary}
					</span>
				</SelectedInfo>
				<ArrowDown aria-hidden>▼</ArrowDown>
			</Selected>

			{open && (
				<Options role='listbox' aria-label='Выберите валюту'>
					{CURRENCIES.map(c => (
						<Option
							key={c.code}
							role='option'
							aria-selected={c.code === currency}
							onClick={() => {
								setCurrency(c.code);
								setOpen(false);
							}}
							onKeyDown={e => {
								if (e.key === 'Enter' || e.key === ' ') {
									e.preventDefault();
									setCurrency(c.code);
									setOpen(false);
								}
							}}
							type='button'
						>
							<OptionPrimary>{c.primary}</OptionPrimary>
							<OptionSecondary>{c.secondary}</OptionSecondary>
						</Option>
					))}
				</Options>
			)}
		</DropdownWrapper>
	);
};

export default CurrencyDropdown;
