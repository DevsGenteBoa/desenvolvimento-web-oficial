const desafios = [
  {
    id: 7,
    titulo: 'Lista de vagas',
    resumo: 'Divulgação de vagas de emprego',
    descricao: `
    <p>
        Esse desafio consiste em construir uma aplicação que exiba uma lista de vagas de emprego a partir
        de um dado banco de dados em JSON.
        Ou seja, você terá que mostrar as empresas e dentro de cada empresa as vagas disponíveis.
    </p>
    <p>
        O desafio pode ser feito usando qualquer linguagem de programação, framework e banco de dados. 
        O importante é que você mostre suas habilidades e conhecimentos.
    </p>
    
    <h3> Requisitos </h3>
    <ul>
        <li>- Listar empresas </li>
        <li>- Listar vagas de uma empresa </li>
        <li>-  Deve ter um repositório no github com o código da aplicação </li>
    </ul>

    <h3> Extras </h3>
    <ul>
        <li>- Adicionar filtros de busca </li>
        <li>- Adicionar paginação </li>
        <li>- Adicionar ordenação </li>
        <li>- Adicionar mais conteúdo ao banco de dados </li>
    </ul>   

    <h3> Dicas </h3>
    <ul>
        <li>- Utilize o GitHub Pages para hospedar sua aplicação </li>
    </ul>
    
    <p>
    Compartilhe o desafio com os seus amigos. E mostre para a gente o resultado do seu trabalho.
    </p>
        `,
    tags: ['JSON', 'Array'],
    anexos: [{ nome: 'Banco de dados', arquivo: 'banco-de-dados.json' }],
  },
  {
    id: 1,
    titulo: 'Card de Funcionários',
    resumo:
      'Crie um card de funcionários a partir de uma dada coleção de dados.',
    descricao: `
    <p>
    Card de Funcionários Tendo um arquivo com os dados dos profissionais e uma lista de serviços com os dados a serem tratados, mostrar cards com as seguintes informações:
    </p>
    <ul>
        <li>Uma lista com o nome e valor de apenas serviços especiais que ele faz</li>
        <li>Uma lista com nome e descrição de todos os serviços que ele faz</li>
    </ul>
    `,
    link: '',
    image: '',
    tags: ['Manipulação Array', 'Filtro', 'HTML Select'],
    anexos: [
      { nome: 'Resumo', arquivo: 'resumo-desafio.txt' },
      { nome: 'Banco de Dados', arquivo: 'banco-de-dados.png' },
      { nome: 'Gráfico Explicativo', arquivo: 'grafico-explicativo.png' },
    ],
  },
  {
    id: 2,
    titulo: 'É Par?',
    resumo: 'Descobrir se um número é par',
    descricao: `
    <p>
    Criar uma função que recebe um número como argumento, essa função deve retornar verdadeiro com o número é par (e falso quando o número é impar):
    </p>

    <h3>Exemplo</h3>
    <ul>
        <li>função éPar(2) //retorna o valor true</li>
        <li>função éPar(5) //retorna o valor false</li>
    </ul>
    `,
    tags: ['Matemática', 'Básico', 'Função Pura'],
  },
  {
    id: 3,
    titulo: 'Par ou ímpar?',
    resumo: 'Descobrir se um número é par ou impar',
    descricao: `
    <p>
    Criar uma função que recebe um número como argumento, essa função deve retornar o texto "par" (quanto o número inserido for par) ou "ímar" (quanto o número inserido for ímpar):
    </p>
    <h3>Exemplo</h3>
    <ul>
        <li>função parOuÍmar(2) //retorna o valor "par""</li>
        <li>função parOuÍmar(5) //retorna o valor "ímpar"</li>
    </ul>
    `,
    tags: ['Matemática', 'Básico', 'Função Pura'],
  },
  {
    id: 4,
    titulo: 'É múltiplo de 7?',
    resumo: 'Descobrir se um número é múltiplo de 7',
    descricao: `
    <p>
    Criar uma função que recebe um número como argumento, essa função deve retornar verdadeiro se o número é múltiplo 7 (e falso quando o número não é múltiplo de 7):
    </p>
    <h3>Exemplo</h3>
    <ul>
        <li>função éMúltiploDeSete(35) //retorna o valor true</li>
        <li>função éMúltiploDeSete(20) //retorna o valor false</li>
    </ul>
    `,
    tags: ['Matemática', 'Básico', 'Função Pura'],
  },
  {
    id: 5,
    titulo: 'É múltiplo de N?',
    resumo: 'Descobrir se um número é múltiplo de um outro número',
    descricao: `
    <p>
    Criar uma função que recebe dois números como argumento, essa função deve retornar verdadeiro se o primeiro número é múltiplo do segundo (e falso quando não for):
    </p>
    <h3>Exemplo</h3>
    <ul>
        <li>função éMúltiplo(55, 11) //retorna o valor true</li>
        <li>função éMúltiplo(20, 7) //retorna o valor false</li>
    </ul>
    `,
    tags: ['Matemática', 'Básico', 'Função Pura'],
  },
  {
    id: 6,
    titulo: 'Tem algum número par?',
    resumo: 'Dada uma array, descobrir se algum número dela é par',
    descricao: `
    <p>
    Criar uma função que recebe uma array, essa função deve retornar verdadeiro se algum número dela for par (e falso quando não for):
    </p>
    <h3>Exemplo</h3>
    <ul>
        <li>função temPar([3,4,5]) //retorna o valor true</li>
        <li>função temPar([21, 7]) //retorna o valor false</li>
    </ul>
    `,
    tags: ['Matemática', 'Itermediário', 'Função Pura', 'Array'],
  },
];

export default desafios;
