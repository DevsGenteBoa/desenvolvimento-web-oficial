import Link from 'next/link';
import Button from '../../ui/buttons';
import { Card, Content, ReadMore, Tag, Tags } from './styles';

type Desafio = {
  id: number;
  titulo: string;
  resumo: string;
  descricao: string;
  image?: string;
  link?: string;
  anexos?: { nome: string; arquivo: string }[];
  //tags?: { label: string; bg: string; color: string }[];
  tags: string[];
};

export const DesafioCard = ({ desafio }: { desafio: Desafio }) => {
  return (
    <Card>
      <Content>
        <h2>{desafio.titulo}</h2>
        <p>{desafio.resumo}</p>
        <ReadMore>
          <Link href={`/desafios/detalhes/${desafio.id}`}>
            <Button variant="tertiary">Ver mais</Button>
          </Link>
        </ReadMore>
        <hr />
        <Tags>
          {desafio.tags?.map((tag) => (
            <Tag
                key={tag}
            >
              <span>{tag}</span>
            </Tag>
          ))}
        </Tags>
      </Content>
    </Card>
  );
};
