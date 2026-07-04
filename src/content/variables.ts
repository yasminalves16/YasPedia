import type { Content } from "../types/content";

export const variablesContent: Content = {
  slug: "variaveis",
  title: "Variáveis",
  question: "O que são variáveis?",
  shortAnswer:
    "Variáveis são nomes usados para guardar e reutilizar valores durante a execução de um programa.",
  category: "Lógica de Programação",
  subcategory: "Dados",
  tags: ["Fundamentos", "Memória", "JavaScript"],
  updatedAt: "2026-07-03",
  status: "Não estudado",
  isFavorite: false,
  sections: [
    {
      id: "introducao",
      title: "Introdução",
      icon: "file-text",
      content: [
        "Programas precisam lembrar valores: nomes, números, resultados de cálculos e estados temporários.",
        "Variáveis dão nomes a esses valores para que o código consiga trabalhar com eles de forma legível.",
      ],
    },
    {
      id: "definicao",
      title: "Definição",
      icon: "book-open",
      content: [
        "Uma variável é uma referência nomeada para um valor. Em JavaScript, ela pode ser criada com const, let ou var.",
        "Ela existe para evitar repetição, dar significado aos dados e permitir que o programa manipule informações ao longo do tempo.",
      ],
    },
    {
      id: "como-funciona",
      title: "Como funciona",
      icon: "cpu",
      content: [
        "Ao declarar uma variável, o programa associa um identificador a um valor. Esse valor pode ser lido em outras partes do escopo onde a variável existe.",
        "Em linguagens como JavaScript, valores primitivos e referências a objetos são tratados de formas diferentes na memória.",
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
    "Uma variável é como uma etiqueta em uma caixa: a etiqueta ajuda você a encontrar e entender o que está guardado ali.",
  practice: {
    syntax: "const nome = valor;",
    simple: {
      title: "Guardar um nome",
      description: "Criar uma variável com o nome de uma pessoa.",
      code: "const nome = \"Yasmin\";",
    },
    intermediate: {
      title: "Atualizar contador",
      description: "Usar let quando o valor precisa mudar.",
      code: "let tentativas = 0;\ntentativas = tentativas + 1;",
    },
    real: {
      title: "Termo de busca",
      description:
        "Guardar o texto digitado pelo usuário antes de filtrar uma lista de artigos.",
    },
    bad: {
      title: "Nome sem significado",
      description:
        "Usar nomes como x, y ou data para tudo dificulta a leitura e manutenção.",
    },
    bestPractices: [
      "Prefira const quando o valor não precisa ser reatribuído.",
      "Use nomes que revelem intenção.",
      "Mantenha variáveis próximas do lugar onde são usadas.",
    ],
  },
  commonMistakes: [
    "Usar var sem necessidade.",
    "Escolher nomes genéricos demais.",
    "Confundir reatribuição com mutação de objetos.",
  ],
  behindTheScenes: [
    "O motor JavaScript cria ambientes léxicos para controlar quais variáveis existem em cada escopo.",
    "Referências a objetos podem apontar para dados alocados na heap.",
    "Chamadas de função criam registros temporários na stack.",
  ],
  relatedConcepts: [
    {
      title: "Stack",
      slug: "stack",
      description: "Região usada para chamadas e dados temporários.",
    },
    {
      title: "Heap",
      slug: "heap",
      description: "Região usada para dados que vivem além de uma chamada imediata.",
    },
  ],
  faq: [
    {
      question: "Quando usar const?",
      answer: "Use const quando a variável não será reatribuída.",
    },
    {
      question: "let é errado?",
      answer:
        "Não. let é adequado quando o valor realmente precisa mudar ao longo do algoritmo.",
    },
  ],
  exercises: [
    {
      level: "Fácil",
      title: "Nomear valores",
      prompt: "Crie variáveis para nome, idade e cidade.",
    },
    {
      level: "Médio",
      title: "Contador",
      prompt: "Crie um contador que começa em zero e aumenta três vezes.",
    },
    {
      level: "Difícil",
      title: "Estado de busca",
      prompt:
        "Modele variáveis para termo pesquisado, artigos filtrados e artigo selecionado.",
    },
  ],
  selfAssessment: [
    "Sei explicar para que serve uma variável.",
    "Sei escolher entre const e let.",
    "Entendo por que nomes claros melhoram o código.",
  ],
  summary:
    "Variáveis dão nome aos valores e tornam o código mais claro, reutilizável e fácil de manter.",
  references: [
    {
      type: "Documentação",
      title: "MDN: Gramática léxica e variáveis",
      url: "https://developer.mozilla.org/",
    },
  ],
  revisionHistory: [
    {
      date: "2026-07-03",
      description: "Artigo criado como exemplo inicial.",
    },
  ],
};
