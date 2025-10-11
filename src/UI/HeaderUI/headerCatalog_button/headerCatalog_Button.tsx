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
			name_category: 'Обувь',
			subcategories: [
				{ title: 'Телефоны и смарт-часы', items: ['Смартфоны', 'Аксессуары', 'Фитнес-браслеты'] },
				{ title: 'Компьютеры и периферия', items: ['Мониторы', 'Системные блоки', 'Ноутбуки'] }
			]
		},
		{
			name: 'Дом и сад',
			name_category: 'Дом и сад',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Красота и здоровье',
			name_category: 'Красота и здоровье',
			subcategories: [
				{ title: 'Телефоны и смарт-часы', items: ['Смартфоны', 'Аксессуары', 'Фитнес-браслеты'] },
				{ title: 'Компьютеры и периферия', items: ['Мониторы', 'Системные блоки', 'Ноутбуки'] }
			]
		},
		{
			name: 'Бытовая техника',
			name_category: 'Бытовая техника',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Спорт и отдых',
			name_category: 'Спорт и отдых',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Строительство и ремонт',
			name_category: 'Строительство и ремонт',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Продукты питания',
			name_category: 'Продукты питания',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Аптека',
			name_category: 'Аптека',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Товары для животных',
			name_category: 'Товары для животных',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Книги',
			name_category: 'Книги',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Туризм, рыбалка, охота',
			name_category: 'Туризм, рыбалка, охота',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Автотовары',
			name_category: 'Автотовары',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Мебель',
			name_category: 'Мебель',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Хобби и творчество',
			name_category: 'Хобби и творчество',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Ювелирные украшения',
			name_category: 'Ювелирные украшения',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Аксессуары',
			name_category: 'Аксессуары',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Игры и консоли',
			name_category: 'Игры и консоли',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Канцелярские товары',
			name_category: 'Канцелярские товары',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Товары для взрослых',
			name_category: 'Товары для взрослых',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Антиквариат и коллекционирование',
			name_category: 'Антиквариат и коллекционирование',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Цифровые товары',
			name_category: 'Цифровые товары',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Бытовая химия и гигиена',
			name_category: 'Бытовая химия и гигиена',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Музыка и видео',
			name_category: 'Музыка и видео',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Автомобили',
			name_category: 'Автомобили',
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		}
	];

	return (
		<Wrapper>
			<StyledHeaderCatalogButton
				onClick={() => {
					setIsOpen(!isOpen);
					document.body.style.backgroundColor = isOpen ? '' : 'white';
				}}
			>
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
												fontWeight: 'bold',
												lineHeight: '1.1' // плотнее текст
											}}
										>
											{active.name_category}
										</span>
									)}
									<div className='subcategory-container'>
										{active.subcategories.map(sub => (
											<div key={sub.title}>
												<Subcategory>
													<h3>{sub.title}</h3>
													<ul>
														{sub.items.map(i => (
															<li key={i}>{i}</li>
														))}
													</ul>
												</Subcategory>
											</div>
										))}
									</div>
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
