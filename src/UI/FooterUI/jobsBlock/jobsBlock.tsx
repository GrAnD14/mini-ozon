import { JobsSection, LogoLink, JobsIcons, IconItem, IconTitle } from './jobsBlock.styled';
import ImagesImports from '../../../Imports/ImagesImports.ts';

const JobsBlock = () => (
	<JobsSection>
		<LogoLink href='https://job.ozon.ru/?perehod=footer'>
			<img src={ImagesImports.jobsLogo} alt='jobs logo' />
		</LogoLink>

		<JobsIcons>
			<IconItem href='https://job.ozon.ru/?perehod=footer'>
				<img src={ImagesImports.itIcon} alt='IT' />
				<IconTitle>IT</IconTitle>
			</IconItem>

			<IconItem href='https://job.ozon.ru/office/?perehod=footer'>
				<img src={ImagesImports.officeIcon} alt='office' />
				<IconTitle>Офис</IconTitle>
			</IconItem>

			<IconItem href='https://job.ozon.ru/fintech/?perehod=footer'>
				<img src={ImagesImports.fintechIcon} alt='fintech' />
				<IconTitle>Финтех</IconTitle>
			</IconItem>

			<IconItem $special={'fresh'} href='https://job.ozon.ru/fresh/?perehod=footer'>
				<img src={ImagesImports.freshIcon} alt='fresh' />
				<IconTitle>Fresh</IconTitle>
			</IconItem>

			<IconItem href='https://job.ozon.ru/logistic/?perehod=footer'>
				<img src={ImagesImports.logisticsIcon} alt='logistics' />
				<IconTitle>Логистика</IconTitle>
			</IconItem>

			<IconItem $special={'warehouse'} href='https://job.ozon.ru/sklad/?utm_source=organic&utm_campaign=marketplace/?perehod=footer'>
				<img src={ImagesImports.warehouseIcon} alt='warehouse' />
				<IconTitle>Работа на складе</IconTitle>
			</IconItem>

			<IconItem href='https://job.ozon.ru/events/?perehod=footer'>
				<img src={ImagesImports.eventsIcon} alt='events' />
				<IconTitle>События</IconTitle>
			</IconItem>
		</JobsIcons>
	</JobsSection>
);

export default JobsBlock;
