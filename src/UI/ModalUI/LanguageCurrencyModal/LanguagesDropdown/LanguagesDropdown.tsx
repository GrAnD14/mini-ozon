import React, { useState, useRef, useEffect } from 'react';
import ImagesImports from '../../../../types/ImagesImports.ts';
import { DropdownWrapper, Selected, Option, SelectedInfo, ArrowDown, Options } from './LanguagesDropdown.styled';

interface Lang {
	code: string;
	label: string;
	flag: string;
}

interface Props {
	lang: string;
	setLang: (code: string) => void;
	width?: string | number; // optional
}

export const LanguagesDropdown: React.FC<Props> = ({ lang, setLang, width }) => {
	const [open, setOpen] = useState(false);
	const wrapperRef = useRef<HTMLDivElement | null>(null);

	const LANGS: Lang[] = [
		{ code: 'ru', label: 'Русский', flag: ImagesImports.RU },
		{ code: 'en', label: 'English', flag: ImagesImports.ENG }
	];

	useEffect(() => {
		const onDoc = (e: MouseEvent) => {
			if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
				setOpen(false);
			}
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

	const selected = LANGS.find(l => l.code === lang) ?? LANGS[0];

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
					<img src={selected.flag} alt={selected.label} width={20} style={{ display: 'block' }} />
					<span>{selected.label}</span>
				</SelectedInfo>
				<ArrowDown aria-hidden>▼</ArrowDown>
			</Selected>

			{open && (
				<Options role='listbox' aria-label='Выберите язык'>
					{LANGS.map(l => (
						<Option
							key={l.code}
							role='option'
							aria-selected={l.code === lang}
							onClick={() => {
								setLang(l.code);
								setOpen(false);
							}}
							onKeyDown={e => {
								if (e.key === 'Enter' || e.key === ' ') {
									e.preventDefault();
									setLang(l.code);
									setOpen(false);
								}
							}}
							type='button'
						>
							<img src={l.flag} alt={l.label} width={20} style={{ display: 'block' }} />
							<span>{l.label}</span>
						</Option>
					))}
				</Options>
			)}
		</DropdownWrapper>
	);
};

export default LanguagesDropdown;
