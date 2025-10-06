import {HeaderStyle, LogoOzon} from "./header.styled.ts";
import HeaderTop from "./HeaderTop/HeaderTop.tsx";


function Header() {
	return (
		<HeaderStyle>
				<a href="#"><LogoOzon src="/Header/Nav/Logo.jpg" alt="logo-ozon" /></a>
				<HeaderTop/>
				
		</HeaderStyle>
	);
}

export default Header;