import styled from 'styled-components';

export const MainStyled = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	margin-top: 65px;
	flex-direction: row;
	flex-wrap: wrap;
`;

export const ProductsWrapper = styled.div`
	display: flex;
	width: 1500px;
	flex-wrap: wrap;
	flex-direction: row;
	column-gap: 30px;
	background: rgb(255, 255, 255);
	border-radius: 32px;
	height: 100%;
	padding-top: 50px;
	justify-content: center;
`;

export const ProductsWrapper_sec = styled.div`
	display: flex;
	width: 1500px;
	flex-wrap: wrap;
	flex-direction: row;
	column-gap: 30px;
	background: rgb(255, 255, 255);
	border-radius: 32px;
	height: 100%;
	padding-top: 50px;
	justify-content: center;
`;

export const ProductsWrapper_th = styled.div`
	display: flex;
	width: 1500px;
	flex-wrap: wrap;
	flex-direction: row;
	column-gap: 30px;
	background: rgb(255, 255, 255);
	border-radius: 32px;
	height: 100%;
	padding-top: 50px;
	justify-content: center;
`;

export const Banner = styled.section`
	width: 1500px;
	height: 100px;
	background: black;
	border-radius: 14px;
	margin: 10px 0;
	background: url('/Main/Images/banner.png') center/cover no-repeat;
	cursor: pointer;

	&:hover {
		background: url('/Main/Images/banner_grey.png') center/cover no-repeat;
	}
`;

export const Banners = styled.section`
	width: 1500px;
	height: 200px;
	border-radius: 14px;
	margin: 10px 0;
	cursor: pointer;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background: rgb(255, 255, 255);
	align-items: center;
	padding: 0px 30px;
	
	.autumn_ft {
	background: url("/Main/Images/autumn_ft.jpg") center/cover no-repeat;
	width: 410px;
	height: 150px;
	border-radius: 14px;
	}
	.autumn_sec {
	background: url("/Main/Images/autumn_sec.jpg") center/cover no-repeat;
	width: 410px;
	height: 150px;
	border-radius: 14px;
	}
	.autumn_th {
	background: url("/Main/Images/autumn_th.jpg") center/cover no-repeat;
	width: 410px;
	height: 150px;
	border-radius: 14px;
	}
	
	}
`;
