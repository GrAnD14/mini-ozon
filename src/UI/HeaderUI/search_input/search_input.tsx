import { CategoryBtn, IconCamera, SearchBtn, SearchBtnLink, SearchInputSpace, StyledSearchInput } from './search_input.styled.ts';
import ImagesImports from '../../../types/ImagesImports.ts';

const SearchInput = () => {
	return (
		<StyledSearchInput>
			<CategoryBtn>Везде ▾</CategoryBtn>
			<SearchInputSpace type='search' placeholder='Искать на Ozon' />
			<IconCamera src={ImagesImports.Camera} alt='camera' />
			<SearchBtnLink className='search-btn-link'>
				<SearchBtn className='search-btn' src={ImagesImports.SearchSVG} alt='search' />
			</SearchBtnLink>
		</StyledSearchInput>
	);
};

export default SearchInput;
