import {
    CategoryBtn,
    IconCamera, SearchBtn,
    SearchBtnLink,
    SearchInputBlock,
    StyledSearchInput
} from "./search_input.styled.ts";

const SearchInput = () => {
    return (
        <StyledSearchInput> {/*передаем нашу переменную сюда, как компонент, в таком виде <Имя_переменной, которую мы создали ранее>.*/}
            {/* А внутри уже пишем все, что нам нужно (хоть добавляем еще новую стилизованную переменную по старой тактике)*/}
            <CategoryBtn>Везде ▾</CategoryBtn>
            <SearchInputBlock type="search" placeholder="Искать на Ozon"/>
            <IconCamera src="/Header/Nav/Camera.svg" alt="camera"/>
            <SearchBtnLink>
                <SearchBtn src="/Header/Nav/Search.svg" alt="search"/>
            </SearchBtnLink>
        </StyledSearchInput>
    );
};

export default SearchInput;