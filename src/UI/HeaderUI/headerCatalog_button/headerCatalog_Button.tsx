import { StyledHeaderCatalogButton, Wrapper, Menu, Sidebar, CategoryItem, ContentArea, Subcategory } from './headerCatalog_button.styled.ts';
import { useState } from 'react';
import ImagesImports from '../../../types/ImagesImports.ts';
import { categories } from '../../../types/productArray.ts';

const HeaderCatalogButton = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeCategory, setActiveCategory] = useState('Электроника');

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
