import Button from "../ui/buttons";
import { Card, Content, ReadMore, Tag, Tags } from "./styles";

type Desafio = {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  image?: string;
  link?: string;
  tags?: { label: string; bg: string; color: string }[];
};

export const DesafioCard = ({ desafio }: { desafio: Desafio }) => {
  return (
    <Card>
      <Content>
        <h2>{desafio.title}</h2>
        <p>{desafio.shortDescription}</p>
        <ReadMore>
          <Button variant="tertiary">Ver mais</Button>
        </ReadMore>
        <hr />
        <Tags>
          {desafio.tags?.map((tag) => (
            <Tag color={tag.color} bg={tag.bg}>
              <span>{tag.label}</span>
            </Tag>
          ))}
        </Tags>
      </Content>
    </Card>
  );
};
