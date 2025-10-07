import { StyledHeaderIcons } from "./header_icons_styled.ts";

const HeaderIcons = () => {
    return (
        <StyledHeaderIcons> {/*передаем нашу переменную сюда, как компонент, в таком виде <Имя_переменной, которую мы создали ранее>.*/}
            {/* А внутри уже пишем все, что нам нужно (хоть добавляем еще новую стилизованную переменную по старой тактике)*/}
            <div className="icons">
                <div className="icon-item">
                    <img src="/Header/Nav/LogIn.svg" alt="Admin" />
                    <p className="Admin">Admin</p>
                </div>

                <div className="icon-item">
                    <img src="/Header/Nav/Orders.svg" alt="Заказы" />
                    <p>Заказы</p>
                </div>

                <div className="icon-item">
                    <img src="/Header/Nav/favorites.svg" alt="Избранное" />
                    <p>Избранное</p>
                </div>

                <div className="icon-item">
                    <img src="/Header/Nav/Shopping_cart.svg" alt="Корзина" />
                    <p>Корзина</p>
                </div>
            </div>

        </StyledHeaderIcons>
    );
};

export default HeaderIcons;
