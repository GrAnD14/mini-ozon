import HeaderCatalogButton from "../../../UI/headerCatalog_button/headerCatalog_Button.tsx";
import SearchInput from "../../../UI/search_input/search_input.tsx";
import HeaderIcons from "../../../UI/headerIcons/headerIcons.tsx";
import HeaderLinks from "../../../UI/headerlinks/headerlinks.tsx";

function HeaderTop() {
	return (
		<>
			<HeaderCatalogButton />
			<SearchInput />
			<HeaderIcons />
			<HeaderLinks />
		</>
	);
}

export default HeaderTop;