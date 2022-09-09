import SvgSobre from "src/components/ui/svgs/SvgSobre";
import { Container, Title, FlexContainer, BoxSvg } from "./styles";

export default function SobreSection() {
  return (
    <Container>
      <Title>Sobre</Title>
      <FlexContainer>
        <p>
          Comunidade online com propósito de ajudar os desenvidores web em
          diversos pontos na sua jornada, temos desde a galera inicante no
          inicio dos estudos, passando por estudantes que tiram diversas
          dúvidas, a galera que está na busca da primeira oportunidade e os
          Plenos e Sêniores que dão todo o suporte.
        </p>
        <BoxSvg>
          <SvgSobre />
        </BoxSvg>
      </FlexContainer>
    </Container>
  );
}
