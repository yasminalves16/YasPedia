# YasPedia

Base de conhecimento pessoal sobre desenvolvimento de software.

O YasPedia não é um curso, blog ou roadmap. É um lugar para documentar conceitos com minhas próprias palavras — pesquisáveis, organizados por categoria e conectados por links internos — transformando estudo em entendimento consultável.

## O que o projeto faz

- **Home** com busca rápida, estatísticas e navegação por categorias
- **Busca** unificada com filtros por status, favoritos e categoria
- **Glossário** integrado à busca (`/busca?view=glossario`)
- **Categorias** com listagem filtrada de conceitos
- **Favoritos** para consulta recorrente
- **Página de conceito** com seções estruturadas, sumário lateral, FAQ, exercícios, referências e histórico de revisão
- **Preferências do usuário** salvas localmente: favorito, status de aprendizado e autoavaliação
- **Dark mode** com persistência de tema

## Stack

| Camada | Tecnologia |
|--------|------------|
| UI | React 19 + TypeScript |
| Build | Vite |
| Estilo | Tailwind CSS v4 |
| Roteamento | React Router DOM |
| Ícones | Lucide React |
| Componentes | Padrão shadcn/ui (Button, Card, Badge, Input…) |

Sem backend por enquanto. Conteúdo e preferências ficam no frontend.

## Começando

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + build de produção
npm run preview  # preview do build
npm run lint     # ESLint
```

## Rotas

| Rota | Página |
|------|--------|
| `/` | Home |
| `/busca` | Busca (aceita `?q=`, `?status=`, `?view=glossario`) |
| `/categorias?categoria=...` | Listagem por categoria |
| `/favoritos` | Conceitos favoritados |
| `/conceitos/:slug` | Página do conceito |
| `/glossario` | Redireciona para `/busca?view=glossario` |

## Estrutura do projeto

```txt
src/
  articles/          # Conteúdo local — um arquivo por conceito
    algorithm.ts
    variables.ts
    index.ts         # Agrega artigos, categorias e mapa por slug
  components/        # UI reutilizável
    ui/              # Primitivos (button, card, badge, input)
    ArticleHeader.tsx
    ArticleSection.tsx
    KnowledgeSearchField.tsx
    ...
  contexts/
    ThemeContext.tsx              # Tema claro/escuro
    UserArticleStateContext.tsx   # Favoritos, status, autoavaliação
  hooks/
    useArticlesWithPreferences.ts # Artigos + overrides do localStorage
  pages/             # Uma página por rota principal
  types/
    article.ts       # Tipos do modelo de conteúdo
  utils/             # Busca, categorias, glossário, helpers
public/              # Favicon e assets estáticos
```

### Separação conteúdo × interface

Cada conceito é um objeto `Article` exportado de um arquivo TypeScript. A UI apenas renderiza esses dados. Isso facilita migrar depois para API ou banco sem reescrever a interface.

## Modelo de um conceito

Todo artigo segue o tipo `Article` definido em `src/types/article.ts`:

```ts
{
  slug: "o-que-e-um-algoritmo",
  title: "O que é um Algoritmo?",
  shortAnswer: "Resumo curto abaixo do título.",
  category: "Fundamentos",
  tags: ["Fundamentos", "Lógica"],
  status: "Estudando",        // valor padrão
  isFavorite: true,           // valor padrão
  sections: [                 // seções dinâmicas com ícone
    { id: "introducao", title: "Introdução", icon: "file-text", content: ["..."] }
  ],
  blockHeadings: {            // títulos e ícones dos blocos fixos
    analogy: { title: "Analogia do mundo real", icon: "lightbulb" },
    practice: { title: "Na prática", icon: "code-2" },
    // ...
  },
  analogy: "...",
  practice: { simple, intermediate, real, bad, bestPractices },
  commonMistakes: ["..."],
  behindTheScenes: ["..."],
  relatedConcepts: [{ title, slug, description }],
  faq: [{ question, answer }],
  exercises: [{ level, title, prompt }],
  selfAssessment: ["..."],
  summary: "...",
  references: [{ type, title, url? }],
  revisionHistory: [{ date: "2026-07-03", description: "..." }]
}
```

### Status de aprendizado

`Não estudado` · `Estudando` · `Entendido` · `Revisar` · `Continuar`

### Ícones de seção

O campo `icon` usa nomes do [Lucide](https://lucide.dev) em kebab-case (`file-text`, `book-open`, `cpu`…). Novos ícones precisam ser registrados em `src/components/DynamicIcon.tsx`.

## Como adicionar um conceito

1. Crie `src/articles/meu-conceito.ts` exportando um `Article`
2. Importe e adicione o array em `src/articles/index.ts`:

```ts
import { meuConceitoArticle } from "./meu-conceito";

export const articles = [algorithmArticle, variablesArticle, meuConceitoArticle];
```

3. Acesse em `/conceitos/meu-slug`

A busca, categorias, glossário e stats passam a incluir o conceito automaticamente.

## Preferências do usuário (localStorage)

Chave: `yaspedia-article-preferences`

```json
{
  "favoriteOverrides": { "o-que-e-um-algoritmo": true },
  "statusOverrides": { "variaveis": "Entendido" },
  "selfAssessmentChecked": {
    "o-que-e-um-algoritmo": ["Sei explicar o que é um algoritmo."]
  }
}
```

Os valores padrão vêm do arquivo do artigo (`isFavorite`, `status`). O usuário pode sobrescrevê-los na interface. Essa estrutura foi pensada para migrar depois para uma API com o mesmo formato.

## Layout

**Desktop:** grid com sidebar (navegação + categorias), toolbar (tema e favoritos) e área principal com scroll.

**Mobile:** header com menu hambúrguer.

**Cores:** conteúdo principal em branco; sidebar e header em cinza claro (`slate-50`). Destaque em rosa (`rose`).

## Próximos passos possíveis

- [ ] Backend/API para conteúdo e preferências
- [ ] Editor de conceitos
- [ ] Markdown nos parágrafos
- [ ] Highlight do item ativo no sumário lateral
- [ ] PWA / deploy

## Licença

Projeto pessoal — uso privado.
