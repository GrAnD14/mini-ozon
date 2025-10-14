import { IconItem, IconItemImage, IconItemParagraph, StyledHeaderIcons } from './headerIcons.styled.ts';
import ImagesImports from '../../../types/ImagesImports.ts';

import LogIn_Form from '../LogIn_Form/LogIn_Form.tsx';

const HeaderIcons = () => {
	return (
		<StyledHeaderIcons>
			<LogIn_Form />

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
