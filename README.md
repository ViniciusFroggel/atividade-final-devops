# Atividade Final - Automação com DevOps e IA Generativa

API Node.js com pipelines de CI/CD demonstrando **Deploy Gate**, **Canary Deploy** e **Rollback** via GitHub Actions.

## Pipelines

### 1. Deploy Gate
Garante que o deploy só acontece se **todos os testes passarem** e a **auditoria de segurança** for aprovada.

- Trigger: `push` ou `pull_request` na branch `main`
- Jobs: Testes Unitários → Auditoria de Segurança → Deploy (somente se ambos passarem)

### 2. Canary Deploy
Deploy gradual com roteamento progressivo de tráfego.

- Trigger: Manual (`workflow_dispatch`)
- Parâmetros: versão e percentual de tráfego (10%, 25% ou 50%)
- Jobs: Deploy Canary → Monitoramento → Promoção para 100%

### 3. Rollback
Reverte a produção para uma versão anterior com validação e registro de incidente.

- Trigger: Manual (`workflow_dispatch`)
- Parâmetros: versão alvo (SHA/tag) e motivo
- Jobs: Validação → Rollback → Registro de Incidente

## Stack

- Node.js 20 + Express
- Jest + Supertest (testes unitários)
- GitHub Actions (CI/CD)

## Rodar localmente

```bash
npm install
npm test
npm start
```
