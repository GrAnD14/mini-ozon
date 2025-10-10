import { MainStyled } from './Main.styled.ts';
import ProductCard from '../../UI/MainUI/ProductCard/ ProductCard.tsx';
import Slider from './Slider/Slider.tsx';
import type { Product } from '../../types/product';

const Main = () => {
	const mockProducts: Product[] = [
		{
			id: '1',
			title: 'Наушники Sony WH-1000XM5',
			currentPrice: 32990,
			originalPrice: 37990,
			discount: 13,
			rating: 4.8,
			reviewsCount: 457
		},
		{
			id: '2',
			title: 'Смартфон Samsung Galaxy S24',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312
		},
		{
			id: '3',
			title: 'Смартфон Samsung Galaxy S24',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312
		},
		{
			id: '4',
			title: 'Смартфон Samsung Galaxy S24',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312
		},
		{
			id: '5',
			title: 'Смартфон Samsung Galaxy S24',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312
		},
		{
			id: '6',
			title: 'Смартфон Samsung Galaxy S24',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312
		},
		{
			id: '7',
			title: 'Смартфон Samsung Galaxy S24',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312
		},
		{
			id: '8',
			title: 'Смартфон Samsung Galaxy S24',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312
		},
		{
			id: '9',
			title: 'Смартфон Samsung Galaxy S24',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312
		},
		{
			id: '10',
			title: 'Смартфон Samsung Galaxy S24',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312
		}
	];
	return (
		<MainStyled>
			<Slider />
			{mockProducts.map(({ id, ...product }) => (
				<ProductCard key={id} id={id} {...product} />
			))}
		</MainStyled>
	);
};

export default Main;
