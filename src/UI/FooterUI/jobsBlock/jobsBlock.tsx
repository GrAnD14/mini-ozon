import {
  JobsSection,
  LogoLink,
  JobsIcons,
  IconItem,
  IconTitle,
} from "./jobsBlock.styled";

const JobsBlock = () => (
  <JobsSection>
    <LogoLink href="https://job.ozon.ru/?perehod=footer">
      <img src="/Footer/jobsLogo.svg" alt="jobs logo" />
    </LogoLink>

    <JobsIcons>
      <IconItem href="https://job.ozon.ru/?perehod=footer">
        <img src="/Footer/itIcon.svg" alt="IT" />
        <IconTitle>IT</IconTitle>
      </IconItem>

      <IconItem href="https://job.ozon.ru/office/?perehod=footer">
        <img src="/Footer/officeIcon.svg" alt="office" />
        <IconTitle>Офис</IconTitle>
      </IconItem>

      <IconItem href="https://job.ozon.ru/fintech/?perehod=footer">
        <img src="/Footer/fintechIcon.svg" alt="fintech" />
        <IconTitle>Финтех</IconTitle>
      </IconItem>

      <IconItem
        $special={"fresh"}
        href="https://job.ozon.ru/fresh/?perehod=footer"
      >
        <img src="/Footer/freshIcon.svg" alt="fresh" />
        <IconTitle>Fresh</IconTitle>
      </IconItem>

      <IconItem href="https://job.ozon.ru/logistic/?perehod=footer">
        <img src="/Footer/logisticsIcon.svg" alt="logistics" />
        <IconTitle>Логистика</IconTitle>
      </IconItem>

      <IconItem
        $special={"warehouse"}
        href="https://job.ozon.ru/sklad/?utm_source=organic&utm_campaign=marketplace/?perehod=footer"
      >
        <img src="/Footer/warehouseIcon.svg" alt="warehouse" />
        <IconTitle>Работа на складе</IconTitle>
      </IconItem>

      <IconItem href="https://job.ozon.ru/events/?perehod=footer">
        <img src="/Footer/eventsIcon.svg" alt="events" />
        <IconTitle>События</IconTitle>
      </IconItem>
    </JobsIcons>
  </JobsSection>
);

export default JobsBlock;
