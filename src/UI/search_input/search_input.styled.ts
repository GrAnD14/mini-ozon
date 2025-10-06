import styled from 'styled-components';

export const StyledSearchInput = styled.div` //экспортируем переменную с нужным нам именем (обязательно с большой буквы), что бы потом передать ее в компонент
		//Пример: экспортируем константу Имя_переменной = стилизация.Элемент (может быть button, если кнопка. div, если блочный элемент какой-то и т.д. )
		//(img (для стилизации фото), h1-h6(для стилизации заголовков), p(для стилизации параграфов) и т.п.)
		
		//Дальше просто пишем, как обычные стили css без указывания классов и скобок (1-й переменной = 1 стилизация. Новая переменная = новая стилизация)
		display: flex;
  	align-items: center;
	justify-content: space-between;
  	border: 2px solid rgba(0, 91, 255, 1);
  	border-radius: 10px;
  	width: 664px;
  	height: 47px;
  	background: none;
`
export const CategoryBtn = styled.button`
	margin-right: 8px;
	border-radius: 6px;
	background: rgba(245, 245, 245, 1);
	width: 150px;
	height: 37.21px;
	color: rgba(102, 102, 102, 1);
	font-family: 'Inter', sans-serif;
	font-size: 14px;
	font-weight: 400;
	line-height: 17px;

	&:hover {
		color: rgba(0, 91, 255, 1);
	}
`

export const SearchInputBlock = styled.input`
	padding-left: 8px;
	width: 100%;
	height: 43.08px;
	background: rgba(255, 255, 255, 1);
	border-radius: 10px;
	color: rgba(0, 0, 0, 1);
	font-family: 'Inter', sans-serif;
	font-size: 14px;
	font-weight: 400;
	line-height: 17px;
`

export const IconCameraLink = styled.a`
  	display: inline-block;
`
export const IconCamera = styled.img`
  	margin-right: 15px;
		cursor: pointer;
		&:hover {
        content: url("/Header/Nav/Camera_hover.svg");
		}
`

export const SearchBtnLink = styled.a`
    width: 100px;
    height: 45px;
    border-radius: 6px;
    background: rgba(0, 91, 255, 1);
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 auto;
    &:hover {
        background: rgb(96, 146, 229);
    }
`
export const SearchBtn = styled.img`
	width: 24.34px;
	height: 45px;
	border-radius: 10px;
	cursor: pointer;
    margin: 0 auto;
	`
