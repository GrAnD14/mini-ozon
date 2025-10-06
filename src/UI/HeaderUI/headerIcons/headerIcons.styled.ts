import styled from 'styled-components';

export const StyledHeaderIcons = styled.div`
    width: 274px;
    height: 42px;
		display: flex;
		align-items: center;
		justify-content: space-between;
`
export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`


export const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`


export const IconItemImage = styled.img`

  width: 24px;
  height: 24px;
  margin-bottom: 4px;
  &.login:hover {
        content: url("/Header/Nav/LogIn_blue.svg");
		}
  &.orders:hover {
        content: url("/Header/Nav/Orders_blue.svg");
		}
  &.favorites:hover {
        content: url("/Header/Nav/favorites_blue.svg");
		}
  &.cart:hover {
        content: url("/Header/Nav/Shopping_cart_blue.svg");
		}                  
`



export const IconItemParagraph = styled.p`
  font-size: 13px;
  color: #555;
  margin: 0;
  font-family: Inter;
	font-size: 14px;
	font-weight: 400;
	line-height: 17px;
  &:hover{
    color: rgba(0, 91, 255, 1);
  }

`
export const IconItemAdmin = styled.p`
  font-size: 13px;
  color: #000000ff;
  margin: 0;
  font-family: Inter;
	font-size: 14px;
	font-weight: 400;
	line-height: 17px;
  &:hover{
    color: rgba(0, 91, 255, 1);
  
`