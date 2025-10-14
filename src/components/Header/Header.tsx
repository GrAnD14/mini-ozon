import { HeaderStyle, LogoOzon } from './header.styled.ts';
import HeaderCatalogButton from '../../UI/HeaderUI/headerCatalog_button/headerCatalog_Button.tsx';
import SearchInput from '../../UI/HeaderUI/search_input/search_input.tsx';
import HeaderIcons from '../../UI/HeaderUI/headerIcons/headerIcons.tsx';
import HeaderLinks from '../../UI/HeaderUI/headerlinks/headerlinks.tsx';
import Marquee from '../../UI/HeaderUI/marquee/marquee.tsx';
import ImagesImports from '../../types/ImagesImports.ts';
import { LanguageButton } from '../../UI/HeaderUI/languageCurrency_button/languageCurrency_button.tsx';
import { AddressButton } from '../../UI/HeaderUI/AddressButton/AddressButton.tsx';

function Header() {
	return (
		<HeaderStyle>
			<a href='#'>
				<LogoOzon src={ImagesImports.Logo} alt='logo-ozon' />
			</a>
			<HeaderCatalogButton />
			<SearchInput />
			<HeaderIcons />
			<HeaderLinks />
			<AddressButton />
			<LanguageButton />
			<Marquee />
		</HeaderStyle>
	);
}

export default Header;
