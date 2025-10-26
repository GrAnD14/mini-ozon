import styled from 'styled-components';

export const PickpointOverlay = styled.div`
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.32);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1200;
	padding: 20px;
`;

export const PickpointWrapper = styled.div`
	width: min(1000px, 94vw);
	min-height: 84vh;
	max-height: 120vh;
	background: #fff;
	border-radius: 12px;
	display: flex;
	overflow: hidden;
	box-shadow: 0 12px 40px rgba(9, 30, 66, 0.12);
	position: relative;
`;

export const LeftPane = styled.div`
	width: 360px;
	padding: 20px;
	box-sizing: border-box;
	border-right: 1px solid #f1f3f6;
	display: flex;
	flex-direction: column;
	gap: 12px;
	background: #fff;
`;

export const RightPane = styled.div`
	flex: 1;
	min-height: 420px;
	background: #f6f7fb;
	display: flex;
	align-items: stretch;
	justify-content: stretch;
`;

export const Heading = styled.h3`
	margin: 0;
	font-size: 27px;
	font-weight: 700;
	color: rgb(0, 26, 52);
`;

export const SubHeading = styled.h4`
	margin: 0;
	font-size: 20px;
	font-weight: 700;
	color: rgb(0, 26, 52);
`;

export const GreyText = styled.p`
	margin: 0;
	font-size: 13px;
	color: rgba(0, 0, 0, 0.55);
	line-height: 1.4;
`;

export const ModeRow = styled.div`
	display: flex;
	gap: 8px;
	margin-top: 8px;
`;

export const ModeToggle = styled.button<{ active?: boolean }>`
	flex: 1;
	width: 100%;
	padding: 12px;
	border-radius: 10px;
	border: none;
	background: ${p => (p.active ? '#005bff' : '#f6f7fb')};
	color: ${p => (p.active ? '#fff' : 'rgba(0,0,0,0.85)')};
	font-weight: 700;
	font-size: 14px;
	cursor: pointer;
	box-shadow: ${p => (p.active ? '0 8px 22px rgba(0,91,255,0.12)' : 'none')};
	transition:
		transform 0.06s ease,
		background 0.12s ease,
		box-shadow 0.12s ease;

	&:hover {
		filter: ${p => (p.active ? 'brightness(0.98)' : 'brightness(0.98)')};
		transform: translateY(-1px);
	}
`;

export const SearchField = styled.div`
	position: relative;
	margin-top: 10px;
	width: 100%;
`;

export const FloatingLabel = styled.label<{ float?: boolean }>`
	position: absolute;
	left: 12px;
	top: ${p => (p.float ? '6px' : '50%')};
	transform: translateY(${p => (p.float ? '0' : '-50%')});
	font-size: ${p => (p.float ? '12px' : '14px')};
	color: ${p => (p.float ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.5)')};
	transition: all 0.12s ease;
	pointer-events: none;
	background: white;
	padding: 0 6px;
`;

export const SearchInput = styled.input`
	width: 100%;
	padding: 20px 40px 14px 12px;
	border-radius: 8px;
	border: 1px solid #e6e9ef;
	font-size: 14px;
	outline: none;
	box-sizing: border-box;
	background: white;

	&:focus {
		border-color: #9bbfff;
		box-shadow: 0 0 0 6px rgba(155, 191, 255, 0.06);
	}
`;

export const ClearButton = styled.button`
	position: absolute;
	right: 8px;
	top: 50%;
	transform: translateY(-50%);
	width: 28px;
	height: 28px;
	border-radius: 6px;
	border: none;
	background: transparent;
	color: rgba(0, 0, 0, 0.6);
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	font-size: 16px;

	&:hover {
		background: #f2f2f2;
	}
`;

export const SuggestionsBox = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	top: calc(100% + 6px);
	z-index: 1500;
	background: #fff;
	border: 1px solid #e6e9ef;
	border-radius: 8px;
	box-shadow: 0 8px 20px rgba(9, 30, 66, 0.08);
	max-height: 240px;
	overflow: auto;
`;

export const SuggestionRow = styled.div`
	padding: 10px 12px;
	border-bottom: 1px solid #f4f5f7;
	cursor: pointer;
	font-size: 13px;
	color: #0a0a0a;

	&:last-child {
		border-bottom: none;
	}

	&:hover {
		background: #f6fbff;
	}
`;

export const SuggestionTitle = styled.div`
	font-weight: 600;
`;

export const SuggestionSubtitle = styled.div`
	font-size: 12px;
	color: rgba(0, 0, 0, 0.6);
	margin-top: 4px;
`;

// Map placeholder and close button
export const MapPlaceholder = styled.div`
	flex: 1;
	min-height: 420px;
	display: flex;
	align-items: stretch;
	justify-content: stretch;

	.leaflet-container {
		width: 100%;
		height: 100%;
	}
`;

export const PickpointClose = styled.button`
	position: absolute;
	top: 16px;
	right: 16px;
	width: 36px;
	height: 36px;
	border-radius: 50%;
	background: #fff;
	border: none;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
	cursor: pointer;
	font-size: 20px;
	color: rgba(0, 26, 52, 0.6);
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		background: #f2f2f2;
		transform: scale(1.03);
	}
`;
