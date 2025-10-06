import styled from 'styled-components'; // импортируем работу со стилями из библиотеки styled-components

export const StyledHeaderLinks = styled.nav` //экспортируем переменную с нужным нам именем (обязательно с большой буквы), что бы потом передать ее в компонент
		//Пример: экспортируем константу Имя_переменной = стилизация.Элемент (может быть button, если кнопка. div, если блочный элемент какой-то и т.д. )
		//(img (для стилизации фото), h1-h6(для стилизации заголовков), p(для стилизации параграфов) и т.п.)
		
		//Дальше просто пишем, как обычные стили css
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 50px;
    align-items: flex-end;
    padding: 8px 0;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    margin-bottom: 40px;
    margin-left: 174px;
    width: 808px;
    height: 17px;

    a {
         color: rgba(125, 125, 125, 1);
    }

    a:hover {
        color: rgba(0, 91, 255, 1);
    }

    
   


`