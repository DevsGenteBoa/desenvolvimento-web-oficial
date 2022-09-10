const desafios = [
  {
    id: 7,
    titulo: 'Lista de vagas',
    resumo: 'Divulgação de vagas de emprego',
    descricao: `
    Esse desafio consiste em construir uma aplicação que exiba uma lista de vagas de emprego a partir
    de um dado banco de dados em JSON.
    Ou seja, você terá que mostrar as empresas e dentro de cada empresa as vagas disponíveis.
    
    O desafio pode ser feito usando qualquer linguagem de programação, framework e banco de dados. 
    O importante é que você mostre suas habilidades e conhecimentos.
    
    
    ## Requisitos
    
        - Listar empresas
        - Listar vagas de uma empresa
        - Deve ter um repositório no github com o código da aplicação
    
    
    ## Extras
    
        - Adicionar filtros de busca
        - Adicionar paginação
        - Adicionar ordenação
        - Adicionar mais conteúdo ao banco de dados
    
    ## Dicas
    
        - Utilize o GitHub Pages para hospedar sua aplicação
    
    
    Compartilhe o desafio com os seus amigos. E mostre para a gente o resultado do seu trabalho.
    
        `,
    tags: ['JSON', 'Array'],
    anexos: [{ nome: 'Banco de dados', arquivo: 'banco-de-dados.json' }],
  },
  {
    id: 1,
    titulo: 'Card de Funcionários',
    resumo:
      'Crie um card de funcionários a partir de uma dada coleção de dados.',
    descricao: `Card de Funcionários Tendo um arquivo com os dados dos profissionais e uma lista de serviços com os dados a serem tratados, mostrar cards com as seguintes informações:

    - Uma lista com o nome e valor de apenas serviços especiais que ele faz
    - Uma lista com nome e descrição de todos os serviços que ele faz
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
    descricao: `Criar uma função que recebe um número como argumento, essa função deve retornar verdadeiro com o número é par (e falso quando o número é impar):

    Exemplo
    - função éPar(2) //retorna o valor true
    - função éPar(5) //retorna o valor false
    `,
    tags: ['Matemática', 'Básico', 'Função Pura'],
  },
  {
    id: 3,
    titulo: 'Par ou ímpar?',
    resumo: 'Descobrir se um número é par ou impar',
    descricao: `Criar uma função que recebe um número como argumento, essa função deve retornar o texto "par" (quanto o número inserido for par) ou "ímar" (quanto o número inserido for ímpar):

    Exemplo
    - função parOuÍmar(2) //retorna o valor "par"
    - função parOuÍmar(5) //retorna o valor "ímpar"
    `,
    tags: ['Matemática', 'Básico', 'Função Pura'],
  },
  {
    id: 4,
    titulo: 'É múltiplo de 7?',
    resumo: 'Descobrir se um número é múltiplo de 7',
    descricao: `Criar uma função que recebe um número como argumento, essa função deve retornar verdadeiro se o número é múltiplo 7 (e falso quando o número não é múltiplo de 7):

    Exemplo
    - função éMúltiploDeSete(35) //retorna o valor true
    - função éMúltiploDeSete(20) //retorna o valor false
    `,
    tags: ['Matemática', 'Básico', 'Função Pura'],
  },
  {
    id: 5,
    titulo: 'É múltiplo de N?',
    resumo: 'Descobrir se um número é múltiplo de um outro número',
    descricao: `Criar uma função que recebe dois números como argumento, essa função deve retornar verdadeiro se o primeiro número é múltiplo do segundo (e falso quando não for):

    Exemplo
    - função éMúltiplo(55, 11) //retorna o valor true
    - função éMúltiplo(20, 7) //retorna o valor false
    `,
    tags: ['Matemática', 'Básico', 'Função Pura'],
  },
  {
    id: 6,
    titulo: 'Tem algum número par?',
    resumo: 'Dada uma array, descobrir se algum número dela é par',
    descricao: `Criar uma função que recebe uma array, essa função deve retornar verdadeiro se algum número dela for par (e falso quando não for):
    
    Exemplo
    - função temPar([3,4,5]) //retorna o valor true
    - função temPar([21, 7]) //retorna o valor false
    `,
    tags: ['Matemática', 'Itermediário', 'Função Pura', 'Array'],
  },
];

export default desafios;
