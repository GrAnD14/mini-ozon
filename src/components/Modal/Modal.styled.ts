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
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 8px;
	right: 12px;
	font-size: 20px;
	border: none;
	background: transparent;
	cursor: pointer;
`;
