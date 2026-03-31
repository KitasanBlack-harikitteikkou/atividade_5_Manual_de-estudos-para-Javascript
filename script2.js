//ATIVIDADE 2
console.log("Esse foi escrito no arquivo JS");

//ATIVIDADE 3
/*{
    var usuario ="henrique";
}

console.log(usuario); 

{
    let idade = 17;
}

console.log(idade); 

{
    const VERSAO = 1.0.2;
}

console.log(VERSAO);
*/

//ATIVIDADE 4
const numero = 5

console.log(numero == "5") // true: compara apenas o valor
console.log(numero === "5") // false: compara valor e tipo (int vs string)
console.log(numero != "5") // false: os valores são iguais
console.log(numero !== "5") // true: os tipos são diferentes

//ATIVIDADE 5
if(numero > 3){
    console.log("O numero é maior que 3");
}

if(numero > 6){
    console.log("O numero é maior que 6");
}else{
    console.log("O numero é menor que 5");
}

switch(numero){
    case 5:
        console.log("O numero é 5");
}

//ATIVIDADE 6
for(var i = 0; i < 10; i++){
    console.log(i)
}
var valor = 1;
while(valor < 10 ){
    valor++;
    console.log(valor);
    
}

//ATIVIDADE 7
function ola(){
    console.log("Olá mundo");
}
ola();

function olaNome(nome){
    console.log("Olá, " + nome);
}
olaNome("Henrique");

function soma(a,b){
    return a + b;
}
let resultado = soma(5, 3);
console.log(resultado)

//ATIVIDADE 8

titulo = document.getElementById("titulo").textContent = "mudou!";
testeTitulo = document.querySelector(".testeTitulo").textContent = "classes alterada!";

var nomeUsuario = "victor"
input = document.getElementById("valor").value = nomeUsuario;

const checkbox = document.getElementById("check")

if(checkbox.checked){
    console.log("A caixa foi clicada")
}else{
    console.log("A caixa não foi clicada")
}

document.getElementById("azul").style.color = "blue";

div.classList.remove("teste")
div.classList.add("OutraClasse")

const botao = document.getElementById("botao")
botao.addEventListener("click", function(){
    alert("O mouse passou por cima do botão!");
});