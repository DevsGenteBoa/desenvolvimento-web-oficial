import { AiFillFile } from 'react-icons/ai';
import { Container } from 'src/components/container';

import DesafiosResolvidos from 'src/components/desafios-resolvidos';
import Wrapper from 'src/components/wrapper';
import desafios from '../../../assets/base-de-dados/desafios/desafios';
import {
  Anexo,
  AnexosContainer,
  DesafioContainer,
  Descricao,
  Title,
} from './styles';

const DesafioDetalhePage = ({ id }: { id: string }) => {
  const desafio = desafios.find((desafio: any) => desafio.id === Number(id));

  return (
    <Container>
      <Wrapper>
        <DesafioContainer>
          <Title>
            <h1>{desafio?.titulo}</h1>
          </Title>
          {desafio ? (
            <div>
              <Descricao
                dangerouslySetInnerHTML={{
                  __html: desafio?.descricao,
                }}
              />
              {desafio.anexos ? (
                <div>
                  <h4>Anexos</h4>
                  <AnexosContainer>
                    {desafio.anexos.map((anexo) => (
                      <Anexo key={anexo.nome}>
                        <i>
                          <AiFillFile />
                        </i>
                        <a
                          href={`desafios/${desafio.id}/${anexo.arquivo}`}
                          download
                        >
                          {anexo.nome}
                        </a>
                      </Anexo>
                    ))}
                  </AnexosContainer>
                </div>
              ) : null}
              <DesafiosResolvidos numDesafio={Number(id)} />
            </div>
          ) : (
            <p>Desafio não encontrado</p>
          )}
        </DesafioContainer>
      </Wrapper>
    </Container>
  );
};

export default DesafioDetalhePage;
