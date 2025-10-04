import styled from 'styled-components';

export const StyledSearchInput = styled.div` //экспортируем переменную с нужным нам именем (обязательно с большой буквы), что бы потом передать ее в компонент
		//Пример: экспортируем константу Имя_переменной = стилизация.Элемент (может быть button, если кнопка. div, если блочный элемент какой-то и т.д. )
		//(img (для стилизации фото), h1-h6(для стилизации заголовков), p(для стилизации параграфов) и т.п.)
		
		//Дальше просто пишем, как обычные стили css
.search-container {
	position: sticky;
	display: flex;
  	align-items: center;
  	border: 2px solid rgba(0, 91, 255, 1);
  	border-radius: 10px;
  	width: 664px;
  	height: 47px;
  	background: rgba(0, 91, 255, 1);
  	padding-left: 6px; 
	padding-right: 40px; 
}

.category-btn {
 	margin-right: 8px; 
	border-radius: 6px;
	background: rgba(245, 245, 245, 1);
	width: 100.68px;
	height: 37.21px;
	color: rgba(102, 102, 102, 1);
	font-family: Inter;
	font-size: 14px;
	font-weight: 400;
	line-height: 17px;
}

.search-input {
  	padding-left: 8px;  
	width: 559.05px;
	height: 43.08px;
	background: rgba(255, 255, 255, 1);
	border-radius: 10px;
	color: rgba(125, 125, 125, 1);
	font-family: Inter;
	font-size: 14px;
	font-weight: 400;
	line-height: 17px
}

.icon-camera-link {
  	display: inline-block;
}

.icon-camera {
  	margin-right: 10px; 
	transform: translate(-50px, 0px);
	cursor: pointer;
}

.icon-camera:hover {
	content: url("/Header/Nav/Camera_hover.svg"); 
}

.search-btn-link {
	width: 80px;
	height: 45px;
	border-radius: 10px;
}

.search-btn-link:hover {
	background: rgba(198, 216, 251, 0.2);
}

.search-btn {
	width: 24.34px;
	height: 45px;
	border-radius: 10px;
	cursor: pointer;
}

`;
