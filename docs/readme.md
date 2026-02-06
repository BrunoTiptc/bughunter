# BugHunter – Backend Containerizado & QA Raiz

## Visão Geral

Este projeto tem como objetivo construir **fundação sólida de backend e QA**, priorizando entendimento de comportamento do sistema antes de frameworks, UI ou automações complexas. A abordagem adotada é **QA raiz**, com foco em observação externa, contratos de API, controle de fluxo, tratamento de erros e saúde do serviço.

O backend é desenvolvido em **Python (Flask)**, containerizado com **Docker**, e validado por **testes de saúde e smoke tests**, servindo como base futura para automação, CI/CD e testes mais avançados.


## Backend (Flask)

### Tecnologias

* Python 3.11
* Flask
* Docker

### Responsabilidade do Backend

* Expor rotas HTTP como **contrato de comunicação**
* Implementar health check para validação de vida do serviço
* Servir como alvo real para testes QA externos

### Rotas Implementadas

#### `/` – Rota raiz

* Método: `GET`
* Objetivo: confirmação simples de que o serviço está respondendo
* Resposta:

```json
{ "message": "Backend Flask rodando com sucesso!" }
```

#### `/health` – Health Check

* Método: `GET`
* Objetivo: indicar que o serviço está **vivo e operacional**
* Uso: smoke tests, QA, CI/CD, monitoramento
* Resposta:

```json
{
  "status": "ok",
  "service": "bughunter-backend",
  "timestamp": "<UTC ISO8601>"
}
```

#### `/api/hello`

* Método: `GET`
* Objetivo: rota de teste simples para validação de API

#### `/api/echo`

* Método: `POST`
* Objetivo: refletir payload recebido (útil para testes de contrato e payload)

---

## Containerização (Docker)

### Objetivo

Garantir que o backend rode como **serviço isolado**, independente do ambiente local, permitindo testes realistas e base para CI/CD.

### Build da imagem

```bash
docker build -t bughunter-backend .
```

### Execução do container

```bash
docker run -p 3000:3000 bughunter-backend
```

### Configuração crítica

O backend é iniciado com:

```python
app.run(host="0.0.0.0", port=3000, debug=True)
```

Isso garante:

* Aceitação de conexões externas ao container
* Compatibilidade com mapeamento de portas Docker

---

## QA Raiz – Abordagem Adotada

### Princípios

* Testes **sem framework inicialmente**
* Uso de **JavaScript puro** para validar comportamento
* QA como observador externo (sem tocar no backend)
* Validação de:

  * status HTTP
  * respostas JSON
  * fluxos de sucesso e erro

### Tipos de Testes em Uso / Planejamento

* Smoke Test
* Health Check Test
* Testes de erro proposital
* Testes de contrato

Exemplo conceitual:

* Backend roda em container
* Teste JS executa `fetch` contra `/health`
* Resultado claro: PASSOU / FALHOU

---

## Estado Atual do Projeto

* Backend Flask funcional
* Container Docker criado e executando corretamente
* Rota `/health` validada via navegador
* Porta 3000 exposta corretamente
* Base pronta para testes QA automatizados

---

## Próximos Passos Planejados

* Implementar testes QA em JavaScript puro
* Criar testes de falha e cenários negativos
* Gerar relatório simples de execução de testes
* Integrar testes em pipeline de CI
* Evoluir para Docker Compose
* Introduzir frameworks de teste posteriormente (Jest, etc.)

---

## Filosofia do Projeto

Este projeto prioriza **fundamento sobre ferramenta**.

Antes de frameworks, há entendimento.
Antes de automação, há observação.
Antes de escala, há controle.

O objetivo é formar base sólida de engenharia de software, QA e backend, com visão de longo prazo.
