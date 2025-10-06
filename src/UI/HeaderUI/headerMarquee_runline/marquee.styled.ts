import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

export const StyledMarquee = styled.div`
    overflow: hidden;
    color: rgba(250, 251, 253, 1);
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: 24px;
    
`
export const RunLine = styled.span`
    display: inline-block;
    animation: ${scroll} 10s linear infinite;
`
