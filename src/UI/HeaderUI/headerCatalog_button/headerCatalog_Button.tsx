import {
	StyledHeaderCatalogButton,
	Wrapper,
	Menu,
	Sidebar,
	CategoryItem,
	ContentArea,
	Subcategory
} from "./headerCatalog_button.styled.ts";
import { useState } from "react";

const HeaderCatalogButton = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeCategory, setActiveCategory] = useState("Электроника");
	const categories = [
		{
			name: "Электроника",
			subcategories: [
				{ title: "Телефоны и смарт-часы", items: ["Смартфоны", "Аксессуары", "Фитнес-браслеты"] },
				{ title: "Компьютеры и периферия", items: ["Мониторы", "Системные блоки", "Ноутбуки"] },
				{ title: "Умный дом", items: ["Аксессуары", "Выключатели и реле", "Датчики и регуляторы"] },
				{ title: "Ноутбуки, планшеты и электронные книги", items: ["Ноутбуки", "Игровые ноутбуки", "Планшеты"] },
			],
		},
		{
			name: "Одежда",
			subcategories: [
				{ title: "Мужская", items: ["Куртки", "Футболки", "Джинсы"] },
				{ title: "Женская", items: ["Платья", "Юбки", "Блузки"] },
			],
		},
		{
			name: "Обувь",
			subcategories: [
				{ title: "Телефоны и смарт-часы", items: ["Смартфоны", "Аксессуары", "Фитнес-браслеты"] },
				{ title: "Компьютеры и периферия", items: ["Мониторы", "Системные блоки", "Ноутбуки"] },
			],
		},
		{
			name: "Дом и сад",
			subcategories: [
				{ title: "Мужская", items: ["Куртки", "Футболки", "Джинсы"] },
				{ title: "Женская", items: ["Платья", "Юбки", "Блузки"] },
			],
		},
		{
			name: "Красота и здоровье",
			subcategories: [
				{ title: "Телефоны и смарт-часы", items: ["Смартфоны", "Аксессуары", "Фитнес-браслеты"] },
				{ title: "Компьютеры и периферия", items: ["Мониторы", "Системные блоки", "Ноутбуки"] },
			],
		},
		{
			name: "Бытовая техника",
			subcategories: [
				{ title: "Мужская", items: ["Куртки", "Футболки", "Джинсы"] },
				{ title: "Женская", items: ["Платья", "Юбки", "Блузки"] },
			],
		},
	];

	return (
		<Wrapper>
			<StyledHeaderCatalogButton onClick={() => setIsOpen(!isOpen)}>
				<img src="/Header/Nav/directory.svg" alt="catalog" />
				Каталог
			</StyledHeaderCatalogButton>

			{isOpen && (
				<Menu>
					<Sidebar>
						{categories.map((c) => (
							<CategoryItem
								key={c.name}
								onMouseEnter={() => setActiveCategory(c.name)}
								className={activeCategory === c.name ? "active" : ""}
							>
								{c.name}
							</CategoryItem>
						))}
					</Sidebar>

					<ContentArea>
						{categories
							.find((c) => c.name === activeCategory)
							?.subcategories.map((sub) => (
								<Subcategory key={sub.title}>
									<h3>{sub.title}</h3>
									<ul>
										{sub.items.map((i) => (
											<li key={i}>{i}</li>
										))}
									</ul>
								</Subcategory>
							))}
					</ContentArea>
				</Menu>
			)}
		</Wrapper>
	);
};


export default HeaderCatalogButton;