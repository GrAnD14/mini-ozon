import ImagesImports from '../ImagesImports.ts';

export interface SaveData {
	type: 'MAP';
	address: string;
}

export interface Props {
	onClose: () => void;
	onSave?: (data: SaveData | { lang: string; currency: string }) => void;
	initialLang?: string;
	initialCurrency?: string;
}

export const langs = [
	{ code: 'ru', label: 'Русский', flag: ImagesImports.RU },
	{ code: 'en', label: 'English', flag: ImagesImports.ENG }
];

export const currencies = [
	{ code: 'RUB', label: 'Российский рубль, RUB' },
	{ code: 'USD', label: 'Доллар США, USD' },
	{ code: 'BYN', label: 'Белорусский рубль, BYN' },
	{ code: 'KZT', label: 'Казахстанский тенге, KZT' }
];
