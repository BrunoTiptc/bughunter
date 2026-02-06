# 🗂️ Plano de Tarefas – BugHunter (QA + Backend)

## ✅ Concluído
- [x] Criado backend em Python utilizando Flask
- [x] Estrutura inicial do backend organizada
- [x] Criação da rota raiz (/)
- [x] Implementação da rota de health check (/health)
- [x] Retorno de status, nome do serviço e timestamp no health
- [x] Backend containerizado com Docker
- [x] Build da imagem Docker do backend realizado com sucesso
- [x] Container do backend rodando localmente
- [x] Teste manual da rota /health via navegador / client HTTP
- [x] Contrato inicial de serviço definido (health endpoint)

## 🚧 Em andamento
- [ ] Rodar testes automatizados JS contra o backend em container
- [ ] Criar teste simples de health (api-health.test.js)
- [ ] Validar resposta PASS / FAIL do endpoint /health
- [ ] Simular falha proposital no backend para validar detecção do teste
- [ ] Organização da pasta de testes QA (fundação do projeto)

## 📝 Próximos passos (curto prazo)
- [ ] Rodar frontend localmente (npm start ou npm test)
- [ ] Criar primeiro teste simples com Playwright ou Cypress
- [ ] Testar carregamento da página e captura de erro/sucesso
- [ ] Commitar testes iniciais no repositório
- [ ] Criar pipeline simples de CI no GitHub Actions

## 🧪 Evolução dos testes QA
- [ ] Criar testes de erro para a API
- [ ] Criar relatório simples de execução de testes
- [ ] Integrar testes ao CI
- [ ] Rodar testes automaticamente a cada push
- [ ] Testar backend sempre via container Docker

## 🚀 Visão de longo prazo
- [ ] Docker Compose (frontend + backend + testes)
- [ ] Health check como gate de CI
- [ ] Testes como contrato de sistema
- [ ] Base sólida de QA (fundamento de mercado, não tutorial)
