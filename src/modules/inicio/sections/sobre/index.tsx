import SvgSobre from "src/components/ui/svgs/svg-sobre";
import { Container, Title, FlexContainer, BoxSvg } from "./styles";

export default function SobreSection() {
  return (
    <Container>
      <Title>Sobre</Title>
      <FlexContainer>
        <p>
          Comunidade online com propósito de ajudar os desenvolvedores web em
          diversos pontos na sua jornada, temos desde a galera no
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
