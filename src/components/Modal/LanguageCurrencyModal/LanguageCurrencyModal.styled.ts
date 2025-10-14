import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	padding: 32px 40px;
`;

export const Title = styled.h2`
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 8px;
`;

export const Description = styled.p`
	font-size: 14px;
	color: rgba(0, 0, 0, 0.6);
	line-height: 1.5;
	margin-bottom: 24px;
`;

export const TwoCols = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 40px;
`;

export const Col = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
`;

export const Label = styled.label`
	font-size: 14px;
	color: #333;
	margin-bottom: 6px;
`;

export const NativeSelect = styled.select`
	padding: 8px 12px;
	border: 1px solid #ccc;
	border-radius: 6px;
	font-size: 14px;
`;

export const Actions = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 12px;
	margin-top: 24px;
`;

export const SaveButton = styled.button`
	background-color: #005bff;
	color: #fff;
	border: none;
	border-radius: 6px;
	padding: 8px 16px;
	cursor: pointer;
	font-weight: 500;

	&:hover {
		background-color: #004ae6;
	}
`;

export const CancelButton = styled.button`
	background: transparent;
	border: 1px solid #ccc;
	border-radius: 6px;
	padding: 8px 16px;
	cursor: pointer;
	font-weight: 500;
	color: #333;

	&:hover {
		background-color: #f2f2f2;
	}
`;
