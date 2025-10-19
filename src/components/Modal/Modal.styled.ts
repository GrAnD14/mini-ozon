import styled from 'styled-components';

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.3);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;
`;

export const ModalWrapper = styled.div`
	max-width: 712px;
	background: white;
	border-radius: 10px;
	padding: 20px;
	position: relative;
	z-index: 1000;
`;

export const CloseButton = styled.button`
	position: absolute;
	top: -5px;
	right: -60px;
	width: 36px;
	height: 36px;
	display: flex;
	justify-content: center;
	align-items: center;

	border: none;
	border-radius: 50%;
	background: #fff;
	color: rgba(0, 26, 52, 0.6);
	font-size: 24px;
	cursor: pointer;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
	&:hover {
		background: #f2f2f2;
	}
`;
