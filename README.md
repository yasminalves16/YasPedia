# YasPedia

YasPedia é uma Base de Conhecimento Pessoal sobre desenvolvimento de software.

O projeto não é um curso, blog ou roadmap. A proposta é documentar conceitos com minhas próprias palavras, mantendo artigos pesquisáveis, organizados por categorias e conectados por links internos.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Componentes no estilo shadcn/ui

## Estrutura

```txt
src/
  articles/      Conteúdo local dos artigos
  components/    Componentes reutilizáveis da interface
  pages/         Páginas da aplicação
  types/         Tipos TypeScript compartilhados
  utils/         Funções auxiliares
```

Cada artigo é um objeto TypeScript exportado individualmente. A interface apenas renderiza esses dados, facilitando uma futura migração para API ou banco de dados.

## Rodando localmente

```bash
npm install
npm run dev
```
