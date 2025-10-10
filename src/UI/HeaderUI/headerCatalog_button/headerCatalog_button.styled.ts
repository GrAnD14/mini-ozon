import styled from 'styled-components'; // импортируем работу со стилями из библиотеки styled-components

export const StyledHeaderCatalogButton = styled.button`
	//экспортируем переменную с нужным нам именем (обязательно с большой буквы), что бы потом передать ее в компонент
	//Пример: экспортируем константу Имя_переменной = стилизация.Элемент (может быть button, если кнопка. div, если блочный элемент какой-то и т.д. )
	//(img (для стилизации фото), h1-h6(для стилизации заголовков), p(для стилизации параграфов) и т.п.)

	//Дальше просто пишем, как обычные стили css
	width: 140px;
	height: 43px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 11px;
	background: rgba(0, 91, 255, 1);
	padding: 13px 15px;
	border-radius: 10px;
	color: #ffffffff;
	font-family: 'Inter', sans-serif;
	font-weight: 600;
	&:hover {
		background: rgba(0, 89, 255, 0.72);
	}
`;
export const Wrapper = styled.div`
	position: relative;
	overflow: visible;
`;

export const Menu = styled.div`
	position: absolute;
	top: 68px;
	left: -200px;
	height: 1000px;
	width: 1400px;
	display: flex;
	background: #ffffffff;
	z-index: 10;
`;

export const Sidebar = styled.div`
	width: 250px;
	background: #ffffffff;
	max-height: 100vh;
	overflow-y: auto;
	padding-top: 50px;
`;

export const CategoryItem = styled.div`
	padding: 12px 16px;
	cursor: pointer;
	font-family: 'Inter', 'Arial', sans-serif;
	font-size: 15px;
	line-height: 22px;
	color: #4d4d4d;
	&:hover {
		background: #fff;
		color: #005bff;
	}
`;

export const ContentArea = styled.div`
	display: flex;
	flex-wrap: wrap;
	column-gap: 50px;
	padding: 0px 50px;
	max-height: 100vh;
	overflow-y: auto;
	width: 1100px;
	align-items: flex-start;
`;

export const Subcategory = styled.div`
	h3 {
		font-size: 16px;
		font-weight: 600;
		cursor: pointer;
		margin-top: 50px;
	}
	li {
		color: #4d4d4d;
		font-family: Inter;
		font-size: 14px;
		font-weight: 400;
		line-height: 25px;
		cursor: pointer;
	}
	li:hover {
		color: #000000ff;
	}
`;

//как написали нужный нам стиль --> переходим в компонент, куда мы хотим ее добавить (в нашем случае headerCatalog_Button)
