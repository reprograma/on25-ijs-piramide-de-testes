##       EXERCÍCIO RESOLVIDO       ##
## Testes de Integração e Cenários/casos de teste

## Cenário de teste 1 - Configurar tarefas

# Caso de teste - inserir tarefa na To Do List
* Objetivo: Inserir uma tarefa na lista de afazeres.
* Passos: Antes de colocar a mão na prática, vamos primeiro decidir qual tarefa será adicionada. Após ter escolhido a tarefa, abrir a To Do List e conferir se esta tarefa já foi adicionada previamente (para evitar duplicidade), caso não esteja, clicar no botão "Adicionar tarefa" e digitar a tarefa desejada, depois disso, apertar o enter ou salvar.
* Resultado esperado: a tarefa adicionada encontra-se na coluna "A fazer" da To Do List. 
* Possiveis erros: o botão "Adicionar tarefa" não permite digitar na lista; e/ou não foi possível salvar a tarefa nova, e assim, a coluna "A fazer" continua em branco, isto pode acontecer por instabilidade na conexão. Como prosseguir: pressionar F5 e tentar novamente.

# Caso de teste - editar tarefa já adicionada na To Do List
* Objetivo: editar tarefas já previamente adicionadas na lista.
* Passos: Com a lista de afazeres aberta, clicar no lápis ao lado da tarefa escolhida para ser editada. Após clicar, o campo de digitação da tarefa será disponibilizado para edição, podendo alterar a descrição da tarefa, adicionar listas de verificação e/ou incluir datas de até quando a tarefa deve ser realizada. Após digitar as modificações, apertar o botão de enter ou salvar.
* Resultado esperado: a tarefa terá sido atualizada corretamente.
* Possíveis erros: ao clicar no ícone do lápis, não é possibilitado a edição; a alteração não foi salva. Como prosseguir: pressionar F5 e tentar novamente.


------------
## Cenário de teste 2 - Configurar hábitos

# Caso de teste - adicionar tipos diferentes recompensas (atividades e gulosemas)
* Objetivo: Verificar se é possível adicionar mais de um tipo de recompensa como motivação.
* Passos: Abra a lista com as tarefas, clicar no botão "Adicionar recompensa", digitar a primeira recompensa de "atividades divertidas e, em seguida, digitar a recompensa de guloseimas. Após digitadas, aperte o botão de enter ou salvar.
* Resultado esperado: as duas recompensas estarão aparecendo no mesmo campo na coluna Recompensas.
* Possíveis erros: o botão "Adicionar recompensa" não permite digitar na lista; as recompensas não foram salvas ao apertar o botão de enter/salvar. Como prosseguir: pressionar F5 e tentar novamente.