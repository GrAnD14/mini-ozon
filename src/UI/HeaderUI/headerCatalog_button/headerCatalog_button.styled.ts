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
	top: 66px;
	left: -200px;
	height: 1000px;
	width: 1400px;
	display: flex;
	background: #ffffffff;
	z-index: 10;
	font-family: 'Inter', sans-serif;
`;

export const Sidebar = styled.div`
	width: 250px;
	background: #ffffffff;
	max-height: 100vh;
	overflow-y: auto;
	padding-top: 70px;
	padding-right: 20px;
`;

export const CategoryItem = styled.div`
	display: flex;
	padding: 12px 16px;
	cursor: pointer;
	font-family: 'Inter', 'Arial', sans-serif;
	font-size: 15px;
	line-height: 22px;
	color: #4d4d4d;
	&:hover {
		background: #c4c4c41e;
		color: #005bff;
		border-radius: 6px;
	}
`;

export const ContentArea = styled.div`
	padding-left: 50px;
	overflow-y: auto;
	height: 500px;
	width: 1200px;
	.subcategory-container {
		display: flex;
		column-gap: 70px;
		row-gap: 50px;
		flex-wrap: wrap;
		width: 900px;
	}
`;

export const Subcategory = styled.div`
	width: 200px;
	max-height: 80px;
	line-height: 25px;
	margin-top: 25px;
	h3 {
		font-size: 16px;
		font-weight: 600;
		cursor: pointer;
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
