# Drafts de e-mail — Suporte de Afiliados

Enviar a partir de **blogtravelpartiu@gmail.com** (assim o novo endereço já fica no histórico).

---

## 1. CJ Affiliate — follow-up (login já pedido em 07/08, sem resposta) + verificar pagamento

> **Atualização:** o pedido de troca de e-mail já foi enviado em **07/08/2026** para publisher-support@cj.com
> (IDs 7662040 / 7986567, mesma solicitação). Sem resposta até agora (quase 1 mês) — isto é um **follow-up**, não um pedido novo.

**Para:** publisher-support@cj.com
**Assunto:** Follow-up: account login email update (sent 08/07) + payment method — IDs 7662040 / 7986567 / space 101801670

```
Hello CJ Publisher Support,

Following up on my request sent on August 7, 2026 (no reply received yet).

Publisher IDs: 7662040 / 7986567 (property/space ID 101801670)
Current login email: luigitech98@gmail.com
Requested login email: blogtravelpartiu@gmail.com
Company: TravelPartiu (MEI, Brazil — CNPJ 59.100.218/0001-60)

1) LOGIN EMAIL CHANGE — please confirm status of this update.

2) PAYMENT METHOD
The payment settings page does not finish loading for me (infinite
spinner), so I cannot confirm my payout details. Could you please
verify whether a valid bank account is registered for payouts and,
if not, tell me how to submit it? My bank is Neon (Brazil, BRL).

Thank you,
Luigi Castro — TravelPartiu
blogtravelpartiu@gmail.com
```

---

## 2. Awin — trocar e-mail de login da conta MEI

**Para:** publisherservice@awin.com  (cópia: brasil@awin.com)
**Assunto:** Alteração de e-mail de login — Publisher ID 3007627

```
Olá, equipe Awin,

Preciso alterar o e-mail de login da minha conta de publisher. A
alteração pelo self-service não está disponível (o campo não é
editável no meu painel).

Publisher ID: 3007627
Conta: MEI — CNPJ 59.100.218/0001-60
E-mail de login atual: luigicastro29@gmail.com
Novo e-mail de login desejado: blogtravelpartiu@gmail.com

O novo endereço é o contato oficial do negócio. Já atualizei o
e-mail principal e o celular de contato no painel; falta apenas o
e-mail de login/acesso.

Podem confirmar a alteração ou informar o procedimento?

Obrigado,
Luigi Castro — TravelPartiu
blogtravelpartiu@gmail.com / +55 85 98563-8327
```

---

## Status dos placeholders em `lib/afiliados.js`

| Placeholder | Depende de | Ação quando aprovar |
|---|---|---|
| `#AFILIADO-BOOKING` | Aprovação Booking.com via CJ | Pegar deep link do Booking no painel CJ → substituir |
| `#AFILIADO-DECOLAR` | Candidatar conta MEI (3007627) ao programa Decolar BR na Awin → aprovação | Gerar link Awin → substituir |
| `#AFILIADO-MAXMILHAS` | Programa fechado | Contato via marketing@maxmilhas.com.br (opcional) |
