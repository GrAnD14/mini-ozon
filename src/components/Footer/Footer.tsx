import React from "react";
import "./Footer.css";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-container__jobs">
          <div className="footer-container__jobs-inner">
            <div className="footer-container__jobs-inner--logo">
              <a
                href="https://job.ozon.ru/?perehod=footer"
                className="footer-logo-link"
              >
                <img src="./Footer/jobsLogo.svg" alt="logo" />
              </a>
            </div>

            <div className="footer-container__jobs-icons">
              <a
                href="https://job.ozon.ru/?perehod=footer"
                className="footer-container__jobs-icons--item"
              >
                <img src="./Footer/itIcon.svg" alt="IT" />
                <h5 className="footer-container__jobs-icons--title">IT</h5>
              </a>
              <a
                href="https://job.ozon.ru/office/?perehod=footer"
                className="footer-container__jobs-icons--item"
              >
                <img src="./Footer/officeIcon.svg" alt="office" />
                <h5 className="footer-container__jobs-icons--title">Офис</h5>
              </a>
              <a
                href="https://job.ozon.ru/fintech/?perehod=footer"
                className="footer-container__jobs-icons--item"
              >
                <img src="./Footer/finTechIcon.svg" alt="fintech" />
                <h5 className="footer-container__jobs-icons--title">Финтех</h5>
              </a>
              <a
                href="https://job.ozon.ru/fresh/?perehod=footer"
                className="footer-container__jobs-icons--item fresh-icon"
              >
                <img src="./Footer/freshIcon.svg" alt="fresh" />
                <h5 className="footer-container__jobs-icons--title">Fresh</h5>
              </a>
              <a
                href="https://job.ozon.ru/logistic/?perehod=footer"
                className="footer-container__jobs-icons--item"
              >
                <img src="./Footer/logisticsIcon.svg" alt="logistics" />
                <h5 className="footer-container__jobs-icons--title">
                  Логистика
                </h5>
              </a>
              <a
                href="https://job.ozon.ru/sklad/?utm_source=organic&utm_campaign=marketplace/?perehod=footer"
                className="footer-container__jobs-icons--item warehouse-icon"
              >
                <img src="./Footer/warehouseIcon.svg" alt="warehouse" />
                <h5 className="footer-container__jobs-icons--title">
                  Работа на складе
                </h5>
              </a>
              <a
                href="https://job.ozon.ru/events/?perehod=footer"
                className="footer-container__jobs-icons--item"
              >
                <img src="./Footer/eventsIcon.svg" alt="events" />
                <h5 className="footer-container__jobs-icons--title">События</h5>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-container_qr-links">
          <div className="footer-container__top">
            <div className="footer-container__qr">
              <div className="footer-container__qr-pic">
                <img src="./Footer/downloadStores/qr-code.svg" alt="QR" />
                <p className="footer-container__qr-pic--title">
                  Наведите камеру и скачайте бесплатное приложение Ozon
                </p>
              </div>
              <div className="footer-container__qr-download">
                <a href="#!" className="footer-container__qr-download__apple">
                  <img
                    src="./Footer/downloadStores/apple.svg"
                    alt="appStore"
                  />
                </a>
                <a href="#!" className="footer-container__qr-download__android">
                  <img
                    src="./Footer/downloadStores/android.svg"
                    alt="android"
                  />
                </a>
                <a href="#!" className="footer-container__qr-download__huawei">
                  <img
                    src="./Footer/downloadStores/huawei.svg"
                    alt="huawei"
                  />
                </a>
                <a href="#!" className="footer-container__qr-download__rustore">
                  <img
                    src="./Footer/downloadStores/rustore.svg"
                    alt="rustore"
                  />
                </a>
              </div>
            </div>

            <div className="footer-container__links">
              <div className="footer-container__links-top">
                <div className="footer-container__links-list">
                  <span className="footer-container__links-list--title">
                    Озон маркетплейс
                  </span>
                  <a
                    href="https://corp.ozon.ru/"
                    className="footer-container__links-list--item"
                  >
                    Об Ozon / About Ozon
                  </a>
                  <a
                    href="https://brandlab.ozon.ru/"
                    className="footer-container__links-list--item"
                  >
                    Бренд Ozon
                  </a>
                  <a
                    href="https://corp.ozon.ru/media#contacts"
                    className="footer-container__links-list--item"
                  >
                    Информация для СМИ
                  </a>
                </div>

                <div className="footer-container__links-list">
                  <span className="footer-container__links-list--title">
                    Зарабатывать с Озон
                  </span>
                  <a
                    href="https://pvz.ozon.ru/"
                    className="footer-container__links-list--item"
                  >
                    Открыть пункт выдачи Ozon
                  </a>
                  <a
                    href="https://pvz-guide.ozonpartners.ru/"
                    className="footer-container__links-list--item"
                  >
                    Руководство по ПВЗ
                  </a>
                  <a
                    href="https://business.ozon.ru/"
                    className="footer-container__links-list--item"
                  >
                    Стать партнёром
                  </a>
                  <a
                    href="https://ozonglobal.ozon.ru/"
                    className="footer-container__links-list--item"
                  >
                    Ozon Global - Selling on Ozon
                  </a>
                </div>

                <div className="footer-container__links-list">
                  <span className="footer-container__links-list--title">
                    Покупать как компания
                  </span>
                  <a
                    href="https://www.ozon.ru/business/"
                    className="footer-container__links-list--item"
                  >
                    Ozon для бизнеса
                  </a>
                  <a
                    href="/business/"
                    className="footer-container__links-list--item"
                  >
                    Добавить компанию
                  </a>
                  <a
                    href="/my/legaldetails/"
                    className="footer-container__links-list--item"
                  >
                    Мои компании
                  </a>
                  <a
                    href="https://www.ozon.ru/certificates/"
                    className="footer-container__links-list--item"
                  >
                    Подарочные сертификаты
                  </a>
                </div>

                <div className="footer-container__links-list">
                  <span className="footer-container__links-list--title">
                    Помощь
                  </span>
                  <a
                    href="https://docs.ozon.ru/common/moj-zakaz/kak-sdelat-zakaz/"
                    className="footer-container__links-list--item"
                  >
                    Как сделать заказ
                  </a>
                  <a
                    href="https://docs.ozon.ru/common/oplata/payment-ways/"
                    className="footer-container__links-list--item"
                  >
                    Оплата
                  </a>
                  <a
                    href="https://docs.ozon.ru/common/dostavka/sposoby-dostavki/"
                    className="footer-container__links-list--item"
                  >
                    Доставка
                  </a>
                  <a
                    href="https://www.ozon.ru/geo/"
                    className="footer-container__links-list--item"
                  >
                    Адреса ПВЗ
                  </a>
                  <a
                    href="https://docs.ozon.ru/common/kontakty/"
                    className="footer-container__links-list--item"
                  >
                    Контакты
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-container__bottom-row">
            <div className="footer-container__bottom-left"></div>
            <div className="footer-container__bottom-center">
              <a href="https://vk.com/ozon/?perehod=footer">
                <img src="./Footer/media/vk.svg" alt="vkontakte" />
              </a>
              <a href="https://ok.ru/ozon/?perehod=footer">
                <img src="./Footer/media/ok.svg" alt="odnoklassniki" />
              </a>
              <a href="https://t.me/ozonru/?perehod=footer">
                <img src="./Footer/media/tg.svg" alt="telegram" />
              </a>
            </div>
            <div className="footer-container__bottom-right">
              <div className="footer-container__links-bottom--info">
                © 1998 – 2025 ООО "Интернет Решения" (входит в группу компаний
                Ozon; дочерняя компания ООО "Озон Холдинг") Все права защищены.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
