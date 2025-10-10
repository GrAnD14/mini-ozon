import { StyledHeaderCatalogButton, Wrapper, Menu, Sidebar, CategoryItem, ContentArea, Subcategory } from './headerCatalog_button.styled.ts';
import { useState } from 'react';
import ImagesImports from '../../../Imports/ImagesImports.ts';

const HeaderCatalogButton = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeCategory, setActiveCategory] = useState('Электроника');
	const categories = [
		{
			name: 'Электроника',
			name_category: 'Электроника',
			subcategories: [
				{ title: 'Телефоны и смарт-часы', items: ['Смартфоны', 'Аксессуары', 'Фитнес-браслеты'] },
				{ title: 'Компьютеры и периферия', items: ['Мониторы', 'Системные блоки', 'Ноутбуки'] },
				{ title: 'Умный дом', items: ['Аксессуары', 'Выключатели и реле', 'Датчики и регуляторы'] },
				{ title: 'Ноутбуки, планшеты и электронные книги', items: ['Ноутбуки', 'Игровые ноутбуки', 'Планшеты'] }
			]
		},
		{
			name: 'Одежда',
			name_category: 'Одежда',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Обувь',
			subcategories: [
				{ name_category: 'Обувь', title: 'Телефоны и смарт-часы', items: ['Смартфоны', 'Аксессуары', 'Фитнес-браслеты'] },
				{ title: 'Компьютеры и периферия', items: ['Мониторы', 'Системные блоки', 'Ноутбуки'] }
			]
		},
		{
			name: 'Дом и сад',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Красота и здоровье',
			subcategories: [
				{ title: 'Телефоны и смарт-часы', items: ['Смартфоны', 'Аксессуары', 'Фитнес-браслеты'] },
				{ title: 'Компьютеры и периферия', items: ['Мониторы', 'Системные блоки', 'Ноутбуки'] }
			]
		},
		{
			name: 'Бытовая техника',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Спорт и отдых',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Строительство и ремонт',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Продукты питания',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Аптека',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Товары для животных',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Книги',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Туризм, рыбалка, охота',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Автотовары',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Мебель',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Хобби и творчество',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Ювелирные украшения',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Аксессуары',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Игры и консоли',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Канцелярские товары',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Товары для взрослых',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Антиквариат и коллекционирование',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Цифровые товары',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Бытовая химия и гигиена',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Музыка и видео',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Автомобили',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		}
	];

	return (
		<Wrapper>
			<StyledHeaderCatalogButton onClick={() => setIsOpen(!isOpen)}>
				<img src={ImagesImports.directory} alt='catalog' />
				Каталог
			</StyledHeaderCatalogButton>

			{isOpen && (
				<Menu>
					<Sidebar>
						{categories.map(c => (
							<CategoryItem key={c.name} onMouseEnter={() => setActiveCategory(c.name)} className={activeCategory === c.name ? 'active' : ''}>
								{c.name}
							</CategoryItem>
						))}
					</Sidebar>

					<ContentArea>
						{(() => {
							const active = categories.find(c => c.name === activeCategory);
							if (!active) return null;

							return (
								<>
									{active.name_category && (
										<span
											style={{
												fontSize: '32px',
												color: '#000000',
												display: 'block',
												marginBottom: '8px', // расстояние под заголовком
												lineHeight: '1.1' // плотнее текст
											}}
										>
											{active.name_category}
										</span>
									)}

									{active.subcategories.map(sub => (
										<Subcategory key={sub.title}>
											<h3>{sub.title}</h3>
											<ul>
												{sub.items.map(i => (
													<li key={i}>{i}</li>
												))}
											</ul>
										</Subcategory>
									))}
								</>
							);
						})()}
					</ContentArea>
				</Menu>
			)}
		</Wrapper>
	);
};

export default HeaderCatalogButton;
