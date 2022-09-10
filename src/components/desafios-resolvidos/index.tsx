import Link from 'next/link';

import desafios from 'src/assets/base-de-dados/desafios/desafios-resolvidos.json';
import { Container, SolucoesGrid } from './styles';

interface DesafiosResolvidosProps {
  numDesafio: number;
}

const DesafiosResolvidos = ({ numDesafio }: DesafiosResolvidosProps) => {
  const resoluções = desafios.filter(
    (desafio) => desafio.desafio == numDesafio,
  );

  return (
    <Container>
      {resoluções.length > 0 ? (
        <div>
          <h4>Resoluções</h4>
          <Link href="/desafios/novo">
            <a>Inclua a sua!</a>
          </Link>
          <SolucoesGrid>
            {resoluções.map((resolução) => (
              <div key={JSON.stringify(resolução)}>
                <strong>{resolução.nome}</strong>
                <p>Tecnologias: {resolução.tecnologias}</p>
                <a
                  href={resolução.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repositório
                </a>
              </div>
            ))}
          </SolucoesGrid>
        </div>
      ) : (
        <p>
          Não há nenhuma resolução ainda,
          <Link href="/desafios/novo">
            <a>seja o primeiro</a>
          </Link>
          !
        </p>
      )}
    </Container>
  );
};

export default DesafiosResolvidos;
