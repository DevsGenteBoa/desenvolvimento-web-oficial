import { Console } from "console";
import { useRouter } from "next/router";
import desafios from "src/base-de-dados/desafios/desafios";

const Desafio = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <>
      <p>Desafio</p>
    </>
  );
};

export default Desafio;
