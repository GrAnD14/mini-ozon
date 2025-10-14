import React from 'react';
import type { Product } from '../../../types/ProductCard_types/product.ts';
import { Card, Image, PriceSection, CurrentPrice, OldPrice, Discount, Title, RatingSection, ReviewsBtn, CardButtonWrapper, BuyBtn } from './ProductCard.styled.ts';

// Создаем компонент карточки товара
// Product - это тип пропсов (параметров), которые принимает компонент
const ProductCard: React.FC<Product> = ({ title, currentPrice, originalPrice, discount, rating, reviewsCount, image }) => {
	return (
		<Card>
			{/* Место для изображения товара */}
			<Image src={image} alt={title} />

			{/* Блок с ценами */}
			<PriceSection>
				<CurrentPrice>{currentPrice} ₽</CurrentPrice>
				<OldPrice>{originalPrice} ₽</OldPrice>
				<Discount>-{discount}%</Discount>
			</PriceSection>

			{/* Название товара */}
			<Title>{title}</Title>

			{/* Рейтинг и отзывы */}
			<RatingSection>
				<span>⭐ {rating}</span>
				<span>💬 {reviewsCount}</span>
			</RatingSection>

			<CardButtonWrapper>
				<BuyBtn>Заказать</BuyBtn>
				<ReviewsBtn>Отзывы</ReviewsBtn>
			</CardButtonWrapper>
		</Card>
	);
};

export default ProductCard;
