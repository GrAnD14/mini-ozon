import styled from 'styled-components';

export const ItemWrapper = styled.div<{ selected?: boolean }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 12px 14px;
	border-radius: 10px;
	cursor: pointer;
	transition: all 0.25s ease;
	font-size: 14px;
	color: #000;
	background: ${({ selected }) => (selected ? 'rgba(0, 91, 255, 0.08)' : '#f7f7f8')};
	border: ${({ selected }) => (selected ? '2px solid #005bff' : '2px solid transparent')};

	&:hover {
		background: rgba(0, 91, 255, 0.1);
	}

	.address-text {
		flex: 1;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	button {
		background: none;
		border: none;
		color: #999;
		font-size: 18px;
		line-height: 1;
		cursor: pointer;
		padding: 0 4px;
		transition: color 0.2s ease;

		&:hover {
			color: #000;
		}
	}
`;
