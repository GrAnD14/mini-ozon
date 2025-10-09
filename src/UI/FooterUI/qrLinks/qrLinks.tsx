import { QrBlock, QrImage, QrTitle, DownloadButtons } from './qrLinks.styled';
import ImagesImports from '../../../Imports/ImagesImports.ts';

const QrLinks = () => {
	return (
		<QrBlock>
			<QrImage src='/Footer/downloadStores/qr-code.svg' alt='QR code' />
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
