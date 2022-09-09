/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { Flex } from "src/components/flex";
import Button from "src/components/ui/buttons";
import Wrapper from "src/components/wrapper";
import { Container } from "./styles";

export default function HeroSection() {
  const router = useRouter();
  return (
    <Container>
      <Flex css="align-items: flex-start; gap: 20px;">
        <h1>Site oficial do grupo Desenvolvimento Web</h1>
        <p>
          Aqui todos os integrantes do grupo podem contribuir com o projeto,
          seja com a criação de novas páginas ou melhorias no código. O
          principal objetivo é que o site possa ser utilizado para agregar
          desafios e projetos que possam ser desenvolvidos pelo grupo.
        </p>
        <Button variant="primary" onClick={() => router.push("/desafios")}>
          Desafios Recentes
        </Button>
      </Flex>
      <div>
        <img
          src="/images/hero.jpg"
          alt="Desenvolvimento Web"
          width="350px"
          height="350px"
          style={{
            objectFit: "cover",
            borderRadius: "100%",
          }}
        />
      </div>
    </Container>
  );
}
