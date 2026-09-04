# Status do Blog TravelPartiu

**Blog:** https://www.blogtravelpartiu.com.br
**Última atualização:** 2026-09-04 (reconciliado com prints de e-mail/GSC do usuário)

## Contatos e Identidade do Blog

| Item | Valor |
|------|-------|
| E-mail blog | blogtravelpartiu@gmail.com |
| E-mail pessoal (antigo) | luigitech98@gmail.com |
| WhatsApp Business | +55 85 98563-8327 |
| CNPJ MEI | 59.100.218/0001-60 |

---

## ✅ Concluído

| Item | Detalhes |
|------|----------|
| Deploy (Vercel) | https://www.blogtravelpartiu.com.br |
| Domínio blogtravelpartiu.com.br | Ativo na Vercel |
| Google Analytics 4 | ID: G-6ZL756F4BQ — ativo no layout.js |
| Google Search Console | Verificado via GA, sitemap enviado |
| CJ Affiliate — conta | luigitech98@gmail.com — conta de Editor ativada em 2026-07-28 (e-mail de boas-vindas confirmado) |
| CJ — Perfil de rede | Descrição preenchida, ID espaço: 101801670 (IDs de publisher: 7662040 / 7986567) |
| CJ — Formulário fiscal | W-8BEN enviado em 2026-06-15 |
| CJ — Dados de pagamento | Configurados (⚠️ ver pendência abaixo — página trava ao verificar) |
| Booking.com Brazil (CJ) | Candidatura ativada em 2026-07-27 — e-mail de boas-vindas/parceria do Booking recebido em 2026-08-03 (indício de aprovação; **confirmar no painel CJ** se o programa aparece como "Joined" antes de gerar o link) |
| Rentcars | Cadastro completo — ID afiliado: 10861 |
| Rentcars — link ativo | lib/afiliados.js atualizado e no ar |
| Seguros Promo (ParceirosPromo) | Cadastro completo — pcrid: 14642, usuário: travelpartiu |
| Seguros Promo — link ativo | lib/afiliados.js atualizado e no ar |
| Awin — conta PF (antiga) | ID: 2966615, aprovada |
| Awin — 2FA | Ativado |
| Awin — dados fiscais PF | Preenchidos (Pessoa Física, Brasil) |
| Awin — dados bancários PF | Preenchidos, mínimo de pagamento: BRL 50 |
| Awin — conta MEI (nova) | ID: 3007627 — criada em 2026-07-27 com CNPJ 59.100.218/0001-60 |
| Awin MEI — contato atualizado | E-mail Principal: blogtravelpartiu@gmail.com, Celular: +5585985638327 (2026-08-07) |
| Awin MEI — login atualizado | E-mail login: blogtravelpartiu@gmail.com, Telefone: +5585985638327 (2026-08-07) |
| ParceirosPromo — contato atualizado | E-mail: blogtravelpartiu@gmail.com, Celular: +5585985638327 (2026-08-07) |
| Google AdSense | Conta criada (pub-6499647453255617), script no ar, revisão solicitada |

---

## ⏳ Aguardando aprovação externa

| Item | O que falta | Observação |
|------|-------------|------------|
| Booking.com — link afiliado | Confirmar no painel CJ (recebeu e-mail de boas-vindas em 03/08 — parece aprovado) → pegar deep link → inserir em lib/afiliados.js | Placeholder: `#AFILIADO-BOOKING` |
| Decolar BR — link afiliado | Candidatar conta MEI (ID 3007627) ao programa → gerar link → inserir em lib/afiliados.js | Placeholder: `#AFILIADO-DECOLAR` |
| Google AdSense — aprovação | Aguardar e-mail do Google (1-2 semanas) | Script já no ar |

---

## ⚠️ Pendente (ação manual necessária)

| Item | O que falta |
|------|-------------|
| Neon — dados bancários (ParceirosPromo) | ✅ Concluído em 2026-08-29 |
| Neon — dados bancários (Awin MEI) | ✅ Concluído em 2026-08-07 |
| CJ — e-mail de login | ⚠️ Pedido **já enviado em 07/08/2026** para publisher-support@cj.com — sem resposta há quase 1 mês. Ação: enviar follow-up (draft pronto em `emails-suporte-afiliados.md`) |
| CJ — dados de pagamento | Verificar se Neon está cadastrado; página de pagamento apresenta spinner infinito |
| Awin MEI — e-mail de login | Ainda pendente (luigicastro29@gmail.com → blogtravelpartiu@gmail.com) — self-service bloqueado, campo não editável. **Nota:** um registro anterior (2026-08-07) indicava concluído, mas isso se refere só ao e-mail de *contato/celular*; o e-mail de *login* segue sem confirmação de troca — contatar suporte Awin (draft pronto) |
| Rentcars — e-mail | Usuário em contato com representante diretamente via WhatsApp |
| **SEO — robots.txt/canonical apontavam para domínio errado** | ✅ Corrigido em 2026-09-04: `metadataBase`, `sitemap.js` e `robots.js` usavam `blogtravelpartiu.com.br` (sem www) e `blog.travelpartiu.com` (domínio morto), enquanto o site é servido em `www.blogtravelpartiu.com.br`. Google reportou no Search Console "Cópia sem página canônica selecionada pelo usuário" por causa disso — provável causa raiz do problema de indexação. Falta comitar/dar push e depois validar no GSC (pode levar dias para o Google reprocessar) |

---

## ❌ Bloqueado

| Programa | Motivo |
|----------|--------|
| MaxMilhas | Programa fechado — contato via marketing@maxmilhas.com.br |

---

## Placeholders restantes em lib/afiliados.js

| Placeholder | Substituir por |
|-------------|----------------|
| `#AFILIADO-BOOKING` | Link real do Booking.com (CJ) — após aprovação |
| `#AFILIADO-DECOLAR` | Link real da Decolar (Awin) — após aprovação |
| `#AFILIADO-MAXMILHAS` | Link real do MaxMilhas — programa fechado |
