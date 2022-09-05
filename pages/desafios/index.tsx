import { DesafioCard } from "src/components/cards/desafio-card";
import { DesafiosGrid } from "src/components/Desafios/styles";
import { Flex } from "src/components/flex";
import Wrapper from "src/components/wrapper";

import desafios from "src/base-de-dados/desafios/desafios.js";

const desafio_exemplo = {
  id: 1,
  title: "Card de funcionários",
  shortDescription:
    "Crie um card de funcionários a partir de uma dada coleção de dados.",
  description: `Tendo um arquivo com os dados dos profissionais e uma lista de serviços com os dados a serem tratados, mostrar cards com as seguintes informações:

    Uma lista com o nome e valor de apenas serviços especiais que ele faz
    Uma lista com nome e descrição de todos os serviços que ele faz`,
  tags: [
    {
      label: "React",
      bg: "#61dafb",
      color: "#fff",
    },
    {
      label: "Next",
      bg: "#000",
      color: "#fff",
    },
    {
      label: "Typescript",
      bg: "#007acc",
      color: "#fff",
    },
  ],
};

const Desafios = () => {
  console.log(desafios);
  return (
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
          {[1, 2, 3, 4, 5].map((i) => (
            <DesafioCard key={i} desafio={desafio_exemplo} />
          ))}
        </DesafiosGrid>
      </Wrapper>
    </Flex>
  );
};

export default Desafios;
