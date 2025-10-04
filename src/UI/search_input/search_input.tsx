import { StyledSearchInput } from "./search_input.styled.ts";

const SearchInput = () => {
    return (
        <StyledSearchInput> {/*передаем нашу переменную сюда, как компонент, в таком виде <Имя_переменной, которую мы создали ранее>.*/}
            {/* А внутри уже пишем все, что нам нужно (хоть добавляем еще новую стилизованную переменную по старой тактике)*/}
        <div className="search-container"> 
            <button className="category-btn">Везде ▾</button> 
            <input className="search-input" type="text" placeholder="Искать на Ozon"/> 
            <img className="icon-camera" src="/Header/Nav/Camera.svg" alt="camera"/> 
            <button className="search-btn-link">
                <img className="search-btn" src="/Header/Nav/Search.svg" alt="search"/>
            </button>
        </div>
        </StyledSearchInput>
    );
};

export default SearchInput;