import {StyledHeaderLinks} from "./headerlinks.styled.ts";

const HeaderLinks = () => {
    return (
      <StyledHeaderLinks>
            {/*передаем нашу переменную сюда, как компонент, в таком виде <Имя_переменной, которую мы создали ранее>.*/}
            {/* А внутри уже пишем все, что нам нужно (хоть добавляем еще новую стилизованную переменную по старой тактике)*/}
        <a href="#">Ozon fresh</a>
        <a href="#">Ozon Карта</a>
        <a href="#">Билеты, отели</a>
        <a href="#">Для бизнеса</a>
        <a href="#">Одежда, обувь</a>
        <a href="#">Электроника</a>

      </StyledHeaderLinks>
    );
};

export default HeaderLinks;