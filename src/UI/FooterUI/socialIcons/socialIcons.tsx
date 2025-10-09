import { SocialCenter, SocialLink } from './socialIcons.styled';
import ImagesImports from '../../../Imports/ImagesImports.ts';

const SocialIcons = () => {
	return (
		<SocialCenter>
			<SocialLink href='https://vk.com/ozon/?perehod=footer'>
				<img src={ImagesImports.vk} alt='vk' />
			</SocialLink>
			<SocialLink href='https://ok.ru/ozon/?perehod=footer'>
				<img src={ImagesImports.ok} alt='ok' />
			</SocialLink>
			<SocialLink href='https://t.me/ozonru/?perehod=footer'>
				<img src={ImagesImports.tg} alt='telegram' />
			</SocialLink>
		</SocialCenter>
	);
};

export default SocialIcons;
