import {StyledMarquee} from "./marquee.styled.ts";


const Marquee = () => {
    return (
        <StyledMarquee> {/*передаем нашу переменную сюда, как компонент, в таком виде <Имя_переменной, которую мы создали ранее>.*/}
            {/* А внутри уже пишем все, что нам нужно (хоть добавляем еще новую стилизованную переменную по старой тактике)*/}
            <span>БОЛЬШАЯ РАСПРОДАЖА ЭЛЕКТРОНИКИ</span>
        </StyledMarquee>
    );
};

export default Marquee;