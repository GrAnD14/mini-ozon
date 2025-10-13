import './Footer.styled.ts';
import JobsBlock from '../../UI/FooterUI/jobsBlock/jobsBlock.tsx';
import QrLinks from '../../UI/FooterUI/qrLinks/qrLinks.tsx';
import LinksColumn from '../../UI/FooterUI/linksColumn/linksColumn.tsx';
import SocialIcons from '../../UI/FooterUI/socialIcons/socialIcons.tsx';
import { FooterWrapper, TopArea, LinksArea, Container } from './Footer.styled.ts';

export const Footer = () => {
	const col1 = [
		{ href: 'https://corp.ozon.ru/', label: 'Об Ozon / About Ozon' },
		{ href: 'https://brandlab.ozon.ru/', label: 'Бренд Ozon' },
		{
			href: 'https://corp.ozon.ru/media#contacts',
			label: 'Информация для СМИ'
		}
	];

	const col2 = [
		{ href: 'https://pvz.ozon.ru/', label: 'Открыть пункт выдачи Ozon' },
		{ href: 'https://pvz-guide.ozonpartners.ru/', label: 'Руководство по ПВЗ' },
		{ href: 'https://business.ozon.ru/', label: 'Стать партнёром' },
		{
			href: 'https://ozonglobal.ozon.ru/',
			label: 'Ozon Global - Selling on Ozon'
		}
	];

	const col3 = [
		{ href: 'https://www.ozon.ru/business/', label: 'Ozon для бизнеса' },
		{ href: '/business/', label: 'Добавить компанию' },
		{ href: '/my/legaldetails/', label: 'Мои компании' },
		{
			href: 'https://www.ozon.ru/certificates/',
			label: 'Подарочные сертификаты'
		}
	];

	const col4 = [
		{
			href: 'https://docs.ozon.ru/common/moj-zakaz/kak-sdelat-zakaz/',
			label: 'Как сделать заказ'
		},
		{
			href: 'https://docs.ozon.ru/common/oplata/payment-ways/',
			label: 'Оплата'
		},
		{
			href: 'https://docs.ozon.ru/common/dostavka/sposoby-dostavki/',
			label: 'Доставка'
		},
		{ href: 'https://www.ozon.ru/geo/', label: 'Адреса ПВЗ' },
		{ href: 'https://docs.ozon.ru/common/kontakty/', label: 'Контакты' }
	];

	return (
		<FooterWrapper>
			<Container>
				<JobsBlock />
				<TopArea>
					<QrLinks />
					<LinksArea>
						<LinksColumn title='Озон маркетплейс' links={col1} />
						<LinksColumn title='Зарабатывать с Озон' links={col2} />
						<LinksColumn title='Покупать как компания' links={col3} />
						<LinksColumn title='Помощь' links={col4} />
					</LinksArea>
				</TopArea>

				<div style={{ position: 'relative', marginTop: 24 }}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginTop: 24
						}}
					>
						<div />
						<SocialIcons />
						<div
							style={{
								color: 'rgba(125, 125, 125, 1)',
								fontSize: 14,
								textAlign: 'left',
								fontFamily: 'Inter, sans-serif',
								fontWeight: 400,
								lineHeight: '24px',
								maxWidth: 260
							}}
						>
							© 1998–2025 ООО "Интернет Решения" (входит в группу компаний Ozon: дочерняя компания ООО "Озон Холдинг"). Все права защищены.
						</div>
					</div>
				</div>
			</Container>
		</FooterWrapper>
	);
};

export default Footer;
