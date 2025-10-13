import styled from 'styled-components';

export const DropdownWrapper = styled.div`
	position: relative;
	width: 200px;
`;

export const Selected = styled.button`
	width: 100%;
	padding: 8px 12px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 8px;
	cursor: pointer;
	border: 1px solid rgba(200, 200, 200, 1);
	border-radius: 8px;
	background: white;
	font-size: 15px;
	color: #222;
`;

export const SelectedInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const Options = styled.div`
	position: absolute;
	top: calc(100% + 6px);
	left: 0;
	width: 100%;
	background: white;
	border: 1px solid rgba(200, 200, 200, 1);
	border-radius: 8px;
	margin-top: 4px;
	z-index: 300;
	box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
	padding: 6px 6px;
`;

export const Option = styled.button`
	display: flex;
	align-items: center;
	gap: 8px;
	width: 100%;
	padding: 8px 10px;
	cursor: pointer;
	background: transparent;
	border: none;
	border-radius: 6px;
	text-align: left;
	font-size: 15px;
	color: #222;

	&:hover,
	&:focus {
		background: #f5f7fb;
		outline: none;
	}
`;

export const ArrowDown = styled.span`
	font-size: 12px;
	color: rgba(60, 60, 60, 0.85);
`;
