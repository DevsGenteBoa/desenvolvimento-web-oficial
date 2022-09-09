import Link from "next/link";
import Button from "../../ui/buttons";
import { Card, Content, ReadMore, Tag, Tags } from "./styles";

type Desafio = {
  id: number;
  titulo: string;
  resumo: string;
  descricao: string;
  image?: string;
  link?: string;
  anexos?: {nome: string; arquivo: string;}[]
  //tags?: { label: string; bg: string; color: string }[];
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
        {/* <hr />
        <Tags>
          {desafio.tags?.map((tag) => (
            <Tag color={tag.color} bg={tag.bg}>
              <span>{tag.label}</span>
            </Tag>
          ))}
        </Tags> */}
        {desafio.anexos ? <>
        <h4>Anexos</h4>
        <ul>
          {desafio.anexos.map(anexo => <li key={anexo.nome}><a href={`desafios/${desafio.id}/${anexo.arquivo}`} download>{anexo.nome}</a></li>)}
        </ul>
        </> : null}
      </Content>
    </Card>
  );
};
