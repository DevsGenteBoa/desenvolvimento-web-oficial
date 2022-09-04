const Novo = () => {
  return (
    <>
      <h1>Inclua sua resolução</h1>
      <ol>
        <li>Resolva na sua máquina local</li>
        <li>Faça upload no seu github e deixe público</li>
        <li>
          Acesse o{" "}
          <a
            href="https://github.com/PedroMarianoAlmeida/desenvolvimento-web-oficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            repositório oficial
          </a>{" "}
          e faça um Pull Request alterando o arquivo{" "}
          <b>src/desafios-resolvidos.json</b> com suas informações (basta seguir
          o padrão de objeto de JSON que tem lá)
        </li>
        <li>Informe para algum moderador</li>
      </ol>
    </>
  );
};

export default Novo;
