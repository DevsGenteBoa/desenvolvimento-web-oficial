import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { Container } from "src/components/container";

import DesafiosResolvidos from "src/components/DesafiosResolvidos";
import Wrapper from "src/components/wrapper";
import desafios from "../../../base-de-dados/desafios/desafios";
import { DesafioContainer, Title } from "./styles";

const Desafio = () => {
  const router = useRouter();
  const { id } = router.query;

  const desafio = desafios.find((desafio: any) => desafio.id === Number(id));

  return (
    <Container>
      <Wrapper>
        <DesafioContainer>
          <Title>
            <h1>{desafio?.titulo}</h1>
          </Title>
          <hr />
          {desafio ? (
            <>
              <ReactMarkdown>{desafio.descricao}</ReactMarkdown>
              <DesafiosResolvidos numDesafio={Number(id)} />
            </>
          ) : (
            <p>Desafio não encontrado</p>
          )}
        </DesafioContainer>
      </Wrapper>
    </Container>
  );
};

export default Desafio;
