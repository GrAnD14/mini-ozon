import {
    CategoryBtn,
    IconCamera, SearchBtn,
    SearchBtnLink,
    SearchInputSpace,
    StyledSearchInput
} from "./search_input.styled.ts";

const SearchInput = () => {
    return (
        <StyledSearchInput>
            <CategoryBtn>Везде ▾</CategoryBtn>
            <SearchInputSpace type="search" placeholder="Искать на Ozon"/>
            <IconCamera src="/Header/Nav/Camera.svg" alt="camera"/>
            <SearchBtnLink className="search-btn-link">
                <SearchBtn className="search-btn" src="/Header/Nav/Search.svg" alt="search"/>
            </SearchBtnLink>
        </StyledSearchInput>
    );
};

export default SearchInput;