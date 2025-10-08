import styled from "styled-components";

export const QrBlock = styled.div`
  align-items: center;
  border: 1px solid rgba(0, 26, 52, 0.2);
  border-radius: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 23px;
  text-align: center;
  margin-right: 30px;
  width: 265px;
  flex: 0 0 265px;
  height: 606px; /* match original height */
`;

export const QrImage = styled.img`
  border-radius: 16px;
  height: 190px;
  width: 190px;
  object-fit: cover;
  border: none;
  outline: none;
  overflow: clip;
`;

export const QrTitle = styled.p`
  color: rgba(0, 26, 52, 0.6);
  font-size: 16px;
  margin: 16px auto;
  max-width: 230px;
  line-height: 1.2;
`;

export const DownloadButtons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;

  img {
    width: 42px;
    height: 42px;
  }
`;