import Link from "next/link";

import desafios from "src/base-de-dados/desafios/desafios-resolvidos.json";

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
          <Link href="/desafios/novo">
            <a>Inclua a sua!</a>
          </Link>
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {resoluções.map((resolução) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "18px",
                  backgroundColor: "#fff",
                  borderRadius: "28px",
                  margin: "10px 0",
                  maxWidth: "300px",
                }}
                key={JSON.stringify(resolução)}
              >
                <strong>Nome: {resolução.nome}</strong>
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
        <p>
          Não há nenhuma resolução ainda,
          <Link href="/desafios/novo">
            <a>seja o primeiro</a>
          </Link>
          !
        </p>
      )}
    </>
  );
};

export default DesafiosResolvidos;
