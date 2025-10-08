import { SocialCenter, SocialLink } from "./socialIcons.styled";

const SocialIcons = () => {
  return (
    <SocialCenter>
      <SocialLink href="https://vk.com/ozon/?perehod=footer">
        <img src="/Footer/media/vk.svg" alt="vk" />
      </SocialLink>
      <SocialLink href="https://ok.ru/ozon/?perehod=footer">
        <img src="/Footer/media/ok.svg" alt="ok" />
      </SocialLink>
      <SocialLink href="https://t.me/ozonru/?perehod=footer">
        <img src="/Footer/media/tg.svg" alt="telegram" />
      </SocialLink>
    </SocialCenter>
  );
};

export default SocialIcons;
