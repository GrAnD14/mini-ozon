import { CategoryBtn, IconCamera, SearchBtn, SearchBtnLink, SearchInputSpace, StyledSearchInput, CategoryList } from './search_input.styled.ts';
import ImagesImports from '../../../types/ImagesImports.ts';
import { useState } from 'react';
const SearchInput = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<StyledSearchInput>
			<CategoryBtn
				onClick={() => {
					setIsOpen(!isOpen);
					document.body.style.backgroundColor = isOpen ? '' : 'white';
				}}
			>
				Везде ▾
			</CategoryBtn>
			{isOpen && (
				<CategoryList>
					<li>Одежда</li>
					<li>Обувь</li>
					<li>Электроника</li>
					<li>Дом</li>
				</CategoryList>
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
