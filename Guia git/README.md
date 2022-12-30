# Básico
## git init
- Cria um repositório

## git add . ou git add <file>
- Adiciona todos os arquivos da pasta no "Stage Area"

## git commit -m "nome do commit"
- Salva todos os arquivos do "Stage Area" no "Local Repository"

## git log
- Mostra os commits realizados no projeto

## git status
- Mostra as modificações feitas desde o último commit

## git rm <file>
- Remove o arquivo commitado

## git mv <nomeantigo> <nomenovo>
- Renomear o arquivo é o mesmo que mover de lugar

## git mv <file> caminho/<file>
- Movendo entre pastas

# Afundo
## git restore <file>
- Voltar alterações do working

## git restore --staged <file>
- Voltar alterações do "Staged Area"

## git commit --amend -m "nova mensagem"
- O git commit --amend também serve para modificar o conteúdo do commit, podendo servir para remover arquivos ou adicionar novos arquivos

## git checkout <HASH> -- <file>
- HASH é o nome do commit em hash. Trás de volta o arquivo de um commit passado

## git clean -n
- Mostra os arquivos que serão removidos, que não estão no "Stage Area", ou seja, não foram rastreados ainda

## git clean -f
- Remove arquivos que não estão no "Stage Area", ou seja, não foram rastreados ainda

## git revert HEAD~<número> ou git revert <HASH>
- Volta um commit já passado. Pega um ponto antigo da história, revertê-lo e adicionar um novo ponto.

## git commit -a ou git commit -am "mensagem do commit"
- Quando não há arquivos novos apenas modificações, podemos pular o add.

## git diff
- Mostra os detalhes das últimas modificações. Diferença do repositório para o "Working"

## git diff --staged
- Mostra os detalhes das últimas modificações. Diferença do repositório para o "Stage Area"

## git show <HASH> ou git show <HASH> --color-words
- Mostra as alterações que ocorreram em algum ponto do projeto

## git show <HASH> -- <pasta>/<pasta>/*
- Mostra as alterações que ocorreram em algum ponto do projeto dentro de uma pasta



# github
## git branch -M main
- Trocar o nome de master para main
## git remote add origin git@github.com:LucasHARosa/Development_guide.git
- Criando a conexão do github com minha máquina através do ssh
## git push -u origin main 
- Enviando o commit da máquina para o github pela primeira vez
## git push
- Quando já existe a branch main
## git pull
- Puxando alterações do repositório para a máquina 
