import styled from 'styled-components'; // импортируем работу со стилями из библиотеки styled-components

export const StyledHeaderCatalogButton = styled.button` //экспортируем переменную с нужным нам именем (обязательно с большой буквы), что бы потом передать ее в компонент
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
		color: #fff;
		font-family: "Inter", sans-serif;
    font-weight: 600;
`;

//как написали нужный нам стиль --> переходим в компонент, куда мы хотим ее добавить (в нашем случае headerCatalog_Button)