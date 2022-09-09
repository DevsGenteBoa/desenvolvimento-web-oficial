const CadastrarDesafio = () => {

    return (
    <>
        <h1>Cadastrar Desafio</h1>
        <h2>Como criar um novo desafio:</h2>

        <p>
          Basicamente basta acessar o{" "}
          <a
            href="https://github.com/PedroMarianoAlmeida/desenvolvimento-web-oficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            repositório oficial
          </a>{" "}
          e fazer um Pull Request alterando o arquivo{" "}
          <b>src/assets/desafios.js</b>, incluindo um novo objeto na array com as seguintes informações:
        </p>
        <p><small>Apesar de ser um arquivo JavaScript, não precisa ter nenhum conhecimento de JavaScript, ele é praticamente um JSON (com um pequeno detalhe que será explicado abaixo)</small></p>
        <h3>Itens Obrigatórios</h3>
        <ul>
            <li><b>id: </b>Chave Única do seu desafio - <small>seguir ordem numérica sequencial</small></li>
            <li><b>titulo: </b>Título do desafio - <small>e do card</small></li>
            <li><b>resumo: </b>Texto menor do desafio - <small>aparece no card</small></li>
            <li><b>descricao: </b>Texto maior que será exibido ao clicar em <i>Ver Mais</i> - <small>pode ser escrito em <b>Markdown</b> (como ele pode ocupar mais de uma linha, foi utilizado os String Literals - os ``, que não são suportados em .json, e por isso foi utilizado JavaScript)</small></li>        
        </ul>

        <h3>Itens Opcionais</h3>
        <ul>
            <li><b>tags: </b>Uma array com as palavras chaves do desafio - <small>Não está funcionando ainda por causa do lance das cores, tem uma issue no repositório</small> </li>
            <li><b>anexos: </b> Caso precise incluir arquivos no desafio, devem ser incluídos na mesma Pull Request em uma nova pasta no local <u>public/desafios/[id_do_desafio]</u>, e incluir nesse campo uma array de objetos com os campos nome (com o nome que você quer que apareça), e arquivo (com o nome exato do arquivo e extensão, recomendo usar <a href="https://www.alura.com.br/artigos/convencoes-nomenclatura-camel-pascal-kebab-snake-case" target="_blank" rel="noopener noreferrer">snake ou kebab case</a> para nomear o arquivo</li>           
        </ul>
    </>
    )
}

export default CadastrarDesafio