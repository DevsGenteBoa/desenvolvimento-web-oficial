import Container from 'src/components/container';
import { Left, AboutWrapper } from './styles';

export default function SobreSection() {
  return (
    <section id="about">
      <Container>
        <AboutWrapper>
          <Left>
            <h2>Sobre</h2>
            <p>
              Comunidade online com propósito de ajudar os desenvolvedores web
              em diversos pontos na sua jornada, temos desde a galera no inicio
              dos estudos, passando por estudantes que tiram diversas dúvidas, a
              galera que está na busca da primeira oportunidade e os Plenos e
              Sêniores que dão todo o suporte.
            </p>
          </Left>
        </AboutWrapper>
      </Container>
    </section>
  );
}
