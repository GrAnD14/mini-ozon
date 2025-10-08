import styled from "styled-components";

export const SocialCenter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  flex: 1;
  margin-right: 40px;
  padding-top: 0;
`;

export const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background-color: #fff;
  transition: background-color 0.25s ease, transform 0.25s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:hover[href*="vk"] {
    background-color: #4680c2;
  }

  &:hover[href*="ok"] {
    background-color: #fa8409;
  }

  &:hover[href*="t.me"] {
    background-color: #2cb5f5;
  }

  img {
    width: 24px;
    height: 24px;
    pointer-events: none;
  }
`;