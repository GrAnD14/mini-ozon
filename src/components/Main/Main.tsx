import { MainStyled } from './Main.styled.ts';
import ProductCard from '../../UI/MainUI/ProductCard/ ProductCard.tsx';
import Slider from './Slider/Slider.tsx';
import type { Product } from '../../types/ProductCard_types/product.ts';
import { ProductsWrapper } from './Main.styled';
import { ProductsWrapper_sec } from './Main.styled';
import { ProductsWrapper_th } from './Main.styled';
import { Banner } from './Main.styled';
import { Banners } from './Main.styled';
import ImagesImports from '../../types/ImagesImports.ts';

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
			image: ImagesImports.soroch
		},
		{
			id: '2',
			title: 'Брюки XL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: ImagesImports.soroch
		},
		{
			id: '3',
			title: 'Брюки XL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: ImagesImports.soroch
		},
		{
			id: '4',
			title: 'Брюки XL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: ImagesImports.soroch
		},
		{
			id: '5',
			title: 'Брюки XL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: ImagesImports.soroch
		},
		{
			id: '6',
			title: 'Брюки XL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: ImagesImports.soroch
		},
		{
			id: '7',
			title: 'Брюки XL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: ImagesImports.soroch
		},
		{
			id: '8',
			title: 'Брюки XL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: ImagesImports.soroch
		},
		{
			id: '9',
			title: 'Брюки XL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: ImagesImports.soroch
		},
		{
			id: '10',
			title: 'Брюки XL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: ImagesImports.soroch
		}
	];

	const mockProducts_sec: Product[] = [
		{
			id: '1',
			title: 'Брюки XXL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.8,
			reviewsCount: 457,
			image: ImagesImports.soroch
		},
		{
			id: '2',
			title: 'Брюки XXL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: ImagesImports.soroch
		},
		{
			id: '3',
			title: 'Брюки XXL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: ImagesImports.soroch
		},
		{
			id: '4',
			title: 'Брюки XXL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: ImagesImports.soroch
		},
		{
			id: '5',
			title: 'Брюки XXL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: ImagesImports.soroch
		},
		{
			id: '6',
			title: 'Брюки XXL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: ImagesImports.soroch
		},
		{
			id: '7',
			title: 'Брюки XXL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: ImagesImports.soroch
		},
		{
			id: '8',
			title: 'Брюки XXL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: ImagesImports.soroch
		},
		{
			id: '9',
			title: 'Брюки XXL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: ImagesImports.soroch
		},
		{
			id: '10',
			title: 'Брюки XXL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: ImagesImports.soroch
		},
		{
			id: '11',
			title: 'Брюки XXL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: ImagesImports.soroch
		},
		{
			id: '12',
			title: 'Брюки XXL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: ImagesImports.soroch
		},
		{
			id: '13',
			title: 'Брюки XXL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: ImagesImports.soroch
		},
		{
			id: '14',
			title: 'Брюки XXL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: ImagesImports.soroch
		},
		{
			id: '15',
			title: 'Брюки XXL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: ImagesImports.soroch
		}
	];

	const mockProducts_th: Product[] = [
		{
			id: '1',
			title: 'Брюки XXXL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.8,
			reviewsCount: 457,
			image: ImagesImports.soroch
		},
		{
			id: '2',
			title: 'Брюки XXXL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: ImagesImports.soroch
		},
		{
			id: '3',
			title: 'Брюки XXXL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: ImagesImports.soroch
		},
		{
			id: '4',
			title: 'Брюки XXXL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: ImagesImports.soroch
		},
		{
			id: '5',
			title: 'Брюки XXXL',
			currentPrice: 74990,
			originalPrice: 84990,
			discount: 12,
			rating: 4.9,
			reviewsCount: 312,
			image: ImagesImports.soroch
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
			<Banner />
			<ProductsWrapper_sec>
				{mockProducts_sec.map(({ id, ...product }) => (
					<ProductCard key={id} id={id} {...product} />
				))}
			</ProductsWrapper_sec>
			<Banners>
				<div className='autumn_ft'></div>
				<div className='autumn_sec'></div>
				<div className='autumn_th'></div>
			</Banners>
			<ProductsWrapper_th>
				{mockProducts_th.map(({ id, ...product }) => (
					<ProductCard key={id} id={id} {...product} />
				))}
			</ProductsWrapper_th>
		</MainStyled>
	);
};

export default Main;
