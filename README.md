# 🐞 BugHunter — Projeto de QA e Inteligência Aumentada

> **BugHunter** é um projeto educacional e prático focado em **Qualidade de Software (QA)**, automação de testes e boas práticas de engenharia, usando **JavaScript**, **Node.js**, **containers (Docker)** e **pipelines CI/CD**.

Este repositório não é sobre "apenas codar", mas sobre **pensar como QA**, entender **fluxo**, **estado**, **eventos**, **erros** e **qualidade desde a base**.

---

## 🎯 Objetivo do Projeto

O objetivo do BugHunter é servir como um **laboratório de QA**, onde:

* Casos de teste são criados a partir do comportamento do sistema
* Erros são tratados como **eventos observáveis**
* Fluxos de sucesso e falha são claramente definidos
* Testes automatizados validam o sistema continuamente
* Ambientes são reproduzíveis (local, CI e futuro cloud)

Tudo isso com foco em **aprendizado real**, não superficial.

---

## 🧠 Conceitos-Chave Trabalhados

* Controle de fluxo
* Tratamento de erros
* Eventos e callbacks
* Estado da aplicação
* Testes automatizados (QA)
* Separação de responsabilidades (frontend / backend / testes)
* CI/CD
* Containers e orquestração

---

## 🧱 Arquitetura (Visão Geral)

A estrutura do projeto segue uma separação clara entre **aplicação**, **qualidade** e **infraestrutura**, alinhada com práticas modernas de QA.

```
BugHunter
├── frontend/                # Interface do usuário (React)
│   ├── src/
│   └── public/
│
├── backend/                 # API e regras de negócio
│   ├── src/
│   └── server.js
│
├── qa/                      # Camada de Qualidade (QA)
│   ├── tests/               # Casos de teste automatizados
│   ├── reports/             # Relatórios de execução
│   └── config/              # Configurações de testes
│
├── docker/                  # Infraestrutura com containers
│   ├── frontend.Dockerfile
│   ├── backend.Dockerfile
│   └── docker-compose.yml
│
├──docs/                       #documentação do projeto
│   ├── selenium/
│   |   └── test_login.py
│   ├── test-cases/
│   │   └──TCRF001_Login.md
│   └── requisitos/
│       └── login.md
│
├── k8s/                     # Orquestração (Kubernetes - básico)
│   ├── frontend-deployment.yml
│   ├── backend-deployment.yml
│   └── services.yml
│
├── .github/
│   └── workflows/           # Pipelines CI/CD (GitHub Actions)
│
└── README.md
```

📌 **Importante:** a pasta `qa/` não depende diretamente do código da aplicação. Ela observa o sistema de fora, como um QA deve fazer.

---

## 🧪 Estratégia de Testes (QA)

Os testes são pensados como:

* 🔍 Observadores de eventos
* ⚠️ Detectores de falha
* ✅ Validadores de sucesso

Exemplos de cenários testados:

* Formulário com dados inválidos
* Campos vazios ou nulos
* Respostas inesperadas da API
* Fluxo correto de sucesso
* Mensagens de erro exibidas corretamente

---

## ⚙️ Tecnologias Utilizadas

* JavaScript (base do projeto)
* Node.js
* React
* Playwright / Cypress (automação de testes)
* Docker & Docker Compose
* GitHub Actions (CI/CD)
* Kubernetes (conceito e prática inicial)

---

## 🚀 Filosofia do Projeto

> **A máquina executa. O humano decide.**

O BugHunter segue o conceito de **Inteligência Aumentada**:

* O ser humano mantém o controle
* A IA auxilia no raciocínio
* QA garante qualidade e confiança
* Automação reduz erro humano

Não é sobre velocidade. É sobre **fazer do jeito certo**.

---

## 📌 Status do Projeto

🚧 Em reconstrução intencional

Os testes, pipelines e ambientes estão sendo **refeitos do zero**, com foco em:

* clareza
* organização
* aprendizado sólido

---

## 🤝 Autor

**Bruno**
Engenharia de Software • QA • Automação • Visão de Futuro

---

> *"Qualidade não é um passo final. É o caminho inteiro."*


“Construi um projeto sozinho, organizando modos de execução, backend local e em container, testes de saúde da API, scripts de inicialização e automação básica, entendendo conflitos reais de porta, proxy e ambiente.”