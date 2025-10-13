import styled from 'styled-components';

export const AddressButtonWrapper = styled.button`
	display: inline-flex;
	align-items: center;
	gap: 4px;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 4px 8px;
	border-radius: 4px;
	transition: background-color 0.2s ease;
	max-width: 100%;
	margin-right: -120px;

	.city {
		color: rgba(0, 0, 0, 0.8);
		font-family: Inter, sans-serif;
		font-size: 14px;
		font-weight: 500;
	}

	.dot {
		color: rgba(0, 0, 0, 0.4);
	}

	.set-address {
		color: rgba(0, 26, 255, 1); /* Ozon’s blue */
		font-family: Inter, sans-serif;
		font-size: 14px;
		font-weight: 500;
	}

	&:hover {
		background-color: rgba(224, 228, 238, 0.4);
	}
`;
