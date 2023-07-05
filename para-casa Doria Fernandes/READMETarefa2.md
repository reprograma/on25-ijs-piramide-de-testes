# Exercício de Casa 🏠 

## Testes de Integração e Cenários/casos de teste

OBS: Eu tinha entendido muito errado a tarefa, segue tarefa correta:

Cenários de teste:

Teste de Cadastro:
- Inserir um nome de usuário
- Se o nome de usuário não conter entre 1 e 20 caracteres retornar erro
- Se o nome de usuário deve apenas conter letras de A a Z, números de 0 a 9, hifens ou underlines, não podendo ser incluso quaisquer termos inapropriados, senão retornar erro.
- Inserir e-mail
- Inserir Senha
- Inserir confirmar senha
- Se confirmar senha for diferente de senha, retornar erro
- Se confirmar senha foi igual a senha, efetuar cadastro com sucesso 

Teste de Login:

Cenário : Logando com um usuário ainda não cadastrado
- coloca o usuário ou e-mail
- coloca senha
- clica em login
- Caso não encontrado o nome de usuário ou e-mail, retornar mensagem de erro.

Cenário : Logando com um usuário existente
- coloca usuário ou e-mail
- coloca senha
- clica em login
- Se usuário ou e-mail localizados na base de cadastros e a senha coincidir, logar com sucesso
- Se usuário ou e-mail não localizados na base de cadastros e/ou a senha não coincidir, retornar erro

Teste de Tarefas
Cenário: Se selecionado Hábito
- ao clicar em botào cancelar, cancelar a criação
- Solicitar Título
- Solicitar observações
- Especificar se é um habito negativo ou positivo
- Nivelar a dificuldade
- Adicionar Etiquetas
- Informar quando resetar o contador
- Caso todo os dados estejam preenchidos, habilitar botão criar
- Ao clicar no botão criar, criar um hábito com os dados preenchidos
- Caso algum dado não tenha sido preenchido, não habilitar botão criar

Cenário: Se selecionado Recompensa
- ao clicar em botào cancelar, cancelar a criação
- Solicitar Título
- Solicitar observações
- Solciitar custo
- Adicionar Etiquetas
- Caso todo os dados estejam preenchidos, habilitar botão criar
- Ao clicar no botão criar, criar uma recompensa com os dados preenchidos
- Caso algum dado não tenha sido preenchido, não habilitar botão criar
