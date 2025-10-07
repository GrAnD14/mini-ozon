import {HeaderStyle, LogoOzon} from "./header.styled.ts";
import HeaderCatalogButton from "../../UI/HeaderUI/headerCatalog_button/headerCatalog_Button.tsx";
import SearchInput from "../../UI/HeaderUI/search_input/search_input.tsx";
import HeaderIcons from "../../UI/HeaderUI/headerIcons/headerIcons.tsx";


function Header() {
	return (
		<HeaderStyle>
				<a href="#"><LogoOzon src="public/Header/Nav/Logo.jpg" alt="logo-ozon" /></a>
				<HeaderCatalogButton />
				<SearchInput />
				<HeaderIcons />
		</HeaderStyle>
	);
}

export default Header;