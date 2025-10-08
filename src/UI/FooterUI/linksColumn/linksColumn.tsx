import {
  LinksColumnWrapper,
  LinksTitle,
  LinksItem,
} from "./linksColumn.styled.ts";

type Link = { href: string; label: string };

type Props = {
  title: string;
  links: Link[];
};

const LinksColumn: React.FC<Props> = ({ title, links }) => {
  return (
    <LinksColumnWrapper>
      <LinksTitle>{title}</LinksTitle>
      {links.map((l) => (
        <LinksItem
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {l.label}
        </LinksItem>
      ))}
    </LinksColumnWrapper>
  );
};

export default LinksColumn;
