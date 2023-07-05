# Cenario Teste Habitica
## Configurar tarefas
- O usuário deve poder adicionar tarefas na coluna "A Fazer". Para isso, ele deve poder clicar no botão onde tem um ícone de lápis e adicionar mais informações. Caso o cenário for positivo, carregará um modal avisando que a informação foi inserida com sucesso. Se não, haverá também um modal informando que ocorreu algum erro.
- Também é possível ter algum tipo de validação, caso a pessoa deixe o campo em branco e clique no botão de enviar mesmo assim, pode haver uma mensagem abaixo do campo informando que ele deve ser preenchido.
- Para os testes, podemos testar: 
    - Um POST da tarefa nova;
    - Mensagem do modal informando o sucesso do envio;
    - Mensagem do modal informando se o envio falhou;
    - Se o modal apareceu na tela para o usuário;
    - Se a validação apareceu para o usuário quando ele tentou enviar o campo vazio;

## Configurar Diárias
- O usuário poderá organizar as tarefas que realizará diariamente ou semanalmente. Para isso, o usuário deve poder inserir uma informação na coluna. Se tentou enviar o campo vazio, aparecerá uma validação de que ele terá que preenche-lo. O usuário poderá clicar no botão que tem o ícone de lápis para editar a frequência na semana em que a tarefa poderá ser realizada.
- Para os testes, podemos testar:
    - Um PUT para poder atualizar a frequência de uma tarefa que já foi incluida na coluna;
    - Um POST para saber se as informações estão sendo cadastradas na hora de clicar no botão de enviar;
    - A validação caso o campo seja enviado vazio;
 

