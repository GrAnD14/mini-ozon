import { HeaderStyle, LogoOzon } from './header.styled.ts';
import HeaderCatalogButton from '../../UI/HeaderUI/headerCatalog_button/headerCatalog_Button.tsx';
import SearchInput from '../../UI/HeaderUI/search_input/search_input.tsx';
import HeaderIcons from '../../UI/HeaderUI/headerIcons/headerIcons.tsx';
import HeaderLinks from '../../UI/HeaderUI/headerlinks/headerlinks.tsx';
import Marquee from '../../UI/HeaderUI/marquee/marquee.tsx';
import { ImagesImports } from '../../types/ImagesImports.ts';

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
			<Marquee />
		</HeaderStyle>
	);
}

export default Header;
