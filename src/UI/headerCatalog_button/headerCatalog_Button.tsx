import { StyledHeaderCatalogButton} from "./headerCatalog_button.styled.ts";

const HeaderCatalogButton = () => {
	return (
		<StyledHeaderCatalogButton> {/*передаем нашу переменную сюда, как компонент, в таком виде <Имя_переменной, которую мы создали ранее>.*/}
			{/* А внутри уже пишем все, что нам нужно (хоть добавляем еще новую стилизованную переменную по старой тактике)*/}
			<img src="/public/Header/Nav/directory.svg" alt="catalog"/>
			Каталог
		</StyledHeaderCatalogButton>
	);
};

export default HeaderCatalogButton;