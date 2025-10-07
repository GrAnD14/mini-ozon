import styled from 'styled-components';

// Контейнер для всей карточки
export const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px;
  background: white;
	width: 223px;
  height: 393px;
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

// Блок для изображения товара
export const Image = styled.div`
  width: 100%;
  height: 278px;
  background: #f5f5f5;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

// Блок для цен
export const PriceSection = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
`;

// Текущая цена
export const CurrentPrice = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

// Старая цена
export const OldPrice = styled.span`
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
`;

// Скидка
export const Discount = styled.span`
  font-size: 14px;
  color: #ff3b30;
  font-weight: 500;
`;

// Название товара
export const Title = styled.h3`
  font-size: 14px;
  font-weight: normal;
  margin: 0 0 8px 0;
  line-height: 1.4;
`;

// Блок рейтинга и отзывов
export const RatingSection = styled.div`
  display: flex;
  gap: 8px;
  font-size: 12px;
  color: #666;
`;