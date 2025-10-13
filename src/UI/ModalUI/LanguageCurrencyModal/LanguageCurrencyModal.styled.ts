import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	padding: 46px;
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	gap: 16px;
`;

export const Title = styled.h2`
	margin: 0;
	font-size: 27px;
	font-weight: 600;
	align-items: center;
	box-sizing: border-box;
	display: flex;
	width: 100%;
	word-break: break-word;
	color: rgb(7, 7, 7);
	font-style: sans-serif;
`;

export const Description = styled.p`
	margin: 0;
	color: rgba(125, 132, 139, 1);
	font-size: 16px;
	line-height: 1.3;
	font-weight: 400;
`;

export const TwoCols = styled.div`
	margin-top: 12px;
	display: flex;
	gap: 18px;
	align-items: flex-start;
`;

export const Col = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const Label = styled.label`
	font-size: 16px;
	color: rgba(80, 80, 80, 1);
	font-size: 16px;
	font-weight: 600;
`;

export const SelectWrapper = styled.div`
	position: relative;
	width: 100%;
`;

export const NativeSelect = styled.select`
	width: 100%;
	padding: 10px 40px 10px 12px;
	border-radius: 8px;
	border: 1px solid rgba(200, 200, 200, 1);
	background: white;
	font-size: 15px;
	color: #333;
	cursor: pointer;
	outline: none;
	transition: border-color 0.2s ease;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	line-height: 1.4;

	&:hover {
		border-color: #999;
	}

	&:focus {
		border-color: #0b74de;
	}
`;

export const SelectArrow = styled.span`
	position: absolute;
	right: 12px;
	top: 50%;
	transform: translateY(-50%);
	pointer-events: none; /* allows clicking through */
	font-size: 12px;
	color: #555;
`;

export const Actions = styled.div`
	margin-top: auto;
	display: flex;
	justify-content: flex-start;
	gap: 12px;
`;

export const SaveButton = styled.button`
	background: #005bff;
	color: white;
	border: none;
	padding: 10px 16px;
	border-radius: 8px;
	cursor: pointer;
	font-weight: 600;
	display: block;
	width: 115px;
	height: 45px;
`;

export const CancelButton = styled.button`
	background: transparent;
	color: #333;
	border: 1px solid rgba(200, 200, 200, 1);
	padding: 10px 16px;
	border-radius: 8px;
	cursor: pointer;
`;
