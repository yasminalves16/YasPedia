import type { Content } from "../../types/content";

export const computerContent: Content = {
  slug: "o-que-e-um-computador",
  title: "O que é um Computador?",
  question: "O que é um computador?",
  shortAnswer:
    "Um computador é uma máquina que consegue receber, armazenar, processar e produzir informações.",
  category: "Fundamentos da Computação",
  subcategory: "Introdução",
  tags: [
    "Fundamentos",
    "Hardware",
    "Software",
    "Introdução",
    "Binário",
    "Bits",
    "História",
    "ENIAC",
    "Entrada e saída",
  ],
  updatedAt: "2026-07-04",
  status: "Estudando",
  isFavorite: false,
  sections: [
    {
      id: "introducao",
      title: "Introdução",
      icon: "file-text",
      content: [
        "Hoje utilizamos computadores o tempo inteiro: celulares, notebooks, videogames, televisões, relógios e até eletrodomésticos, como robô aspirador, máquina de lavar roupa e diversos outros.",
        "Por mais que sejam diferentes, todos possuem o mesmo objetivo: processar informações seguindo instruções definidas.",
        "Antes de entender qualquer coisa relacionada à linguagem de programação, é importante entender o que é e como o computador funciona.",
      ],
    },
    {
      id: "definicao",
      title: "Definição",
      icon: "book-open",
      content: [
        "Computador nada mais é do que uma máquina que processa informações. Ela recebe informações do ambiente, executa operações sobre esses dados e produz um resultado.",
        "Essa capacidade existe porque ele consegue seguir instruções em altíssimas velocidades.",
        "Mesmo que sejam enormes programas, jogos ou inteligências artificiais, acabam sendo reduzidos a bilhões de pequenas instruções.",
      ],
    },
    {
      id: "hardware-x-software",
      title: "Hardware x Software",
      icon: "cpu",
      content: [
        "Um computador é formado por duas partes principais.",
        "[Hardware](hardware-x-software) é a parte física do computador. São componentes que consigo tocar. Exemplos: placa-mãe, memória RAM, processador (CPU), SSD, teclado e monitor.",
        "[Software](hardware-x-software) é o conjunto de instruções que dizem ao hardware o que fazer. Sistema operacional, navegador, jogos e programas são softwares. Sem software, o hardware basicamente não sabe qual tarefa realizar.",
      ],
    },
    {
      id: "como-computador-entende-informacoes",
      title: "Como o computador entende informações?",
      icon: "cpu",
      content: [
        "Os componentes eletrônicos de um computador funcionam como pequenas chaves eletrônicas. Essas chaves assumem apenas [dois estados](binario): ligado ou desligado.",
        "Igual a uma lâmpada: ou ela está ligada ou está desligada.",
        "Por convenção, definiu-se que esses estados seriam representados por: ligado → 1 e desligado → 0. Cada valor desse recebe o nome de [bit](bits-e-bytes).",
        "Combinando bilhões de [bits](bits-e-bytes), o computador consegue representar números, letras, imagens, músicas, vídeos e qualquer outro tipo de informação.",
      ],
    },
    {
      id: "curiosidades-historicas",
      title: "Curiosidades Históricas",
      icon: "history",
      content: [],
      items: [
        {
          lead: "Antigamente, \"computador\" era uma profissão",
          body: "Até o século XIX, computadores eram pessoas responsáveis por realizar cálculos matemáticos para governos, universidades e empresas.",
        },
        {
          lead: "A maioria dos computadores humanos eram mulheres",
          body: "Elas eram responsáveis por cálculos extremamente complexos em áreas como Astronomia, Engenharia e Balística. Quando o computador eletrônico foi criado, muitas dessas mulheres se tornaram as primeiras programadoras da história.",
        },
        {
          lead: "As ENIAC Six",
          body: "Um exemplo muito legal é o grupo de programadoras do ENIAC, conhecidas como ENIAC Six. Elas desenvolveram formas de programar o primeiro computador eletrônico de grande porte de propósito geral.",
        },
        {
          lead: "Os primeiros computadores não usavam transistores",
          body: "Os computadores passaram por diversas gerações de tecnologia: relés eletromecânicos, válvulas termiônicas, diodos e semicondutores, transistores, circuitos integrados (chips) e microprocessadores modernos. Cada nova tecnologia tornou os computadores menores, mais rápidos, mais baratos e mais eficientes.",
        },
        {
          lead: "Um computador antigo ocupava uma sala inteira",
          body: "Os primeiros computadores eletrônicos eram enormes e eram programados para realizar apenas um tipo de tarefa. Máquinas como o ENIAC ocupavam salas inteiras, pesavam dezenas de toneladas e consumiam uma quantidade enorme de energia. Hoje, um smartphone possui milhares de vezes mais capacidade de processamento do que essas máquinas históricas.",
        },
        {
          lead: "Tudo continua funcionando com apenas dois estados",
          body: "Apesar da enorme evolução do hardware, o princípio básico permanece o mesmo: os computadores atuais ainda funcionam utilizando apenas dois estados elétricos, representados pelos valores 0 e 1. A diferença é que, atualmente, bilhões de transistores conseguem alternar entre esses estados bilhões de vezes por segundo.",
        },
        {
          lead: "Imagens também são números",
          body: "Uma imagem exibida no monitor nada mais é do que uma enorme sequência de números. Cada pixel possui valores que representam cores (como vermelho, verde e azul — RGB). O monitor interpreta esses valores e acende cada pixel com a intensidade correta, formando a imagem que vemos.",
        },
      ],
    },
  ],
  blockHeadings: {
    analogy: { title: "Destaque", icon: "lightbulb" },
    practice: { title: "Na prática", icon: "code-2" },
    commonMistakes: { title: "Erros comuns", icon: "alert-triangle" },
    behindTheScenes: { title: "Funcionamento interno", icon: "cpu" },
    relatedConcepts: { title: "Conceitos relacionados", icon: "link-2" },
    faq: { title: "Perguntas Frequentes", icon: "circle-help" },
    exercises: { title: "Exercícios", icon: "pencil-line" },
    selfAssessment: { title: "Autoavaliação", icon: "list-checks" },
    summary: { title: "Resumo Técnico", icon: "align-left" },
    references: { title: "Referências", icon: "library" },
    revisionHistory: { title: "Histórico de revisão", icon: "history" },
  },
  analogy:
    "Computador não é uma máquina inteligente, é uma máquina obediente.",
  illustration:
    "O computador não possui consciência nem toma decisões por conta própria. Ele apenas executa instruções programadas. Mesmo as inteligências artificiais continuam seguindo algoritmos previamente implementados.",
  practice: {
    syntax: "entrada -> processamento -> saída",
    simple: {
      title: "Exemplo",
      description:
        "Aperto a tecla A → O teclado envia essa informação → O computador processa → O sistema operacional interpreta → O programa recebe esse evento → A letra aparece na tela. Tudo o que acontece em um computador segue esse princípio.",
    },
    intermediate: {
      title: "Tirar uma foto",
      description:
        "Entrada: luz captada pela câmera. Processamento: sensor converte luz em dados digitais e o software aplica filtros. Saída: imagem salva na galeria.",
    },
    real: {
      title: "Reproduzir uma música",
      description:
        "Entrada: arquivo de áudio ou stream. Processamento: decodificação do formato e envio para a placa de som. Saída: som pelos alto-falantes ou fones.",
    },
  },
  behindTheScenes: [
    "Por baixo de qualquer interface gráfica, o processador executa bilhões de operações por segundo alternando transistores entre os estados 0 e 1.",
    "Textos, imagens e sons são codificados como sequências numéricas antes de serem armazenados ou transmitidos.",
    "O sistema operacional coordena hardware e software para que múltiplos programas compartilhem os recursos da máquina.",
    "Em síntese, um computador combina hardware e software para executar instruções com bilhões de transistores em dois estados (0 e 1), representando qualquer tipo de dado — de cálculos simples a aplicações extremamente complexas.",
  ],
  relatedConcepts: [
    {
      title: "Hardware x Software",
      slug: "hardware-x-software",
      description:
        "Entenda a diferença entre a parte física e as instruções do computador.",
    },
    {
      title: "Bits e bytes",
      slug: "bits-e-bytes",
      description: "Como o computador mede e agrupa unidades de informação.",
    },
    {
      title: "Binário",
      slug: "binario",
      description: "O sistema numérico de base 2 usado pelos computadores.",
    },
  ],
  faq: [
    {
      question: "Um smartphone é um computador?",
      answer:
        "Sim. Ele possui processador, memória, armazenamento e executa software — os mesmos princípios de um computador tradicional.",
    },
    {
      question: "Por que computadores usam apenas 0 e 1?",
      answer:
        "Porque componentes eletrônicos são mais confiáveis operando com dois estados distintos (ligado/desligado) do que com múltiplos níveis.",
    },
    {
      question: "Hardware funciona sem software?",
      answer:
        "O hardware liga, mas sem software não há instruções sobre qual tarefa executar. Os dois dependem um do outro.",
    },
  ],
  exercises: [
    {
      level: "Fácil",
      title: "Identificando computadores",
      prompt:
        "Quais dos itens abaixo podem ser considerados computadores? Notebook, micro-ondas, smartphone, relógio inteligente, calculadora, robô aspirador. Explique por que você considera cada um deles um computador.",
    },
    {
      level: "Médio",
      title: "Entrada, processamento e saída",
      prompt:
        "Escolha uma ação do seu dia a dia (por exemplo, tirar uma foto ou reproduzir uma música) e descreva quais são a entrada, o processamento e a saída.",
    },
    {
      level: "Difícil",
      title: "Hardware ou Software?",
      prompt:
        "Classifique os itens abaixo como Hardware ou Software: monitor, Google Chrome, SSD, Windows, memória RAM, VS Code, teclado, processador.",
    },
  ],
  selfAssessment: [
    "Consigo explicar o que é um computador com minhas próprias palavras.",
    "Entendo a diferença entre hardware e software.",
    "Sei explicar o conceito de entrada, processamento e saída.",
    "Entendo por que computadores utilizam apenas dois estados (0 e 1).",
    "Sei explicar por que um computador não \"pensa\", apenas executa instruções.",
    "Consigo explicar como imagens, músicas e textos também podem ser representados por números.",
  ],
  references: [
    {
      type: "Livro",
      title: "KLS — Sistemas de Computação e Informação",
    },
    {
      type: "Documentação",
      title: "Harvard CS50 – Introduction to Computer Science (Aula 0)",
      url: "https://cs50.harvard.edu/x/",
    },
    {
      type: "Artigo",
      title: "IBM — What is a Computer?",
      url: "https://www.ibm.com/topics/what-is-a-computer",
    },
    {
      type: "Artigo",
      title: "Encyclopaedia Britannica — Computer",
      url: "https://www.britannica.com/technology/computer",
    },
    {
      type: "Artigo",
      title: "Wikipedia — Computer",
      url: "https://en.wikipedia.org/wiki/Computer",
    },
    {
      type: "Vídeo",
      title: "Crash Course Computer Science #1 — Early Computing",
      url: "https://www.youtube.com/watch?v=O5nskjZ_GoI",
    },
    {
      type: "Vídeo",
      title: "Crash Course Computer Science #2 — Electronic Computing",
      url: "https://www.youtube.com/watch?v=LN0ucKNX0hc",
    },
    {
      type: "Vídeo",
      title: "Saga dos Computadores — Manual do Mundo",
      url: "https://www.youtube.com/watch?v=xajcV4lwY3Q&list=PLYjrJH3e_wDOA5mxhiMxE6yslcIzU5NkX",
    },
  ],
  revisionHistory: [
    {
      date: "2026-07-04",
      description: "Artigo criado com conteúdo inicial sobre computadores.",
    },
  ],
};
