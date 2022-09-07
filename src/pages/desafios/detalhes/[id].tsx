import { useRouter } from "next/router";
import DesafioDetalhePage from "src/modules/desafios/detalhes";

export default function Desafios() {
  const router = useRouter();
  const { id } = router.query;
  return <DesafioDetalhePage id={id as string} />;
}
