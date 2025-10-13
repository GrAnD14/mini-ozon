import styled, { css } from 'styled-components';

export const AddressContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	gap: 16px;
	color: #000;
	font-family: Inter, sans-serif;
	width: min(480px, 92vw); /* responsive, desktop ~480px */
	max-height: 80vh;
	background: #fff;
	border-radius: 12px;
	box-sizing: border-box;
	overflow: hidden;
	margin: auto;
	box-shadow: 0 8px 28px rgba(9, 30, 66, 0.12);
`;

export const Title = styled.h2`
	margin: 0;
	font-size: 22px;
	font-weight: 700;
	text-align: center;
	line-height: 28px;
	color: rgb(0, 26, 52);
	font-family: Inter, sans-serif;
`;

export const ImageWrapper = styled.div`
	width: 100%;
	height: 180px; /* consistent visual weight */
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover; /* fills nicely while keeping aspect */
		border-radius: 8px;
		display: block;
	}
`;

export const Description = styled.p`
	box-sizing: border-box;
	display: flex;
	width: 90%;
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	line-height: 1.4;
	color: #7d7d7d;
	text-align: left;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;

	word-break: break-word;
	margin: 10px;
`;

export const Modes = styled.div`
	display: flex;
	gap: 8px;
	margin-top: 4px;
	justify-content: center;
`;

export const ModeButton = styled.button<{ isActive?: boolean }>`
	padding: 8px 12px;
	border-radius: 8px;
	border: 1px solid transparent;
	background: transparent;
	cursor: pointer;
	font-weight: 600;
	font-size: 14px;

	${p =>
		p.isActive
			? css`
					background: #f0f6ff;
					border-color: #d6e7ff;
					color: #0845b3;
				`
			: css`
					color: rgba(0, 0, 0, 0.7);
				`}
`;

export const ContentArea = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

export const Label = styled.label`
	font-size: 13px;
	color: rgba(0, 0, 0, 0.85);
	margin-bottom: 6px;
`;

export const Row = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;
`;

export const Input = styled.input`
	flex: 1;
	padding: 10px 12px;
	border: 1px solid #e6e9ef;
	border-radius: 8px;
	font-size: 14px;
	outline: none;

	&:focus {
		border-color: #9bbfff;
		box-shadow: 0 0 0 6px rgba(155, 191, 255, 0.08);
	}
`;

export const AddressList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-top: 6px;
`;

export const AddressItem = styled.div`
	padding: 10px 12px;
	border: 1px solid #e9eefb;
	border-radius: 8px;
	background: #fff;
	cursor: pointer;
	transition:
		background-color 0.15s ease,
		transform 0.06s ease;

	&:hover {
		background: #f6faff;
		transform: translateY(-1px);
	}
`;

/* Actions area — now vertical and centered for big button + note */
export const Actions = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	margin-top: 8px;
`;

export const BigActionButton = styled.button`
	background: #005bff;
	color: #fff;
	border: none;
	padding: 16px 20px;
	border-radius: 10px;
	cursor: pointer;
	font-weight: 600;
	font-family: sans-serif;
	width: 100%;
	box-shadow: 0 8px 22px rgba(0, 91, 255, 0.12);
	font-size: 16px;
	letter-spacing: 0px;
	line-height: 24px;
	transition:
		transform 0.08s ease,
		box-shadow 0.12s ease;

	&:active {
		transform: translateY(1px);
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 6px rgba(0, 91, 255, 0.12);
	}
`;

export const NoteText = styled.div`
	font-size: 13px;
	color: #fff;
	text-align: center;
	line-height: 1.3;
	user-select: none;
	font-weight: 400;
`;

export const SaveButton = styled.button`
	background: #005bff;
	color: white;
	border: none;
	padding: 14px 20px;
	border-radius: 8px;
	cursor: pointer;
	font-weight: 600;
	font-size: 16px;
`;

export const CancelButton = styled.button`
	background: transparent;
	border: 1px solid #e2e2e2;
	padding: 14px 20px;
	border-radius: 8px;
	cursor: pointer;
	font-size: 16px;
`;

export const SubText = styled.span`
	font-size: 13px;
	color: rgba(0, 0, 0, 0.6);
`;
