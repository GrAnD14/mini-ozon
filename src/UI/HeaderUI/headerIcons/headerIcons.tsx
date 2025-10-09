import { IconItem, IconItemImage, IconItemParagraph, IiconItemAdmin, StyledHeaderIcons } from './headerIcons.styled.ts';
import ImagesImports from '../../../Imports/ImagesImports.ts';
const HeaderIcons = () => {
	return (
		<StyledHeaderIcons>
			{/*передаем нашу переменную сюда, как компонент, в таком виде <Имя_переменной, которую мы создали ранее>.*/}
			{/* А внутри уже пишем все, что нам нужно (хоть добавляем еще новую стилизованную переменную по старой тактике)*/}
			<IconItem>
				<IconItemImage className='LogIn' src={ImagesImports.LogIn} alt='Admin' />
				<IiconItemAdmin className='Admin'>Admin</IiconItemAdmin>
			</IconItem>

			<IconItem>
				<IconItemImage className='Orders' src={ImagesImports.Orders} alt='Заказы' />
				<IconItemParagraph>Заказы</IconItemParagraph>
			</IconItem>

			<IconItem>
				<IconItemImage className='Favorites' src={ImagesImports.favorites} alt='Избранное' />
				<IconItemParagraph>Избранное</IconItemParagraph>
			</IconItem>

			<IconItem>
				<IconItemImage className='Cart' src={ImagesImports.Shopping_cart} alt='Корзина' />
				<IconItemParagraph>Корзина</IconItemParagraph>
			</IconItem>
		</StyledHeaderIcons>
	);
};

export default HeaderIcons;
