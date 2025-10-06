import styled from 'styled-components'; // импортируем работу со стилями из библиотеки styled-components

export const StyledHeaderLinks = styled.nav`
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 50px;
    align-items: flex-end;
    padding: 8px 0;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    margin-left: 174px;
    width: 808px;
    height: 17px;
		a {
         color: rgba(125, 125, 125, 1);
    }

    a:hover {
        color: rgba(0, 91, 255, 1);
    }

    
   


`