import {IconItem, IconItemImage, IconItemParagraph, IconItemAdmin, StyledHeaderIcons} from "./headerIcons.styled.ts";

const HeaderIcons = () => {
    return (
      <StyledHeaderIcons>
                <IconItem>
                    <IconItemImage className="login" src="/Header/Nav/LogIn.svg" alt="Admin" />
                    <IconItemAdmin className="Admin">Admin</IconItemAdmin>
                </IconItem>

                <IconItem>
                    <IconItemImage className="orders" src="/Header/Nav/Orders.svg" alt="Заказы" />
                    <IconItemParagraph>Заказы</IconItemParagraph>
                </IconItem>

                <IconItem>
                    <IconItemImage className="favorites" src="/Header/Nav/favorites.svg" alt="Избранное" />
                    <IconItemParagraph>Избранное</IconItemParagraph>
                </IconItem>

                <IconItem>
                    <IconItemImage className="cart" src="/Header/Nav/Shopping_cart.svg" alt="Корзина" />
                    <IconItemParagraph>Корзина</IconItemParagraph>
                </IconItem>
      </StyledHeaderIcons>
    );
};

export default HeaderIcons;
