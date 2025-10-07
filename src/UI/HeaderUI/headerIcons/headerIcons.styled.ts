import styled from 'styled-components'; // импортируем работу со стилями из библиотеки styled-components


export const StyledHeaderIcons = styled.div` //экспортируем переменную с нужным нам именем (обязательно с большой буквы), что бы потом передать ее в компонент
		//Пример: экспортируем константу Имя_переменной = стилизация.Элемент (может быть button, если кнопка. div, если блочный элемент какой-то и т.д. )
		//(img (для стилизации фото), h1-h6(для стилизации заголовков), p(для стилизации параграфов) и т.п.)
		
		//Дальше просто пишем, как обычные стили css
    width: 274px;
    height: 42px;
		display: flex;
		align-items: center;
		justify-content: space-between;
    padding-top: 10px;
`
export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`


export const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`


export const IconItemImage = styled.img`

  width: 24px;
  height: 24px;

	&.LogIn:hover{
		content: url("/Header/Nav/LogIn_blue.svg");
	}
  &.Orders:hover{
		content: url("/Header/Nav/Orders_blue.svg");
	}
  &.Favorites:hover{
		content: url("/Header/Nav/favorites_blue.svg");
	}
  &.Cart:hover{
		content: url("/Header/Nav/Shopping_cart_blue.svg");
	}
`



export const IconItemParagraph = styled.p`
  font-size: 13px;
  color: #555;
  margin: 0;
  font-family: Inter;
	font-size: 14px;
	font-weight: 400;
	line-height: 17px;
  &:hover{
  color: rgba(0, 91, 255, 1);
  }

`
export const IiconItemAdmin = styled.p`
  color: #000000ff;
  margin: 0;
  font-family: Inter;
	font-size: 14px;
	font-weight: 400;
	line-height: 17px;

  &:hover{
  color: rgba(0, 91, 255, 1);
  }
`