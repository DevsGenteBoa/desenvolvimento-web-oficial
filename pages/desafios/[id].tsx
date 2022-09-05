import { Console } from "console";
import { useRouter } from "next/router";
import desafios from "src/base-de-dados/desafios/desafios";

import ReactMarkdown from "react-markdown";

const Desafio = () => {
  const router = useRouter();
  const { id } = router.query;

  const desafio = desafios.find((desafio) => desafio.id === Number(id));

  return (
    <>
      {desafio ? (
        <>
          <ReactMarkdown>{desafio.descricao}</ReactMarkdown>
          <p>Desafio</p>
        </>
      ) : (
        <p>Desafio não encontrado</p>
      )}
    </>
  );
};

export default Desafio;
