import { QrBlock, QrImage, QrTitle, DownloadButtons } from './qrLinks.styled';
import ImagesImports from '../../../types/ImagesImports.ts';

const QrLinks = () => {
	return (
		<QrBlock>
			<QrImage src={ImagesImports.qr_code} alt='QR code' />
			<QrTitle>Наведите камеру и скачайте бесплатное приложение Ozon</QrTitle>

			<DownloadButtons>
				<a href='#!'>
					<img src={ImagesImports.apple} alt='appStore' />
				</a>
				<a href='#!'>
					<img src={ImagesImports.android} alt='android' />
				</a>
				<a href='#!'>
					<img src={ImagesImports.huawei} alt='huawei' />
				</a>
				<a href='#!'>
					<img src={ImagesImports.rustore} alt='rustore' />
				</a>
			</DownloadButtons>
		</QrBlock>
	);
};

export default QrLinks;
