import DesafiosResolvidos from "../DesafiosResolvidos";

const Desafio01 = () => {
  return (
    <div>
      <h2>Card de Funcionários xxx</h2>
      <p>
        Tendo um arquivo com os dados dos profissionais e uma lista de serviços
        com os dados a serem tratados, mostrar cards com as seguintes
        informações:
      </p>
      <ul>
        <li>
          Uma lista com o nome e valor de apenas serviços especiais que ele faz
        </li>
        <li>Uma lista com nome e descrição de todos os serviços que ele faz</li>
      </ul>
      <h3>Lista de Arquivos</h3>
      <ul>
        <li>
          <a href="/desafios/01/resumo-desafio.txt" download>
            Resumo Desafio
          </a>
        </li>
        <li>
          <a href="/desafios/01/garfico-explicativo.png" download>
            Gráfico Explicativo
          </a>
        </li>
        <li>
          <a href="/desafios/01/banco-de-dados.js" download>
            Banco de Dados
          </a>
        </li>
      </ul>
      <DesafiosResolvidos numDesafio={1} />
    </div>
  );
};

export default Desafio01;
