import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

export const StyledMarquee = styled.div` //экспортируем переменную с нужным нам именем (обязательно с большой буквы), что бы потом передать ее в компонент
		//Пример: экспортируем константу Имя_переменной = стилизация.Элемент (может быть button, если кнопка. div, если блочный элемент какой-то и т.д. )
		//(img (для стилизации фото), h1-h6(для стилизации заголовков), p(для стилизации параграфов) и т.п.)
		
		//Дальше просто пишем, как обычные стили css
    overflow: hidden;
    color: rgba(250, 251, 253, 1);
    font-family: Inter;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    width: 486px;
    height: 24px;
    
  span {
    display: inline-block;
    animation: ${scroll} 10s linear infinite;
}
`;