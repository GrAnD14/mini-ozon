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
			image: ImagesImports.Smartphone,
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
			image: ImagesImports.Clothes,
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Обувь',
			name_category: 'Обувь',
			image: ImagesImports.WomenShoe,
			subcategories: [
				{ title: 'Телефоны и смарт-часы', items: ['Смартфоны', 'Аксессуары', 'Фитнес-браслеты'] },
				{ title: 'Компьютеры и периферия', items: ['Мониторы', 'Системные блоки', 'Ноутбуки'] }
			]
		},
		{
			name: 'Дом и сад',
			name_category: 'Дом и сад',
			image: ImagesImports.HouseWithaGarden,
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Красота и здоровье',
			name_category: 'Красота и здоровье',
			image: ImagesImports.Beautician,
			subcategories: [
				{ title: 'Телефоны и смарт-часы', items: ['Смартфоны', 'Аксессуары', 'Фитнес-браслеты'] },
				{ title: 'Компьютеры и периферия', items: ['Мониторы', 'Системные блоки', 'Ноутбуки'] }
			]
		},
		{
			name: 'Бытовая техника',
			name_category: 'Бытовая техника',
			image: ImagesImports.Appliances,
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Спорт и отдых',
			name_category: 'Спорт и отдых',
			image: ImagesImports.TennisRacquet,
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Строительство и ремонт',
			name_category: 'Строительство и ремонт',
			image: ImagesImports.Engineer,
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Продукты питания',
			name_category: 'Продукты питания',
			image: ImagesImports.MilkBottle,
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Аптека',
			name_category: 'Аптека',
			image: ImagesImports.Trust,
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Товары для животных',
			name_category: 'Товары для животных',
			image: ImagesImports.DogHouse,
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Книги',
			name_category: 'Книги',
			image: ImagesImports.Books,
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Туризм, рыбалка, охота',
			name_category: 'Туризм, рыбалка, охота',
			image: ImagesImports.SportsFishing,
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Автотовары',
			name_category: 'Автотовары',
			image: ImagesImports.Wheel,
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Мебель',
			name_category: 'Мебель',
			image: ImagesImports.Sofa,
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Хобби и творчество',
			name_category: 'Хобби и творчество',
			image: ImagesImports.Artist,
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Ювелирные украшения',
			name_category: 'Ювелирные украшения',
			image: ImagesImports.Jewel,
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Аксессуары',
			name_category: 'Аксессуары',
			image: ImagesImports.Barbershop,
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Игры и консоли',
			name_category: 'Игры и консоли',
			image: ImagesImports.XboxController,
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Канцелярские товары',
			name_category: 'Канцелярские товары',
			image: ImagesImports.Pencil,
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Товары для взрослых',
			name_category: 'Товары для взрослых',
			image: ImagesImports.KeepAwayFromChildren,
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Антиквариат и коллекционирование',
			name_category: 'Антиквариат и коллекционирование',
			image: ImagesImports.Collectibles,
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Цифровые товары',
			name_category: 'Цифровые товары',
			image: ImagesImports.CompactCamera,
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Бытовая химия и гигиена',
			name_category: 'Бытовая химия и гигиена',
			image: ImagesImports.TestTube,
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Музыка и видео',
			name_category: 'Музыка и видео',
			image: ImagesImports.MusicalNote,
			subcategories: [
				{ title: 'Мужская', items: ['Куртки', 'Футболки', 'Джинсы'] },
				{ title: 'Женская', items: ['Платья', 'Юбки', 'Блузки'] }
			]
		},
		{
			name: 'Автомобили',
			name_category: 'Автомобили',
			image: ImagesImports.Fiat,
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
								<img src={c.image} alt={c.name} style={{ width: '28px', height: '28px', marginRight: '8px' }} />
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
