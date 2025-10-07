import styled from 'styled-components'; // импортируем работу со стилями из библиотеки styled-components

export const StyledHeaderIcons = styled.div` //экспортируем переменную с нужным нам именем (обязательно с большой буквы), что бы потом передать ее в компонент
		//Пример: экспортируем константу Имя_переменной = стилизация.Элемент (может быть button, если кнопка. div, если блочный элемент какой-то и т.д. )
		//(img (для стилизации фото), h1-h6(для стилизации заголовков), p(для стилизации параграфов) и т.п.)
		
		//Дальше просто пишем, как обычные стили css
    width: 25px;
    height: 42px;
	display: flex;

.icons {
  display: flex;
  align-items: center;
  gap: 30px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.icon-item img {
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
}

.icon-item p {
  font-size: 13px;
  color: #555;
  margin: 0;
  font-family: Inter;
	font-size: 14px;
	font-weight: 400;
	line-height: 17px
}

.icon-item .Admin {
  font-size: 13px;
  color: #000000ff;
  margin: 0;
  font-family: Inter;
	font-size: 14px;
	font-weight: 400;
	line-height: 17px
}
	
`;