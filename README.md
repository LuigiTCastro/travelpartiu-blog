# Blog TravelPartiu

Blog de viagem do TravelPartiu — roteiros, dicas e planejamento.

## Rodar localmente

```bash
cd C:\TravelPartiu\System\blog
npm install
npm run dev
```

Acesse `http://localhost:3000`.

> **Importante:** Nunca rode `npm install` ou `npm run dev` dentro de `H:\` (Google Drive). Use sempre `C:\TravelPartiu\System\blog`.

## Criar um novo post

1. Crie um arquivo `.md` em `/posts` com o frontmatter:

```yaml
---
titulo: "Título do post"
slug: "url-do-post"
descricao: "Meta description (máx 160 caracteres)"
categoria: "Roteiros" | "Dicas de viagem" | "Destinos" | "Planejamento" | "Viagem econômica"
destino: "Cidade, UF"
data: "2026-06-04"
imagem_capa: "/images/nome-da-imagem.jpg"
tempo_leitura: "8 min"
---
```

2. Escreva o conteúdo em Markdown abaixo do frontmatter.
3. Adicione a imagem de capa em `/public/images/`.

## Ativar o AdSense

1. Abra `app/layout.js`.
2. Descomente o bloco `<script>` do AdSense.
3. Substitua `ca-pub-XXXXXXXXXX` pelo seu ID real.

## Atualizar links de afiliados

Os links de afiliados são usados diretamente nos posts (.md). Para atualizar:

- **Booking:** `https://www.booking.com/index.html?aid=XXXXXXX`
- **Decolar:** Link do programa de afiliados Decolar
- **Airbnb:** `https://www.airbnb.com.br/r/XXXXXXX`
- **Amazon BR:** `https://amzn.to/XXXXXXX`

Substitua `XXXXXXX` pelos IDs reais após cadastro nos programas.

## Deploy no Vercel

```bash
npm run build
vercel --prod
```

## Estrutura de pastas

```
blog/
├── app/                  → Páginas (App Router)
│   ├── layout.js         → Layout global (header, footer, AdSense)
│   ├── page.js           → Home do blog
│   ├── blog/
│   │   ├── page.js       → Listagem de posts
│   │   └── [slug]/page.js → Post individual
│   ├── categoria/
│   │   └── [categoria]/page.js → Posts por categoria
│   └── templates/page.js → Página de templates (CTA)
├── components/           → Componentes reutilizáveis
├── posts/                → Arquivos .md dos artigos
├── lib/posts.js          → Funções para ler e processar os .md
├── public/images/        → Imagens dos posts
└── vercel.json           → Configuração de deploy
```
