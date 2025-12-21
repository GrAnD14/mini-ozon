import { StyledChangeThemesButton } from './changethemes_button.styled.ts';
import { useState } from 'react';

const ChangeThemesButton = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<StyledChangeThemesButton
			onClick={() => {
				setIsOpen(!isOpen);
				document.body.style.backgroundColor = isOpen ? '' : '#f6f7fb';
			}}
		>
			Сменить тему
		</StyledChangeThemesButton>
	);
};

export default ChangeThemesButton;
