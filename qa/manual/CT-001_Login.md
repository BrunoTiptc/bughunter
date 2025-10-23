# 🧾 CT-001 – Login com Credenciais Válidas

## 🧠 Identificação
**ID:** CT-001  
**Título:** Verificar login com credenciais válidas  
**Módulo:** Autenticação  
**Prioridade:** Alta  
**Tipo de teste:** Funcional / Manual  
**Autor:** Bruno  
**Data:** 2025-10-14  

---

## 🎯 Objetivo
Validar se o sistema permite o acesso do usuário quando informadas credenciais válidas.

---

## ⚙️ Pré-Requisitos
- Ambiente QA configurado e rodando (`Flask` backend + `React` frontend).  
- Usuário de teste cadastrado:
  - **Usuário:** bruno@test.com  
  - **Senha:** 123456  
- Navegador compatível (Chrome / Edge).  

---

## 🔢 Passos de Execução

| Passo | Ação | Resultado Esperado |
|:------|:------|:-------------------|
| 1 | Acessar a URL de login do sistema. | Página de login é exibida corretamente. |
| 2 | Informar o e-mail válido (`bruno@test.com`). | Campo aceita o valor digitado. |
| 3 | Informar a senha correta (`123456`). | Campo aceita o valor digitado. |
| 4 | Clicar no botão **"Entrar"**. | O sistema processa a requisição. |
| 5 | Verificar redirecionamento para o **Dashboard**. | Usuário é autenticado e mensagem "Bem-vindo, Bruno!" aparece. |

---

## ✅ Resultado Esperado
O login deve ser realizado com sucesso e o usuário deve ser redirecionado para a página principal (dashboard) com saudação personalizada.

---

## 🧩 Resultado Obtido
> _(Preencher após execução do teste)_

---

## 📎 Evidências
> _(Prints, logs ou gravações podem ser anexadas aqui após o teste manual ou automatizado)_

---

## 💬 Observações
- Teste válido tanto para execução manual quanto para automação futura (PyTest / Cypress).  
- Caso o login falhe, registrar bug no Jira com os detalhes do erro.

---

> “Testar é antecipar o erro — não reagir a ele.”
