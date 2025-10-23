# Recuperação do backup do repositório

Este arquivo explica como recuperar o histórico anterior caso seja necessário.

Branch de backup:
- `backup-before-history-rewrite` (no remoto `origin`) contém todo o histórico antigo antes da reescrita.

Opções de recuperação

1) Restaurar todo o histórico antigo como `main` (substituir o main atual)

- Atenção: esta ação irá sobrescrever o `main` atual no remoto.

Passos:

```bash
# buscar atualizações do remoto
git fetch origin --prune

# criar uma branch local temporária a partir do backup
git checkout -b restore-backup origin/backup-before-history-rewrite

# forçar o push para origin/main (substitui o main remoto)
# USE COM CUIDADO
git push origin +restore-backup:main --force-with-lease
```

2) Restaurar apenas arquivos ou commits específicos do backup

- Para recuperar um arquivo específico do backup:

```bash
# buscar remoto
git fetch origin --prune

# obter o arquivo do backup
git checkout origin/backup-before-history-rewrite -- path/para/o/arquivo

# adicionar e commitar
git add path/para/o/arquivo
git commit -m "restore: recuperar arquivo X do backup"

git push origin main
```

- Para aplicar um commit específico do backup:

```bash
# criar branch temporária a partir do backup
git checkout -b tmp-backup origin/backup-before-history-rewrite

# use git log para achar o hash do commit desejado
git log --oneline

# volte para main atual e cherry-pick o commit
git checkout main
git cherry-pick <commit-hash>

# resolver conflitos se houver, depois:
git push origin main
```

3) Recomendações

- Antes de forçar qualquer alteração no remoto, confirme com a equipe.
- A branch `backup-before-history-rewrite` é o ponto de restauração seguro; não a apague até termos certeza.
- Se precisar, eu posso ajudar a recuperar commits ou preparar um PR com os arquivos restaurados.


---
Gerado por procedimento de manutenção — Bruno (automação) — 23/10/2025
