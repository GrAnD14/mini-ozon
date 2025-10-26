import React from 'react';
import { ItemWrapper } from './AddressItem.styled';

interface Props {
	address: string;
	selected?: boolean;
	onSelect?: () => void;
	onDelete?: () => void;
}

const AddressItem: React.FC<Props> = ({ address, selected, onSelect, onDelete }) => {
	return (
		<ItemWrapper selected={selected} onClick={onSelect}>
			<span className='address-text'>{address}</span>
			{onDelete && (
				<button
					type='button'
					onClick={e => {
						e.stopPropagation();
						onDelete();
					}}
					aria-label='Удалить адрес'
				>
					×
				</button>
			)}
		</ItemWrapper>
	);
};

export default AddressItem;
