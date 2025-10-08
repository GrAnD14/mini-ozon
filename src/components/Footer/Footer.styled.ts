import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding: 40px;
  background: #f6f8fb;
  width: 100%;
  box-sizing: border-box;
`;

export const Container = styled.div`
  max-width: 1472px;
  margin: 0 auto;
  width: 100%;
`;

export const TopArea = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: nowrap;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
`;

export const LinksArea = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 240px;
  gap: 20px;       
  overflow: hidden;
  width: 100%;    
  box-sizing: border-box;
`;