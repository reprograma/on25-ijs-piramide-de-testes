const prompt = require('prompt-sync')({sigint: true});
const request = require ('supertest');
const apiUrl = "https://habitica.com";

//função criando um novo usuário
function criarUsuario(){
//coletar os dados
var nome = prompt ("Digite seu nome de Usuário: ");
var email = prompt ("Digite seu e-mail: ");
var senha = prompt ("Digite uma senha: ");
var confirmarSenha = prompt ("Confirme a senha, por favor: ");

// verificar se as senhas coincidem
if (senha !== confirmarSenha){
    console.log ("As senhas não são iguais, por favor, tente novamente");
     return false; // a função encerra sem criar o usuário
} else if (senha == confirmarSenha){

//objeto para armazenar os dados do usuario
 usuario ={
    nome: nome,
    email: email,
    senha: senha,
};


//imprimindo os dados do usuário
console.log("Obrigada, usuário criado com sucesso");
console.log(usuario);
return true


}
};
// rodando a função criar usuário
describe ("criarUsuario function", () => {
    test ('Deve criar o usuario com sucesso',()=>{
        const output = true;
        expect (criarUsuario()).toEqual(output);
       })
    });



// criando a função login 
function Login (){
    var nome1= 'Katia Kelly';
    var email1= 'katiakelly@gmail.com';
    var senha1= '123456';

    var user = prompt ("Digite seu e-mail ou nome de Usuário: ");
    var password = prompt ("Digite uma senha: ");

    if ((user == nome1) && (password == senha1)){
        console.log("Login efetuado com sucesso, bem-vinda(o) "+ nome1)
        return true;
    } else if((user == email1) && (password == senha1)){
        console.log("Login efetuado com sucesso, bem-vinda(o) "+ nome1)
        return true;
    } else {
        console.log ("Verifique os dados, e tente novamente!")
        return false;
    }
};

// rodando a função de Login
describe ("Login function", () => {
    test ('Deve efetuar o login com sucesso',()=>{
        const output = true;
        expect (Login()).toEqual(output);
       })
    });

// funcao criando tarefas 

function Tarefas(){
var tarefa = prompt ("Hábito, Recompensa: ");

if ( tarefa == 'Hábito'){
    var titulo = prompt ("Adicionar um título ");
    var observacoes = prompt ("Adicionar notas ");
    var dificuldade = prompt ("Qual a dificuldade?: Trivial, fácil, médio, difícil ");
    var etiqueta = prompt ("Adicione etiquetas: Trabalho, Escola, Saúde, Exercício, Times ");
    var resetarContador = prompt ("Resetar o contador: Diariamente, Semanalmente ou Mensalmente? ");
    console.log(`Hábito: ${titulo}, notas: ${observacoes}, dificuldade: ${dificuldade}, etiqueta: ${etiqueta}, Contatador resetará: ${resetarContador}`);
} else if (tarefa == 'Recompensa'){
    var titulo = prompt ("Adicionar um título ");
    var observacoes = prompt ("Adicionar notas ");
    var custo = prompt ("Qual o valor? ");
    var etiqueta = prompt ("Adicione etiquetas: Trabalho, Escola, Saúde, Exercício, Times ");
    console.log(`Recompensa: ${titulo}, notas: ${observacoes}, custo: ${custo}, etiqueta: ${etiqueta}`);
} else {
    console.log('Não compreendi, vamos tentar novamente?');
}


}

it ("Deve retornar os dados de Tarefa", ()=>{
    Tarefas();
})
