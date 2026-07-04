import type { Content } from "../types/content";

export const algorithmContent: Content = {
  slug: "o-que-e-um-algoritmo",
  title: "O que é Algoritmo",
  question: "O que é algoritmo?",
  shortAnswer:
    "Um algoritmo é uma sequência finita de passos lógicos usada para resolver um problema ou executar uma tarefa.",
  category: "Lógica de Programação",
  subcategory: "Algoritmos",
  tags: ["Fundamentos", "Lógica", "Resolução de problemas"],
  updatedAt: "2026-07-03",
  status: "Estudando",
  isFavorite: true,
  sections: [
    {
      id: "introducao",
      title: "Introdução",
      icon: "file-text",
      content: [
        "Antes de escrever código, existe uma ideia: uma sequência de decisões que leva de um problema até uma solução.",
        "O algoritmo é essa sequência organizada. Ele não depende de uma linguagem específica; pode ser descrito em português, em pseudocódigo, em JavaScript ou até em um fluxograma.",
      ],
    },
    {
      id: "definicao",
      title: "Definição",
      icon: "book-open",
      content: [
        "Um algoritmo existe para transformar um problema confuso em passos claros, verificáveis e repetíveis.",
        "Ele resolve o problema de saber o que fazer primeiro, quais condições observar e quando considerar que a tarefa terminou.",
      ],
    },
    {
      id: "como-funciona",
      title: "Como funciona",
      icon: "cpu",
      content: [
        "Um algoritmo recebe entradas, executa passos intermediários e produz uma saída. Esses passos podem envolver cálculos, comparações, repetições e decisões.",
        "Quanto mais claro for o algoritmo, mais fácil será transformá-lo em código, testar seu comportamento e explicar sua solução para outra pessoa.",
      ],
    },
  ],
  blockHeadings: {
    analogy: { title: "Analogia do mundo real", icon: "lightbulb" },
    practice: { title: "Na prática", icon: "code-2" },
    commonMistakes: { title: "Erros comuns", icon: "alert-triangle" },
    behindTheScenes: { title: "Funcionamento interno", icon: "cpu" },
    relatedConcepts: { title: "Conceitos relacionados", icon: "link-2" },
    faq: { title: "Perguntas Frequentes", icon: "circle-help" },
    exercises: { title: "Exercícios", icon: "pencil-line" },
    selfAssessment: { title: "Autoavaliação", icon: "list-checks" },
    summary: { title: "Resumo", icon: "align-left" },
    references: { title: "Referências", icon: "library" },
    revisionHistory: { title: "Histórico de revisão", icon: "history" },
  },
  analogy:
    "Uma receita de bolo é um algoritmo: ela possui ingredientes, uma ordem de preparo, condições e um resultado esperado.",
  illustration: "Fluxo: problema -> passos lógicos -> solução",
  practice: {
    syntax: "entrada -> processamento -> saída",
    simple: {
      title: "Somar dois números",
      description: "Receba dois números, some os valores e mostre o resultado.",
      code: "const soma = numeroA + numeroB;",
    },
    intermediate: {
      title: "Encontrar o maior número",
      description:
        "Percorra uma lista de números guardando o maior valor encontrado até o momento.",
      code: "const maior = numeros.reduce((atual, numero) => Math.max(atual, numero));",
    },
    real: {
      title: "Buscar um artigo",
      description:
        "Receba um termo de pesquisa, compare com títulos e tags, e retorne os artigos mais relevantes.",
    },
    bad: {
      title: "Passos vagos",
      description:
        "Um algoritmo ruim diz apenas 'resolver o problema' sem explicar quais decisões serão tomadas.",
    },
    bestPractices: [
      "Defina claramente a entrada e a saída.",
      "Quebre problemas grandes em passos menores.",
      "Teste o algoritmo com exemplos simples antes de codificar.",
    ],
  },
  commonMistakes: [
    "Confundir algoritmo com linguagem de programação.",
    "Começar pelo código antes de entender o problema.",
    "Ignorar casos de borda, como listas vazias ou valores inválidos.",
  ],
  behindTheScenes: [
    "Quando um algoritmo vira código, o parser lê o texto do programa e transforma a estrutura em uma AST.",
    "Depois, o motor da linguagem pode gerar bytecode ou código otimizado para executar as instruções.",
    "Durante a execução, valores podem ocupar memória na stack ou na heap, dependendo do tipo e do tempo de vida dos dados.",
  ],
  relatedConcepts: [
    {
      title: "Parser",
      slug: "parser",
      description: "Parte que lê o código-fonte e entende sua estrutura.",
    },
    {
      title: "AST",
      slug: "ast",
      description: "Representação em árvore da estrutura do código.",
    },
    {
      title: "Stack",
      slug: "stack",
      description: "Região de memória usada para chamadas de função e valores temporários.",
    },
  ],
  faq: [
    {
      question: "Todo algoritmo precisa ser escrito em código?",
      answer:
        "Não. Um algoritmo pode ser explicado em linguagem natural, pseudocódigo, fluxograma ou código.",
    },
    {
      question: "Algoritmo e programa são a mesma coisa?",
      answer:
        "Não exatamente. O algoritmo é a ideia organizada; o programa é uma implementação dessa ideia em uma linguagem.",
    },
  ],
  exercises: [
    {
      level: "Fácil",
      title: "Descrever uma rotina",
      prompt: "Escreva um algoritmo em português para preparar um café.",
    },
    {
      level: "Médio",
      title: "Maior valor",
      prompt: "Crie um algoritmo para encontrar o maior número de uma lista.",
    },
    {
      level: "Difícil",
      title: "Busca organizada",
      prompt:
        "Descreva um algoritmo para pesquisar artigos por título, categoria e tags.",
    },
  ],
  selfAssessment: [
    "Sei explicar o que é um algoritmo.",
    "Sei criar um algoritmo simples.",
    "Entendo a diferença entre algoritmo e linguagem de programação.",
  ],
  summary:
    "Algoritmos são instruções organizadas para resolver problemas. Eles são a ponte entre o raciocínio humano e a implementação em código.",
  references: [
    {
      type: "Documentação",
      title: "MDN Web Docs",
      url: "https://developer.mozilla.org/",
    },
    {
      type: "Livro",
      title: "Entendendo Algoritmos",
    },
  ],
  revisionHistory: [
    {
      date: "2026-07-03",
      description: "Artigo criado com estrutura inicial da YasPedia.",
    },
  ],
};
