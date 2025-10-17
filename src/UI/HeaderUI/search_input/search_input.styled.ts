import styled from 'styled-components';

export const StyledSearchInput = styled.div`
	position: sticky;
	display: flex;
	align-items: center;
	border: 3px solid rgba(0, 91, 255, 1);
	border-radius: 10px;
	width: 664px;
	height: 47px;
	background: rgba(255, 255, 255, 1);
	padding-left: 6px;
	padding-right: 40px;
	z-index: 1000;
`;

export const CategoryBtn = styled.button`
	margin-right: 8px;
	border-radius: 6px;
	background: rgba(245, 245, 245, 1);
	width: 100.68px;
	height: 37.21px;
	color: rgba(102, 102, 102, 1);
	font-family: 'Inter', sans-serif;
	font-size: 14px;
	font-weight: 400;
	line-height: 17px;
	&:hover {
		color: rgba(0, 91, 255, 1);
	}
`;

export const CategoryListContainer = styled.div`
	background: rgba(255, 255, 255, 1);
	position: absolute;
	top: 15px;
	left: 45px;
	width: 590px;
	height: 650px;
	border-radius: 30px;
	display: flex;
	flex-wrap: wrap;
	z-index: 1000;
	flex-direction: column;
	align-items: center;
	row-gap: 30px;
	justify-content: center;
	.any {
		display: flex;
		align-items: center;
		margin-right: 250px;
		width: 247px;
		height: 35px;
		cursor: pointer;
	}
	.any:hover {
		background: #b3d7f5ff;
		color: rgba(0, 91, 255, 1);
	}
`;

export const CategoryListWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	column-gap: 5px;
	row-gap: 5px;
	justify-content: center;
	width: 500px;
`;

export const CategoryList = styled.div`
	background: rgba(255, 255, 255, 1);
	width: 247px;
	height: 35px;
	display: flex;
	align-items: center;
	cursor: pointer;
	&:hover {
		background: rgba(193, 222, 247, 0.93);
		color: rgba(0, 91, 255, 1);
	}
`;

export const SearchInputSpace = styled.input`
	padding-left: 8px;
	width: 559.05px;
	height: 100%;
	background: rgba(255, 255, 255, 1);
	border-radius: 10px;
	color: rgba(0, 0, 0, 1);
	font-family: 'Inter', sans-serif;
	font-size: 14px;
	font-weight: 400;
	line-height: 17px;
	border-radius-right: 10px;
`;

export const IconCameraLink = styled.div`
	display: inline-block;
`;

export const IconCamera = styled.img`
	transform: translate(30px, 0px);
	cursor: pointer;
	&:hover {
		content: url('/Header/Nav/Camera_hover.svg');
	}
`;

export const SearchBtnLink = styled.button`
	width: 80px;
	height: 45px;
	border-radius: 10px;
	transform: translate(41px, 0px);
	background: rgba(0, 91, 255, 1);
	&:hover {
		background: rgba(0, 89, 255, 0.87);
	}
`;

export const SearchBtn = styled.img`
	width: 24.34px;
	height: 45px;
	border-radius: 10px;
	cursor: pointer;
`;
