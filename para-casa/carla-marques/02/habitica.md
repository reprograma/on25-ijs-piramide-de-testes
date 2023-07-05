# Exercício de Casa 🏠 

## Testes de Integração e Cenários/casos de teste

- Exercício 2 - Cenários e casos de teste:
Escreva os cenários de teste para o [habitica](https://habitica.com/static/home), considere pelo menos duas funcionalidades descritas no [Step 1 da Wiki do Habitica](https://habitica.fandom.com/wiki/Habitica_Wiki). Os cenários de teste não precisam ser completos, mas devem contemplar as principais fluxos da funcionalidade. 

**SENDO** eu, usuário do Habitica  
**POSSO** acessar o sistema  
**PARA** gerenciar tarefas, hábitos, diárias e recompensas.


**Cenário 1: Logando no sistema**   
DADO QUE tenho um cadastro válido no site da habitica  
QUANDO eu informo meu email e senha  
E clico no botão "Iniciar Sessão"   
ENTÃO sou redirecionada para página de dashboard do habitica.  

**Cenário 2: Cadastrando afazeres**  
DADO QUE estou logado no sistema  
QUANDO clico em "Adicionar um Afazer"  
E digito o título da tarefa   
ENTÃO o card aparece na coluna de Afazeres  

**Cenário 3: Definindo prazos para afazeres**  
DADO QUE estou logado no sistema   
QUANDO clico em editar de um afazer  
E defino o prazo para realizar a atividade  
ENTÃO o card aparece no tab de "Agendado"  

**Cenário 4: Cadastrando uma diária**  
DADO QUE estou logado no sistema   
QUANDO clico em "Adicionar uma Diária"  
E digito uma tarefa para os dias seguintes  
ENTÃO o card aparece na coluna de diárias  

**Cenário 5: Realizando uma diária**  
DADO QUE estou logado no sistema  
E estou no dia posterior ao cadastro da diária  
QUANDO habilito o checkbox do card que cadastrei  
ENTÃO o card fica cinza  
E subo de Nível  
E sou recompensada com Ouro, Experiência e itens   
E o card desaparece do tab de "Ativas"  

**Cenário 6: Não realizando uma diária**
DADO QUE estou logado no sistema  
E estou no dia posterior ao cadastro  
QUANDO não habilito o checkbox do card que cadastrei  
ENTÃO perco vida  

**Cenário 7: Cadastrando um hábito**  
DADO QUE tenho um cadastro válido no site da habitica  
E estou logado no sistema   
QUANDO clico em "Adicionar um Hábito"  
E digito uma hábito que gostaria de eliminar  
ENTÃO o card com a hábito aparece na coluna de hábitos  

**Cenário 8: Realizando um hábito**  
DADO QUE estou logado no sistema  
QUANDO clico no ícone de "+" do hábito que cadastrei  
ENTÃO o card da tarefa fica verde  
E sou recompensada com Ouro, Experiência e itens  

**Cenário 9: Não realizando um hábito**  
DADO QUE estou logado no sistema  
QUANDO clico no ícone de "-" do hábito que cadastrei  
ENTÃO o card da tarefa fica laranja  
E perco vida   

**Cenário 10: Cadastrando uma recompensa**  
DADO QUE estou logado no sistema   
QUANDO clico em "Adicionar uma Recompensa"  
E digito uma recompensa para mim mesmo  
E defino seu custo  
ENTÃO o card aparece na coluna de recompensa  

**Cenário 11: Pagando pela recompensa**  
DADO QUE estou logado no sistema  
QUANDO clico no icone da moeda com seu valor  
ENTÃO o card permanece na coluna de recompensa  
E eu perco Ouro.  

**Critérios de aceitação:**
1. O usuário precisa marcar a diária como concluído ou não.
2. Se o usuário não marcar como positivo ou negativo o hábito, não acontece nada.
3. Para pagar por recompensas precisa ter moedas disponíveis
