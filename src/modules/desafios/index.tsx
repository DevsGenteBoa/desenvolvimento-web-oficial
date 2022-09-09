import { useState } from "react";
import Link from 'next/link'
import { DesafioCard } from "src/components/cards/desafio-card";
import { DesafiosGrid } from "src/components/desafios/styles";
import { Flex } from "src/components/flex";
import SearchInput from "src/components/ui/inputs/search";
import Wrapper from "src/components/wrapper";

import desafios from "../../assets/base-de-dados/desafios/desafios";
import { PageTitle } from "./styles";

const DesafiosPage = () => {
  const [filter, setFilter] = useState("");
  return (
    <>
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
          <PageTitle>
            <h1>Desafios</h1>
            <SearchInput
              placeholder="Pesquise por desafios"
              action={(e) => setFilter(e.target.value)}
            />
          </PageTitle>
          <Link href="desafios/cadastrar-desafio"><a>Crie um desafio</a></Link>
          <DesafiosGrid>
            {(
              desafios.filter(
                (desafio) =>
                  desafio.titulo.toLowerCase().includes(filter.toLowerCase()) ||
                  desafio.descricao.toLowerCase().includes(filter.toLowerCase())
              ) || []
            ).map((desafio) => (
              <DesafioCard key={desafio.id} desafio={desafio} />
            ))}
          </DesafiosGrid>
        </Wrapper>
      </Flex>
    </>
  );
};

export default DesafiosPage;
