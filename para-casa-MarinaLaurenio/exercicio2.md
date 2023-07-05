# Exercício de Casa 🏠 

## 1. Funcionalidade: Configurar uma tarefa

Cenário 1: Deve adicionar uma nova tarefa com sucesso
- Dado que o usuário está logado na conta da hibitica
- Adiciona uma tarefa com um título "Exemplo"
- A tarefa com o título "Exemplo" deve ser criada com sucesso 
- A tarefa aparece na lista de tarefas ativas

Cenário 2: Tentar criar uma tarefa sem título
- Dado que o usuário está logado na conta da hibitica
- Ao tentar criar uma tarefa sem inserir um título
- A tarefa não é criada 

Cenário 3: Deve excluir uma tarefa da lista
- Dado que o usuário está logado na conta da hibitica
- Dado que uma tarefa já tenha sido adicionada com sucesso na lista
- Ao clicar na opção de "Deletar", na tarefa desejada
- Deve aparecer um alerta para confirmar o delete
- A tarefa deve ter desaparecido da lista de tarefas ativas


## 2. Funcionalidade: Configurar hábitos

Cenário 1: Deve adicionar um "bom-habito a um card hábito"
- Dado que o usuário está logado na conta da hibitica
- Dado que um card hábito exista
- Habilita-se o botão "bom-hábito"
- Aparece o contador "bom-habito" no card

Cenário 2: Deve aumentar o contador "bom hábito" com ele habilitado 
- Dado que o usuário está logado na conta da hibitica
- Dado que um card hábito exista
- Dado que o contador "bom hábito" esteja habilitado
- Pode-se clicar no botão "+"
- É adicionado "+1" ao contador

Cenário 3: Aumentar o contador "bom hábito" com ele desabilitado
- Dado que o usuário está logado na conta da hibitica
- Dado que um card hábito exista
- Dado que o contador "bom hábito" esteja desabilitado
- Ao clicar no botão "+" o contador permanece zerado 




    
