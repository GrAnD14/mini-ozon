import {MainStyled} from "./Main.styled.ts";
import ProductCard from "../../UI/MainUI/ProductCard/ ProductCard.tsx";

const Main = () => {
	return (
		<MainStyled>
			<ProductCard id={""} title={""} currentPrice={0} originalPrice={0} discount={0} rating={0} reviewsCount={0} />
		</MainStyled>
	);
};

export default Main;