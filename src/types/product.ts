// Это интерфейс - описание того, как выглядит один товар
export interface Product {
	id: string;           // уникальный идентификатор
	title: string;        // название товара
	currentPrice: number; // текущая цена
	originalPrice: number;// старая цена (для скидки)
	discount: number;     // процент скидки
	rating: number;       // рейтинг
	reviewsCount: number; // количество отзывов
}

// Это тип для пропсов (параметров) компонента ProductGrid
export interface ProductGridProps {
	products: Product[];  // массив товаров
	itemsPerRow?: number; // необязательный параметр - кол-во в ряду
}