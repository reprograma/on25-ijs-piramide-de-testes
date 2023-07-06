## Funcionalidade: Configurar uma tarefa

Cenário 1: Deve adicionar uma nova tarefa
- Dado que o usuário acessa o site https://habitica.fandom.com/wiki/Habitica_Wiki
- Dado que deve efetuar o Login
- Quando estiver logado deve adicionar uma tarefa com um título Exemplo
- Quando a tarefa for criada com sucesso 
- Então deve aparecer na lista de tarefas ativas

Cenário 2: Tentativa de criação de uma tarefa sem título
- Dado que o usuário esteja logado na conta da habitica
- Quando tentar criar uma tarefa sem inserir um título
- Então a tarefa não será criada 

Cenário 3: Excluindo a tarefa da lista
- Dado que o usuário esteja logado na conta da habitica
- Dado que já tenha adicionado uma tarefa com sucesso
- Quando clicar para deletar a opção desejada
- Então ira aparecer um popup de confirmação da exclusão
- Então após confirmar a tarefa irá desaparecer da lista de tarefas ativas


## Funcionalidade: Configurar hábitos

Cenário 1: Adicionando um "bom-habito a um card hábito"
- Dado que o usuário esteja logado na conta da habitica
- E tenha um card hábito
- Quando habilitar o botão bom-hábito
- Então irá aparecer o contador bom-habito no card

Cenário 2: Irá aumentar o contador bom hábito habilitado 
- Dado que o usuário esteja logado na conta da habitica
- E exista o card hábito
- Dado que o contador esteja habilitado
- Quando clicar no botão +
- Então será adicionado +1 ao contador

Cenário 3: Irá aumentar o contado bom hábito desabilitado
- Dado que o usuário esteja logado na conta da habitica
- E exista o card hábito
- Dado que o contador esteja habilitado
- Quando clicar no botão + 
- Então clicando no botão + o contador irá permacer zerado 