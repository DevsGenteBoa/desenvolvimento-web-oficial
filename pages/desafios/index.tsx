import ReactMarkdown from "react-markdown";

import { DesafioCard } from "src/components/cards/desafio-card";
import { DesafiosGrid } from "src/components/Desafios/styles";
import { Flex } from "src/components/flex";
import Wrapper from "src/components/wrapper";

import desafios from "src/base-de-dados/desafios/desafios";

const Desafios = () => {
  
  return (
    <>
      <ReactMarkdown>{desafios[0].descricao}</ReactMarkdown>

      <Flex>
        <Wrapper
          css="
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        margin-top: 40px;
      "
        >
          <h1>Desafios</h1>
          <DesafiosGrid>
            {desafios.map((desafio) => (
              <DesafioCard key={desafio.id} desafio={desafio} />
            ))}
          </DesafiosGrid>
        </Wrapper>
      </Flex>
    </>
  );
};

export default Desafios;
