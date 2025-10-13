// src/components/Modal/Modal.tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Overlay, ModalWrapper, CloseButton } from './Modal.styled.ts';

interface ModalProps {
	children?: React.ReactNode;
	onClose: () => void;
	ariaLabel?: string;
}

export const Modal: React.FC<ModalProps> = ({ children, onClose, ariaLabel = 'Dialog' }) => {
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		document.addEventListener('keydown', onKey);
		const prev = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			document.removeEventListener('keydown', onKey);
			document.body.style.overflow = prev;
		};
	}, [onClose]);

	const content = (
		<Overlay onClick={onClose}>
			<ModalWrapper role='dialog' aria-modal='true' aria-label={ariaLabel} onClick={e => e.stopPropagation()}>
				<CloseButton aria-label='Close' onClick={onClose}>
					×
				</CloseButton>
				{children}
			</ModalWrapper>
		</Overlay>
	);

	return ReactDOM.createPortal(content, document.body);
};
