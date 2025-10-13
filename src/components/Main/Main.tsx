import { MainStyled } from './Main.styled.ts';
import ProductCard from '../../UI/MainUI/ProductCard/ ProductCard.tsx';
import Slider from './Slider/Slider.tsx';
import type { Product } from '../../types/product';
import { ProductsWrapper } from './Main.styled';

const Main = () => {
	const mockProducts: Product[] = [
		{
			id: '1',
			title: 'Брюки XL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.8,
			reviewsCount: 457,
			image: 'public/Main/images/soroch.jpg'
		},
		{
			id: '2',
			title: 'Брюки XL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: 'public/Main/images/soroch.jpg'
		},
		{
			id: '3',
			title: 'Брюки XL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: 'public/Main/images/soroch.jpg'
		},
		{
			id: '4',
			title: 'Брюки XL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: 'public/Main/images/soroch.jpg'
		},
		{
			id: '5',
			title: 'Брюки XL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: 'public/Main/images/soroch.jpg'
		},
		{
			id: '6',
			title: 'Брюки XL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: 'public/Main/images/soroch.jpg'
		},
		{
			id: '7',
			title: 'Брюки XL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: 'public/Main/images/soroch.jpg'
		},
		{
			id: '8',
			title: 'Брюки XL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: 'public/Main/images/soroch.jpg'
		},
		{
			id: '9',
			title: 'Брюки XL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: 'public/Main/images/soroch.jpg'
		},
		{
			id: '10',
			title: 'Брюки XL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: 'public/Main/images/soroch.jpg'
		}
	];
	return (
		<MainStyled>
			<Slider />
			<ProductsWrapper>
				{mockProducts.map(({ id, ...product }) => (
					<ProductCard key={id} id={id} {...product} />
				))}
			</ProductsWrapper>
		</MainStyled>
	);
};

export default Main;
