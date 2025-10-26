export function cleanToken(s?: string | null) {
	if (!s) return '';
	let t = String(s).trim();
	t = t.replace(/^г\.?\s*/i, '').replace(/^город\s+/i, '');
	t = t.replace(/\(.+?\)/g, '');
	return t.trim();
}

// tokens that indicate administrative level / region / country — if a token is ONLY that we reject it.
// but if token contains "городское поселение Печора" we should try extracting "Печора".
const adminReject = [
	'область',
	'обл',
	'район',
	'р-н',
	'рн',
	'край',
	'округ',
	'федеральный',
	'республика',
	'респ',
	'муниципальный',
	'муниципальное',
	'посёлок',
	'поселок',
	'село',
	'деревня',
	'станция',
	'аэропорт',
	'территория',
	'парк',
	'россия'
];

function looksLikeCityToken(t: string) {
	if (!t) return false;
	const s = t.toLowerCase();
	for (const r of adminReject) {
		if (s === r) return false;
	}
	if (/^[0-9\-\s]+$/.test(s)) return false;
	return /[A-Za-z\u0400-\u04FF]/.test(t) && t.length >= 2;
}

function extractTrailingName(token: string): string | null {
	if (!token) return null;
	const words = token.split(/[\s,·•]+/).filter(Boolean);
	const capRx = /^[\p{Lu}A-ZА-ЯЁ]/u;
	let collected: string[] = [];
	for (let i = words.length - 1; i >= 0; i--) {
		const w = words[i].replace(/^[^A-Za-z\u0400-\u04FF]+|[^A-Za-z\u0400-\u04FF]+$/g, '');
		if (!w) continue;
		if (capRx.test(w)) {
			collected.unshift(w);
			if (collected.length >= 3) break;
			continue;
		}
		break;
	}
	if (collected.length === 0) {
		const last = words[words.length - 1]?.replace(/[^A-Za-z\u0400-\u04FF\s\-]/g, '').trim();
		return last && last.length > 0 ? last : null;
	}
	return collected.join(' ');
}

export function extractCityName(place: any, fallback = 'Москва'): string {
	if (!place) return fallback;

	if (typeof place === 'object') {
		const addr = place.address || {};
		const ordered = [addr.city, addr.town, addr.village, addr.hamlet, addr.locality, addr.municipality, addr.county, addr.region, addr.state];
		for (const candidate of ordered) {
			const c = cleanToken(candidate);
			if (c) {
				const trailing = extractTrailingName(c);
				if (trailing && looksLikeCityToken(trailing)) return trailing;
				if (looksLikeCityToken(c)) return c;
			}
		}

		// scan display_name tokens right-to-left and pick first city-like
		const dn = (place.display_name || '').toString();
		if (dn) {
			const parts = dn
				.split(',')
				.map((p: string) => cleanToken(p))
				.filter(Boolean);
			for (let i = parts.length - 1; i >= 0; i--) {
				const p = parts[i];
				const trailing = extractTrailingName(p);
				if (trailing && looksLikeCityToken(trailing)) return trailing;
				if (looksLikeCityToken(p)) return p;
			}
		}
	}

	if (typeof place === 'string') {
		const parts = place
			.split(',')
			.map(p => cleanToken(p))
			.filter(Boolean);
		for (let i = parts.length - 1; i >= 0; i--) {
			const p = parts[i];
			const trailing = extractTrailingName(p);
			if (trailing && looksLikeCityToken(trailing)) return trailing;
			if (looksLikeCityToken(p)) return p;
		}
		if (parts[0]) return parts[0];
	}

	return fallback;
}

export function extractStreetHouse(place: any): string | undefined {
	if (!place) return undefined;
	if (typeof place === 'object') {
		const addr = place.address || {};
		const street = addr.road || addr.street || addr.residential || addr.pedestrian || addr.cycleway || addr.suburb;
		const house = addr.house_number || addr.housenumber || addr.building || addr.house;
		if (street && house) {
			const abbreviated = abbreviateStreetPart(street);
			return `${abbreviated}, ${house}`;
		}
		if (street) return abbreviateStreetPart(street);
		if (place.display_name) {
			const parts = (place.display_name as string)
				.split(',')
				.map(p => p.trim())
				.filter(Boolean);
			for (let i = 0; i < Math.min(3, parts.length); i++) {
				if (/\d/.test(parts[i])) return parts[i];
			}
			if (parts.length > 1) return parts[1];
		}
	} else if (typeof place === 'string') {
		const parts = place
			.split(',')
			.map(p => p.trim())
			.filter(Boolean);
		for (let i = 0; i < Math.min(3, parts.length); i++) {
			if (/\d/.test(parts[i])) return parts[i];
		}
		if (parts.length > 1) return parts[1];
		if (parts.length > 0) return parts[0];
	}
	return undefined;
}

function abbreviateStreetPart(s: string): string {
	if (!s) return s;
	const map: [RegExp, string][] = [
		[/\bулица\b/gi, 'ул.'],
		[/\bул\b\.?/gi, 'ул.'],
		[/\bпроспект\b/gi, 'пр.'],
		[/\bпереулок\b/gi, 'пер.'],
		[/\bпроезд\b/gi, 'пр-д'],
		[/\bплощадь\b/gi, 'пл.'],
		[/\bбульвар\b/gi, 'бул.'],
		[/\bшоссе\b/gi, 'ш.'],
		[/\bстроение\b/gi, 'стр.'],
		[/\bдом\b/gi, 'д.']
	];
	let out = s;
	for (const [rx, r] of map) out = out.replace(rx, r);
	return out;
}
