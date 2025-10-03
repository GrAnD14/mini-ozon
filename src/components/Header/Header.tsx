import HeaderCatalogButton from "../../UI/headerCatalog_button/headerCatalog_Button.tsx";
import {HeaderStyle} from "./header.styled.ts";

function Header() {
	return (
		<HeaderStyle>
				<div className="HeaderTop"><HeaderCatalogButton/></div>
				<div className="HeaderContent">asdasd</div>
		</HeaderStyle>
	);
}

export default Header;