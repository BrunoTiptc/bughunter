
# 🐞 BugHunter — Projeto de QA e Inteligência Aumentada

> **BugHunter** é um laboratório educacional e prático de **Qualidade de Software (QA)**, automação de testes e engenharia moderna, usando **JavaScript**, **Node.js**, **Docker** e **CI/CD**.

---

## 🎯 Objetivo

Transformar o BugHunter em um ambiente de aprendizado real de QA, onde:

- 🧪 Casos de teste nascem do comportamento do sistema
- 👀 Erros são eventos observáveis
- 🔄 Fluxos de sucesso e falha são claros
- 🤖 Testes automatizados validam continuamente
- 🛠️ Ambientes são reproduzíveis (local, CI, cloud)

---

## 🧠 Conceitos-Chave

- Controle de fluxo
- Tratamento de erros
- Eventos e callbacks
- Estado da aplicação
- Testes automatizados (QA)
- Separação de responsabilidades (frontend / backend / testes)
- CI/CD
- Containers e orquestração

---

## 🧱 Arquitetura

```
bughunter/
├── backend/         # API Flask (Python)
├── frontend/        # React
├── qa-tests/        # Testes automatizados (Node.js)
├── tests/           # Testes UI (Selenium)
├── docs/            # Documentação
├── .github/         # Workflows CI/CD
├── docker-compose.yml
└── README.md
```

- **qa-tests/**: Valida o sistema externamente, simulando QA real (caixa preta).

---

## 🔗 Gerenciamento de Testes

- Organização e rastreabilidade no Jira:  
	[Jira Board](https://brunoptc.atlassian.net)
- Exemplos:
	- SCRUM-2 → Health Check da API
	- SCRUM-3 → Validação de rotas inválidas

Os testes automatizados seguem esses cenários, garantindo alinhamento entre planejamento e execução.

---

## 💼 Experiência Aplicada

- Execução de backend local e em container (Docker)
- Testes de saúde da API
- Automação de testes (Node.js, Selenium)
- Scripts de execução
- CI com GitHub Actions
- Diagnóstico de problemas reais (portas, proxy, ambiente)
- Organização de testes via Jira (Scrum)

---

## 🧪 Estratégia de Testes

- 🔍 Observadores de eventos
- ⚠️ Detectores de falha
- ✅ Validadores de sucesso

**Cenários testados:**
- Formulários inválidos
- Campos vazios/nulos
- Respostas inesperadas da API
- Fluxo de sucesso
- Mensagens de erro

---

## ⚙️ Tecnologias

- JavaScript, Node.js, React
- Playwright / Cypress (planejado)
- Docker & Docker Compose
- GitHub Actions (CI/CD)
- Kubernetes (conceito/prática inicial)

---

## 🚀 Filosofia

> **A máquina executa. O humano decide.**

- Inteligência Aumentada:  
	Humano no controle, IA auxilia, QA garante qualidade, automação reduz erros.

---

## 📌 Status

🚧 **Em reconstrução intencional**  
Refazendo testes, pipelines e ambientes com foco em clareza, organização e aprendizado sólido.

---

## 🤝 Autor

**Bruno**  
Engenharia de Software • QA • Automação • Visão de Futuro

---

> *"Qualidade não é um passo final. É o caminho inteiro."*

---

“Construi um projeto sozinho, organizando modos de execução, backend local e em container, testes de saúde da API, scripts de inicialização e automação básica, entendendo conflitos reais de porta, proxy e ambiente.”