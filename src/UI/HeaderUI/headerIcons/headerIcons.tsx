import {IconItem, IconItemImage, IconItemParagraph, IiconItemAdmin, StyledHeaderIcons} from "./headerIcons.styled.ts";

const HeaderIcons = () => {
    return (
      <StyledHeaderIcons>
            {/*передаем нашу переменную сюда, как компонент, в таком виде <Имя_переменной, которую мы создали ранее>.*/}
            {/* А внутри уже пишем все, что нам нужно (хоть добавляем еще новую стилизованную переменную по старой тактике)*/}
                <IconItem>
                    <IconItemImage src="/Header/Nav/LogIn.svg" alt="Admin" />
                    <IiconItemAdmin className="Admin">Admin</IiconItemAdmin>
                </IconItem>

                <IconItem>
                    <IconItemImage src="/Header/Nav/Orders.svg" alt="Заказы" />
                    <IconItemParagraph>Заказы</IconItemParagraph>
                </IconItem>

                <IconItem>
                    <IconItemImage src="/Header/Nav/favorites.svg" alt="Избранное" />
                    <IconItemParagraph>Избранное</IconItemParagraph>
                </IconItem>

                <IconItem>
                    <IconItemImage src="/Header/Nav/Shopping_cart.svg" alt="Корзина" />
                    <IconItemParagraph>Корзина</IconItemParagraph>
                </IconItem>
      </StyledHeaderIcons>
    );
};

export default HeaderIcons;
