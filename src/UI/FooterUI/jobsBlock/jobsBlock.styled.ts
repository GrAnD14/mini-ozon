import styled from "styled-components";

export const JobsSection = styled.div`
  margin: 0 0 30px 0;
  max-width: 1472px;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  padding: 20px 40px 20px 20px;
  box-sizing: border-box;
  background: rgba(237, 241, 247, 1);
  box-shadow: 0 1px 0 rgba(16, 24, 40, 0.03);
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;

  img {
    display: block;
    height: 33px;
    width: 140px;
  }
`;


export const JobsIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 55px;
  margin-left: auto;
  flex-wrap: wrap;
  height: 24px;
  overflow: hidden;
`;


export const IconItem = styled.a<{ $special? : "fresh" | "warehouse" }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.12s ease, color 0.12s ease;

  img {
    height: ${(props) => (props.$special ? "20px" : "18px")};
    width: auto;
    transition: filter 0.12s ease;
  }

  &:hover,
  &:focus {
    img {
      filter: invert(24%) sepia(98%) saturate(3600%) hue-rotate(207deg)
        brightness(90%) contrast(105%);
    }

    /* THIS will change the text color of the child title */
    h5 {
      color: #005bff;
    }
  }
`;


export const IconTitle = styled.h5`
  margin: 0;
  font-family: "Onest", Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #070707;
  line-height: 1;
  text-align: center;
`;