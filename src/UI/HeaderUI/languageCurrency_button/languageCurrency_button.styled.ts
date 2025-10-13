import styled from 'styled-components';

export const ButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 6px;
	cursor: pointer;
	padding: 0 2px;
	border-radius: 4px;
	background: transparent;
	margin-left: 5px;

	.flag {
		width: 24px;
		height: 24px;
		object-fit: cover;
		display: block;
		border-radius: 3px;
	}

	.lang-code {
		color: rgba(129, 128, 128, 1);
		font-family: Inter, system-ui, Arial, sans-serif;
		font-size: 16px;
		font-weight: 400;
		line-height: 19px;
		text-align: left;
	}

	&:hover {
		background-color: rgba(224, 228, 238, 1);
	}
`;
