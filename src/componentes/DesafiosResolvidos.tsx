import desafios from "src/desafios-resolvidos.json";

interface DesafiosResolvidosProps {
  numDesafio: number;
}

const DesafiosResolvidos = ({ numDesafio }: DesafiosResolvidosProps) => {
  const resoluções = desafios.filter(
    (desafio) => desafio.desafio == numDesafio
  );

  return (
    <>
      {resoluções.length > 0 ? (
        <div>
          <h4>Resoluções</h4>
          <a href="#">Inclua a sua!</a>
          <ul>
            {resoluções.map((resolução) => (
              <div>
                <p>Nome: {resolução.nome}</p>
                <p>Tecnologias: {resolução.tecnologias}</p>
                <a
                  href={resolução.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  link
                </a>
              </div>
            ))}
          </ul>
        </div>
      ) : (
        <p>Não há nenhuma resolução ainda, seja o primeiro!</p>
      )}
    </>
  );
};

export default DesafiosResolvidos;
