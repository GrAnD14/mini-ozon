import HeaderCatalogButton from "../../UI/headerCatalog_button/headerCatalog_Button.tsx";
import {HeaderStyle} from "./header.styled.ts";
import SearchInput from "../../UI/search_input/search_input.tsx";
import HeaderIcons from "../../UI/header_icons/header_icons.tsx";


function Header() {
	return (
		<HeaderStyle>
				<img src="public/Header/Nav/Logo.jpg" alt="logo-ozon" />
				<div className="HeaderTop"><HeaderCatalogButton /></div>
				<div className="Search"><SearchInput /></div>
				<div className="HeaderContent"><HeaderIcons /></div>
		</HeaderStyle>
	);
}

export default Header;