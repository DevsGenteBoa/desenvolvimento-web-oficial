/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import Container from 'src/components/container'
import { Left, Right, HeroSectionWrapper } from './styles';

export default function HeroSection() {
  const router = useRouter();
  return (
    <section id="home">
      <Container>
        <HeroSectionWrapper>
          <Right>
            <h1>Bem-vindo ao site oficial do grupo Desenvolvimento Web</h1>
            <p>
              O principal objetivo é que o site possa ser utilizado para agregar
              desafios e projetos que possam ser desenvolvidos pelo grupo.
            </p>
            <div>
              <button onClick={() => router.push('/desafios')}>
                Ver Desafios
              </button>
            </div>
          </Right>
          <Left>
            <div>
                <img src="/images/undraw_code_review_re_woeb.svg" alt="" />
            </div>
          </Left>
        </HeroSectionWrapper>
      </Container>
    </section>
  );
}
