import { QrBlock, QrImage, QrTitle, DownloadButtons } from "./qrLinks.styled";

const QrLinks = () => {
  return (
    <QrBlock>
      <QrImage src="/Footer/downloadStores/qr-code.svg" alt="QR code" />
      <QrTitle>Наведите камеру и скачайте бесплатное приложение Ozon</QrTitle>

      <DownloadButtons>
        <a href="#!">
          <img src="/Footer/downloadStores/apple.svg" alt="appStore" />
        </a>
        <a href="#!">
          <img src="/Footer/downloadStores/android.svg" alt="android" />
        </a>
        <a href="#!">
          <img src="/Footer/downloadStores/huawei.svg" alt="huawei" />
        </a>
        <a href="#!">
          <img src="/Footer/downloadStores/rustore.svg" alt="rustore" />
        </a>
      </DownloadButtons>
    </QrBlock>
  );
};

export default QrLinks;
