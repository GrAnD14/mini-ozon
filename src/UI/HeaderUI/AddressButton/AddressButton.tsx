import React, { useState } from 'react';
import AddressModal from '../../../components/Modal/AddressModal/AddressModal';
import { Modal } from '../../../components/Modal/Modal';
import { AddressButtonWrapper } from './AddressButton.styled';

export const AddressButton: React.FC = () => {
	const [open, setOpen] = useState(false);
	const saved = localStorage.getItem('uiAddress') ?? '';

	return (
		<>
			<AddressButtonWrapper onClick={() => setOpen(true)} aria-haspopup='dialog'>
				<span className='city'>Москва</span> {/*need to chenge when have an address chosen  !!!!*/}
				<span className='dot'>•</span>
				<span className='set-address'>{saved || 'Укажите адрес'}</span>
			</AddressButtonWrapper>

			{open && (
				<Modal onClose={() => setOpen(false)} ariaLabel='Выбор адреса'>
					<AddressModal onClose={() => setOpen(false)} />
				</Modal>
			)}
		</>
	);
};

export default AddressButton;
