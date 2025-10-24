import { CategoryBtn, IconCamera, SearchBtn, SearchBtnLink, SearchInputSpace, StyledSearchInput, CategoryList, CategoryListWrapper, CategoryListContainer } from './search_input.styled.ts';
import ImagesImports from '../../../types/ImagesImports.ts';
import { useState } from 'react';
import { categories } from '../../../types/ProductCard_types/productArray.ts';
const SearchInput = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeCategory, setActiveCategory] = useState('Везде');

	return (
		<StyledSearchInput>
			<CategoryBtn
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				Везде ▾
			</CategoryBtn>
			{isOpen && (
				<CategoryListContainer>
					<div className='any'>
						<img src={ImagesImports.Search_ctg} alt='Search_ctg' style={{ width: '18px', height: '18px', marginRight: '8px' }} />
						Везде
					</div>
					<CategoryListWrapper>
						{categories.map(c => (
							<CategoryList key={c.name} onMouseEnter={() => setActiveCategory(c.name)} className={activeCategory === c.name ? 'active' : ''}>
								<img src={c.image} alt={c.name} style={{ width: '18px', height: '18px', marginRight: '8px' }} />
								{c.name}
							</CategoryList>
						))}
					</CategoryListWrapper>
				</CategoryListContainer>
			)}
			<SearchInputSpace type='search' placeholder='Искать на Ozon' />
			<IconCamera src={ImagesImports.Camera} alt='camera' />
			<SearchBtnLink className='search-btn-link'>
				<SearchBtn className='search-btn' src={ImagesImports.SearchSVG} alt='search' />
			</SearchBtnLink>
		</StyledSearchInput>
	);
};

export default SearchInput;
