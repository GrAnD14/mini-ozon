import styled from 'styled-components';

export const AddressContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	gap: 16px;
	color: #000;
	font-family: Inter, sans-serif;
	width: min(480px, 92vw);
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
`;

export const ImageWrapper = styled.div`
	width: 100%;
	height: 140px;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 8px;
		display: block;
	}
`;

export const Description = styled.p`
	font-size: 16px;
	color: #7d7d7d;
	line-height: 1.4;
	margin: 10px 0;
`;

export const AddressButtonWrapper = styled.button`
	display: flex;
	align-items: center;
	gap: 8px;
	background: #f7f7f8;
	border-radius: 10px;
	padding: 10px 12px;
	cursor: pointer;
	width: 100%;
	border: none;
	font-size: 14px;
	color: #333;
	font-weight: 500;
	text-align: left;

	.city {
		font-weight: 700;
		color: #000;
	}

	.dot {
		color: #999;
	}

	.set-address {
		flex: 1;
		color: #666;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		max-width: 220px; /* ensure it doesn't overflow header controls */
	}
`;

export const AddressListWrapper = styled.div`
	max-height: 220px;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	gap: 8px;
	margin-top: 6px;
	padding-right: 6px;
`;

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
	padding: 14px 18px;
	border-radius: 10px;
	cursor: pointer;
	font-weight: 600;
	width: 100%;
	box-shadow: 0 8px 22px rgba(0, 91, 255, 0.12);
	font-size: 15px;
`;

export const NoteText = styled.div`
	font-size: 13px;
	color: #fff;
	text-align: center;
	line-height: 1.3;
	user-select: none;
	font-weight: 400;
`;
