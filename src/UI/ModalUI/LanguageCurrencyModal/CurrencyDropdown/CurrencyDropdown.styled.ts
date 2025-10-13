// CurrencyDropdown.styled.ts
import styled from 'styled-components';

export const DropdownWrapper = styled.div`
	position: relative;
	width: 100%;
	max-width: 360px;
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
	text-align: left;
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
	padding: 6px 0;
`;

/* Each option is now a two-line layout. */
export const Option = styled.button`
	display: flex;
	flex-direction: column;
	align-items: flex-start; /* left align */
	gap: 2px;
	width: 100%;
	padding: 10px 14px;
	cursor: pointer;
	background: transparent;
	border: none;
	text-align: left;

	/* separator line at bottom of each option */
	border-bottom: 1px solid rgba(220, 220, 220, 1);

	font-size: 15px;
	color: #222;

	&:hover,
	&:focus {
		background: #f5f7fb;
		outline: none;
	}

	/* remove separator for last-child */
	&:last-child {
		border-bottom: none;
	}
`;

/* Upper (primary) text */
export const OptionPrimary = styled.span`
	display: block;
	font-size: 15px;
	color: #222;
	line-height: 1.1;
`;

/* Lower (secondary) text — lighter and smaller */
export const OptionSecondary = styled.span`
	display: block;
	font-size: 13px;
	color: rgba(100, 110, 120, 1);
	line-height: 1.1;
`;
export const ArrowDown = styled.span`
	font-size: 12px;
	color: rgba(60, 60, 60, 0.85);
`;
