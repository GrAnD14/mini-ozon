import { useState } from 'react';
import { Modal } from '../../../components/Modal/Modal.tsx';
import { ButtonWrapper } from './languageCurrency_button.styled.ts';
import ImagesImports from '../../../Imports/ImagesImports';
import LanguageCurrencyModal from '../../ModalUI/LanguageCurrencyModal/LanguageCurrencyModal';

export const LanguageButton = () => {
	const [showModal, setShowModal] = useState(false);
	const [language] = useState('RU'); // если не планируете менять язык из этого компонента

	const toggleModal = () => setShowModal(!showModal);

	return (
		<>
			<ButtonWrapper onClick={toggleModal}>
				<img className='flag' src={ImagesImports.RU} alt='Russian' />
				<span className='lang-code'>{language}</span>
			</ButtonWrapper>

			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<LanguageCurrencyModal onClose={() => setShowModal(false)} />
				</Modal>
			)}
		</>
	);
};
