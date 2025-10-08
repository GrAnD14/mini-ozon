import styled from "styled-components";

export const LinksColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 240px; 
  max-width: 240px; 
  padding-right: 80px; 
  box-sizing: border-box;
`;

export const LinksTitle = styled.span`
  font-family: "Onest", Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #070707;
  margin-bottom: 8px;

  display: block;
  white-space: nowrap;
  overflow: visible;   /* never show "..." */
  text-overflow: clip;
`;

export const LinksItem = styled.a`
  font-size: 14px;
  color: rgba(0, 26, 52, 0.6);
  margin-bottom: 8px;
  text-decoration: none;

  display: block;
  width: 240px;     
  white-space: nowrap; 
  overflow: visible; 
  text-overflow: clip;

  &:hover {
    color: #005bff;
    transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;