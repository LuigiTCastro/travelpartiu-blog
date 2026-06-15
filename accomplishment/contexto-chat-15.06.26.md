# Contexto do Projeto — Blog TravelPartiu
> Use este arquivo para iniciar uma nova conversa com o Claude com todo o contexto necessário.

---

## O que é este projeto

Blog de viagens chamado **Blog TravelPartiu**, construído em **Next.js (App Router)** com Tailwind CSS v4. O objetivo é monetizar via afiliados (Booking, Decolar, etc.) e Google AdSense.

**Repositório:** C:\TravelPartiu\System\blog  
**Branch:** main  
**Deploy:** https://travelpartiu-blog.vercel.app (Vercel, conectado ao GitHub)  
**Domínio futuro:** blog.travelpartiu.com (pendente configuração DNS)

---

## Stack técnica

- **Next.js** App Router, geração estática
- **Tailwind CSS v4** (`@import "tailwindcss"` + `@theme` no globals.css)
- **Posts em Markdown** com frontmatter via `gray-matter`
- **Fonte:** Inter (Google Fonts via next/font)
- Sem banco de dados — tudo em arquivos `.md` na pasta `posts/`

---

## Estrutura de arquivos importantes

```
app/
  layout.js         — metadata, Google Analytics, Header/Footer
  page.js           — Home: Roteiros em Destaque + Posts Recentes
  blog/[slug]/      — página de post individual
  categoria/[cat]/  — listagem por categoria
lib/
  posts.js          — getAllPosts(), getPostsDestaque(), getCategories()
  afiliados.js      — links de afiliados (TODOS ainda são placeholders)
components/
  PostCard.js, Header.js, Footer.js, AdSlot.js, AfiliadoCard.js
posts/              — arquivos .md dos artigos
accomplishment/
  status.md         — documento de status de cadastros e monetização
```

---

## Lógica editorial

- **Roteiros em Destaque** (home, scroll horizontal): posts com `destaque: true` no frontmatter
- **Posts Recentes** (home, grid): TODOS os posts em ordem cronológica (os 6 mais recentes)
- Ambas as seções podem mostrar o mesmo post — isso é intencional

---

## Google Analytics

- **ID:** G-6ZL756F4BQ
- Inserido em `app/layout.js` via `<script>` no `<head>`
- Já verificado e coletando dados

---

## Google Search Console

- Verificado via tag do Google Analytics (mesma conta Google)
- Sitemap enviado: https://travelpartiu-blog.vercel.app/sitemap.xml

---

## Afiliados — Estado atual

Arquivo central: `lib/afiliados.js` — contém placeholders que precisam ser substituídos quando os programas forem aprovados.

| Programa | Status | Placeholder no código |
|----------|--------|-----------------------|
| Booking.com (via CJ Affiliate) | ⏳ Candidatura enviada em 2026-06-15 | `#AFILIADO-BOOKING` |
| Decolar (via Awin) | ❌ Não iniciado | `#AFILIADO-DECOLAR` |
| Seguros Promo | ❌ Não iniciado | `#AFILIADO-SEGURO` |
| MaxMilhas | ❌ Não iniciado | `#AFILIADO-MAXMILHAS` |
| Rentcars | ❌ Não iniciado | `#AFILIADO-RENTCARS` |

### CJ Affiliate (Booking.com)
- **Conta:** luigitech98@gmail.com
- **Espaço promocional:** Blog TravelPartiu, ID 101801670
- **W-8BEN:** enviado em 2026-06-15 por LUIGI TELES ALCANTARA DE CASTRO
- **Dados de pagamento:** configurados
- **Próximo passo:** aguardar e-mail de aprovação (5-10 dias úteis)

---

## Google AdSense

- **Status:** ❌ Não iniciado
- **Pré-requisito:** ter ~10-15 posts publicados antes de aplicar
- Código comentado em `app/layout.js` — quando aprovado, descomentar e substituir `ca-pub-XXXXXXXXXX` pelo Publisher ID real
- Componente `AdSlot.js` já existe mas está com `SHOW_ADS = false`

---

## Domínio (pendente)

Para ativar `blog.travelpartiu.com` no Vercel, adicionar no DNS:
- **Tipo:** TXT
- **Nome:** `_vercel`  
- **Valor:** `vc-domain-verify=blog.travelpartiu.com,0fcf2b3800366c859e77`

Após o domínio ativar, atualizar em `app/layout.js`:
```js
metadataBase: new URL("https://blog.travelpartiu.com"),
```

---

## Próximos passos prioritários

1. **Aguardar aprovação Booking.com** → inserir link em `lib/afiliados.js`
2. **Cadastrar nos demais afiliados:** Decolar (Awin), Seguros Promo, MaxMilhas, Rentcars
3. **Configurar DNS** quando tiver acesso à hospedagem do domínio
4. **Escrever mais posts** (atual: 3 posts) → meta: 10-15 para aplicar ao AdSense
5. **Aplicar ao Google AdSense** após atingir volume de posts

---

## Informações do usuário (para cadastros)

- **Nome:** LUIGI TELES ALCANTARA DE CASTRO
- **E-mail:** luigitech98@gmail.com
- **Telefone:** (85) 98741-3692
- **Endereço:** Rua N, 11, Fortaleza, Ceará, CEP 60349-160

> ⚠️ CPF e dados bancários: o usuário preenche pessoalmente — nunca inserir por ele.
