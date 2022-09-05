import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

import DesafiosResolvidos from "src/components/DesafiosResolvidos";
import desafios from "../../base-de-dados/desafios/desafios";

const Desafio = () => {
  const router = useRouter();
  const { id } = router.query;

  const desafio = desafios.find((desafio: any) => desafio.id === Number(id));

  return (
    <>
      {desafio ? (
        <>
          <ReactMarkdown>{desafio.descricao}</ReactMarkdown>
          <DesafiosResolvidos numDesafio={Number(id)} />
        </>
      ) : (
        <p>Desafio não encontrado</p>
      )}
    </>
  );
};

export default Desafio;
