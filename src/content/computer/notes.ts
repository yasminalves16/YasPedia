import type { ContentNotes } from "../../types/notes";

export const computerNotes: ContentNotes = {
  slug: "o-que-e-um-computador",
  title: "O que é um computador",
  sections: [
    {
      id: "definicoes",
      title: "Definições",
      paragraphs: [
        "A linguagem que computador entende é mais simples do que a linguagem humana.",
        "O teclado, o mouse e outros dispositivos enviam informações para o computador, mas dentro dele tudo é convertido em sinais elétricos. É essa eletricidade que os componentes eletrônicos conseguem interpretar, representando os estados 0 e 1 que dão origem ao sistema binário.",
        "Dentro do computador tudo acaba sendo reduzido a eletricidade. Os componentes eletrônicos conseguem identificar apenas dois estados: com passagem de corrente elétrica ou sem passagem de corrente elétrica. Por convenção, chamamos esses estados de 1 e 0. É daí que surge o sistema binário.",
        "Exemplo: uma lâmpada desligada e ligada podemos chamar de 0 e 1.",
        "Na verdade não armazena energia quando representa 1 e 0 — o que muda é quando há passagem e quando não há passagem de corrente elétrica.",
        "Mas computadores fazem mais do que computar, ou seja uma calculadora, eles foram feitos pra facilitar a matemática de cálculos.",
        "Computador basicamente é uma maquina que fica ligando e desligando interruptores, os primeiros eram de forma física as computadoras ligavam e desligavam cabos e interruptores e alternava o posicionamento deles.",
        "O computador não é inteligente ele é obediente.",
        "O que é um computador ?",
        "Um computador é uma máquina capaz de armazenar e processar informações . A maioria dos computadores utiliza um sistema binário , que usa duas variáveis, 0 e 1, para realizar tarefas como armazenar dados, calcular algoritmos e exibir informações. Os computadores vêm em diversos formatos e tamanhos, desde smartphones até supercomputadores com mais de 300 toneladas.",
        "Quem inventou o computador ?",
        "Ao longo da história, muitas pessoas são reconhecidas pelo desenvolvimento de protótipos que levaram ao computador moderno. Durante a Segunda Guerra Mundial, o físico John Mauchly , o engenheiro J. Presper Eckert Jr. e seus colegas da Universidade da Pensilvânia projetaram o primeiro computador digital eletrônico programável de uso geral, o Electronic Numerical Integrator and Computer (ENIAC).",
        "Qual é o computador mais poderoso do mundo?",
        "Em 2025, o computador mais poderoso do mundo seria o supercomputador americano El Capitan, localizado no Laboratório Nacional Lawrence Livermore, na Califórnia. O computador é utilizado para fins de segurança nacional e para garantir a segurança do arsenal nuclear do país.",
        "Uma vantagem da computação analógica é a relativa simplicidade no projeto e construção de um computador analógico para resolver um problema específico. Outra vantagem é a capacidade frequente de representar e resolver um problema em \"tempo real\", ou seja, o cálculo ocorre na mesma velocidade que o sistema modelado. Suas principais desvantagens são a precisão limitada das representações analógicas — tipicamente algumas casas decimais, mas menos em mecanismos complexos — e o alto custo e a dificuldade de programação dos dispositivos de uso geral.",
        "Computadores digitais",
        "Em contraste com os computadores analógicos, os computadores digitais representam informações de forma discreta , geralmente como sequências de 0s e 1s ( dígitos binários , ou bits). A era moderna dos computadores digitais começou no final da década de 1930 e início da década de 1940 nos Estados Unidos , Grã-Bretanha e Alemanha . Os primeiros dispositivos utilizavam interruptores operados por eletroímãs (relés). Seus programas eram armazenados em fitas perfuradas ou cartões, e possuíam armazenamento interno de dados limitado. Para obter informações sobre o desenvolvimento histórico, consulte a seção Invenção do computador moderno .",
        "Os elementos físicos de um computador, seu hardware, são geralmente divididos em unidade central de processamento (CPU), memória principal (oumemória de acesso aleatório (RAM), ePeriféricos . A última classe engloba todos os tipos de dispositivos de entrada e saída (E/S): teclado, monitor, impressora , unidades de disco, conexões de rede, scanners e muito mais.",
        "Pc - computador pessoal - personal computer",
      ],
    },
    {
      id: "sistema-binario",
      title: "Sistema binário",
      paragraphs: [
        "Sistema Binário ou base 2 (BI = 2) basicamente 2 dígitos 0 e 1 (conhecidos como bits - palavra derivada do dígito binario)",
        "No mundo da computação geralmente iniciamos as contagens em 0",
        "Existem 8 possibilidades de binario",
        "O que esta dentro do computador de fato são pequenos e milhares interruptores em on e off - são chamados de transistores",
        "Usamos o sistema decimal para contar os binarios, porque utilizamos os numeros de 0 a 9 para criar os outros numeros e tudo que envolve a matematica",
        "123 nada mais é que 10² + 10¹ + 10⁰ ou seja o 10 esta envolvido pois usamos 10 digitos",
        "Então na base binaria a diferença é que vamos alterar a potencia pra 2² 2¹ e 2⁰",
        "Todas as lampadas desligadas são 000 = então pra um computador representar o numero 1 ele usaria 001, pra representar 2 seria 010 e pra representar 3 seria 011 pq",
        "A base decimal fica 0⁴ + 1² + 1¹  = 0 + 2 + 1 = 3",
        "Pra representar 4 fica 100",
        "A base decimal 1⁴ + 0² + 0¹  = 4 + 0 + 0 = 4",
        "Pra representar 5 fica 101",
        "A base decimal 1⁴ + 0² + 1¹  = 4 + 0 + 1 = 5",
        "Ou seja usando 3 bits conseguimos chegar até o numero 7",
        "110010 = 16 +8 + 0 + 0 + 1 + 0 = 50",
      ],
    },
    {
      id: "bits-e-bytes",
      title: "Bits e Bytes",
      paragraphs: [
        "Os computadores usam oito bits, então pra receber HI! estou rrecebendo 24 bits",
        "O vocabulário para o conjunto de 8 bits é bytes exemplo megabytes ou gigabytes",
        "Se temos 64 lampadas como no exemplo do vídeo, ja temos 8 bytes e conseguimos montar uma palavra com 8 letras",
        "1 pixel utiliza 24bits ou 3 bytes, por isso fotos, videos são medidos em kilobytes, megabytes ou até gigabytes",
      ],
    },
    {
      id: "ascii",
      title: "Como o computador representa letras (ASCII)",
      paragraphs: [
        "Para os computadores representarem nossa lingua o que fazemos é atribuiir números específicos em binário a letras do alfabeto.",
        "Os humanos decidiram que a letra A seria o numero 65 que é 01000001",
        "Então agora o computador esta atento ao programa que esta sendo usado,  exemplo calculadora o programa vai ver dentro do hardware do computador o padrão de interruptores que representa o número decimal 65 e pode aparecer literalmente o 65 para o usuario, agora se estamos escrevendo um texto o computador vai ser inteligente o suficiente pra entender que esses mesmos 65 bits representam A maiusculo",
        "Esse padrão que mapeia as letras é ASCII, o padrão americano de Código de Intercŝmbio de Informações",
        "72 73 33 formam HI! ou 01001000 01001001 00100001",
      ],
    },
    {
      id: "unicode",
      title: "Unicode",
      paragraphs: [
        "O unicode foi criado para suportar todas as línguas humanas, por exemplo para representar um emoji, exemplo do emoji com lagrimas de alegria é 128514, ou 000000011111011000000010",
        "Então começamos pela eletrecidade, fomos para binarios e agora representamos letras e numeros e emojis",
      ],
    },
    {
      id: "rgb",
      title: "Como o computador representa cores (RGB)",
      paragraphs: [
        "Para representar cores utilizamos o sistema RGB 77 73 33, esse numero vai representar uma quantidade de cor amarela, uma quantidade de verde e uma quantidade de azul, pdoemos representar 255 numeros com nossos binarios, então cada um desses valores é um numero entre 0 e 255 ou seja vamos ter uma cor",
      ],
    },
    {
      id: "pixels",
      title: "Pixels",
      paragraphs: [
        "Quando se trata de exibir as informações na tela, o computador vai usar diferentes padrões de bits para controlar as cores dos pontos na tela, é o que temos hoje em computadores, celulares ou TVS os pixels, são pequenos quadradinhos que representam uma cor, a resolução de uma imagem é quantos pixels ou pontos há horizontalmente e verticalmente",
      ],
    },
    {
      id: "videos",
      title: "Vídeos",
      paragraphs: [
        "Pra representar um vídeo é a mesma coisa de apresentar uma grande quantidade de imagens muito rapidamente",
        "É parecido com um flipbook, uma sequência de imagens passando rapidamente e fica como um video",
        "Mesma coisa com som, com um numero que define a batida e outro que define o tempo, mesma coisa com jpeg, pdf, png, jpg todas as extensões em computadores ou formatos de arquivos são apenas padrões de 0 e 1 em um arquivo.",
      ],
    },
    {
      id: "historia-da-computacao",
      title: "História da Computação",
      subsections: [
        {
          id: "computadores-humanos",
          title: "Computadores humanos",
          paragraphs: [
            "Computador eram humanos que faziam contas, em geral era mulheres (que inclusive foi essencial para trabalhos da época, assistir filme estrelas depois do tempo )",
            "O primeiro uso da palavra computador foi em um livro de Richard Braithwaite em 1613, e era sobre um homem que computava, e fazia cálculos até o final do século 19, quando o significado mudou de pessoa para o dispositivo",
          ],
        },
        {
          id: "abaco",
          title: "Ábaco",
          paragraphs: [
            "O primeiro instrumento de computação foi o Ábaco,uma calculadora manual que armazena o resultado",
          ],
        },
        {
          id: "rele",
          title: "Relé",
          paragraphs: [
            "Com a eletrecidade, uma maquina eletromecânica é uma maquina que tem metade mecanica que se move e outra parte eletrica tipo uma furadeira. O Relé é tipo um interruptor que liga e desliga usando eletricidade",
          ],
        },
        {
          id: "al-jazari",
          title: "Al-Jazari",
          paragraphs: [
            "Al-Jazari em 1206 construiu uma máquina que previa a posição do sol e da lua as fases da lua e ainda era possivel reprogramar para dizer quanto tinha de sol e de noite durante o dia de acordo com as fases do ano, e ainda era possivel programar pra acionar robos que tocavam músicas em determinadas horas do dia, e isso foi e é considerado até hoje como o primeiro computador analógico programavel e o Al é considerado por mt gnt como pai da robótica.",
          ],
        },
        {
          id: "pascalina",
          title: "Pascalina",
          paragraphs: [
            "Blaise Pascal construiu a primeira maquina de calcular digital totalmente mecanica",
            "Pascalina entre 1642 e 1644",
            "As calculadoras continuaram sendo criadas e 200 anos depois da Pascalina, para que o primeiro computador mecanico programavel em 1809 Charles Babbage cosntruiu um protótipo de uma máquina diferencial, foi cancelado. 1833 iniciou o projeto da maquina analitca, nunca saiu do papel por falta de verba Ada Lovelace, matematica acreditou no projeto e escreveu o primeito algoritmo que iria rodar nessa maquina, considerada a primeira programadora da história",
          ],
        },
        {
          id: "charles-babbage",
          title: "Charles Babbage",
          paragraphs: [
            "Charles Babbage cosntruiu um protótipo de uma máquina diferencial, foi cancelado. 1833 iniciou o projeto da maquina analitca, nunca saiu do papel por falta de verba",
          ],
        },
        {
          id: "ada-lovelace",
          title: "Ada Lovelace",
          paragraphs: [
            "Ada Lovelace, matematica acreditou no projeto e escreveu o primeito algoritmo que iria rodar nessa maquina, considerada a primeira programadora da história",
          ],
        },
        {
          id: "claude-shannon",
          title: "Claude Shannon",
          paragraphs: [
            "Em 1937 Claude Shannon disse que deveriamos parar de usar decimal e começar a pensar como eletricidade, on off, lógica ou, lógica inversora operação lógica e .. BInario",
            "O computador de relés demonstrado por volta do minuto (12:12) serve como uma analogia visual de um sistema lógico de decisões. Iberê utiliza esse circuito para mostrar como uma máquina pode processar informações sem precisar de engrenagens, baseando-se apenas na presença ou ausência de eletricidade.",
            "Essa ideia do shannon de usar lógica booleana com eletrecidade, muita gente considera a tese dele foi a mais importante do século 20",
          ],
        },
        {
          id: "george-boole",
          title: "George Boole",
          paragraphs: [
            "George Boolee - lógica booleana que é a base para o sistema desligado e ligado",
            "Como o sistema funciona:",
            "Entradas: O cozinheiro (operador) fornece ingredientes (ovo, queijo, farinha) e define se o forno está ligado.",
            "Processamento: Os relés estão conectados em série e paralelo para criar portas lógicas (como a operação E). O sinal elétrico só passa se as condições específicas de cada prato forem atendidas.",
            "Saída: Dependendo da combinação de chaves acionadas, uma lâmpada específica se acende, indicando o prato possível de ser preparado (ex: omelete, pão, ou bolinha de queijo).",
            "Essa montagem demonstra, na prática, como é possível criar um sistema que compara números, guarda informações e toma decisões baseadas em lógica booleana, abrindo caminho para o conceito de computadores programáveis modernos.",
          ],
        },
        {
          id: "konrad-zuse",
          title: "Konrad Zuse",
          paragraphs: [
            "Em 1940 o alemão Konrad Zuse inventou o Z2, computador com 600 reles e funcionava na lógica binaria de 0 e 1, tinha 300kilos consumia 1000 wats e fazia 1 soma por segundo, o z3 tinha 2000 reles e foi o primeiro computador digital totalmente programavel",
          ],
        },
        {
          id: "alan-turing",
          title: "Alan Turing",
          paragraphs: [
            "Em meio a segunda guerra mundial, para interceptar as mensagens dos alemães os aliados preciisava de um computador então o Alan Turing inventou um computador que era capaz de testar varias combinações e talvez decifrar a mensagem, o nome do computador era bomba",
            "Alan turing, criou a máquina turing",
          ],
        },
        {
          id: "tommy-flowers",
          title: "Tommy Flowers",
          paragraphs: [
            "TOMMY FLOWERS construiu o Colossus, que conseguiu interceptar as mensagens",
          ],
        },
        {
          id: "eniac",
          title: "ENIAC",
          paragraphs: [
            "Em 1945 o Eniac foi criado, foi programado por 6 mulheres porque elas eram as computadoras. O primeiro computador de uso geral, que não era programado para somente uma função",
          ],
        },
        {
          id: "von-neumann",
          title: "Von Neumann",
          paragraphs: [
            "John von Neumann, escreveu um artigo sugerindo a arquitetura do computador - Arquiteturas Von Neumann, usamos até hoje",
          ],
        },
        {
          id: "guerra-fria",
          title: "Guerra Fria",
          paragraphs: [
            "Guerra Fria",
            "Pra parar de usar as valvulas que eram grandes, ocupavam espaço e queimavam, inventaram o transistor 3 homens que trabalhavam na Bell labs",
          ],
        },
        {
          id: "transistores",
          title: "Transistores",
          paragraphs: [
            "Diodo - componente eletronico que só deixa a corrente eletrica passar em um sentido",
            "Depois que criaram o diodo os 3 pesquisadores entenderam como funcionava o diodo e criaram o transistor, basicamente é uma peça que quando recebe energia no compononente central o material semicondutor permite a passagem de energia, basicamente o que o relé e a valvula faziam porém em um tamanho MUITO menor e queimava muito menos. Foi a peça que encolheu o computador",
            "Um componente eletrico só reage a passagem da corrente eletrica como o relé, já a valvula termionica da pra regular quanto passa de energia isso é eletronico",
          ],
        },
        {
          id: "chips",
          title: "Chips",
          paragraphs: [
            "Ai criram um chip que era uma peça muito menor - um circuito integrado muito mais barato e que economizava espaço utilizando silício, tem milhares ou bilhares de transitores",
            "A CPU e a RAM sãoCircuitos integrados (CIs) — pequenas pastilhas de silício , ou chips, que contêm milhares ou milhões de transistores que funcionam como interruptores elétricos",
          ],
        },
      ],
    },
    {
      id: "memorias",
      title: "Memórias",
      paragraphs: [
        "Memoria volatio - curta duração ocorre na memoria ram quando o computador é desligado as memorias somem",
        "Memoria persistene - hd, sdd, cd",
        "Memória cache - que fica dentro do processador",
      ],
    },
    {
      id: "observacoes-pessoais",
      title: "Observações pessoais",
      paragraphs: [
        "A primeira máquina encontrada foi construida via manivela, ela previa a posição das imagens no céu.",
        "Durante a idade média as maquinas foram ficando mais complexas como relógios de torre q eram programados pra tocar o sino de 1 em 1 hora",
      ],
    },
    {
      id: "referencias",
      title: "Referências",
      paragraphs: [
        "Harvard CS50 – Introduction to Computer Science",
        "Early Computing: Crash Course Computer Science #1",
        "Saga dos Computadores — Manual do Mundo: https://www.youtube.com/watch?v=xajcV4lwY3Q&list=PLYjrJH3e_wDOA5mxhiMxE6yslcIzU5NkX",
        "Os COMPUTADORES eram PESSOAS! #SagaDosComputadores Ep.1",
        "https://www.britannica.com/technology/computer",
      ],
    },
  ],
};
