// Operadores de comparação
/* 
  == igual
  === estritamente igual
  -*-
  != diferente
  !== estritamente diferente
*/
console.log(21 === 20);

const idade = 20;
const estaLiberadoNumber = idade === 20;
console.log(estaLiberadoNumber);

console.log("Ana" !== "Anna");
console.log("Ana" !== "Ana");
const nomeDaGerente = "Gi";
const nomePassado = "Lis";

const estaLiberadoString = nomeDaGerente !== nomePassado;
console.log(estaLiberadoString);


console.log(21 > 21);
console.log(21 < 21);
console.log(21 === 21);
console.log(21 >= 21);
console.log(21 <= 21);

const comprarPao = false;
const comprarCafe = false;

const resultadoE = comprarPao && comprarCafe;
console.log("Satisfez o pedido? "+ resultadoE);

const resultadoOu = comprarPao || comprarCafe;
console.log("Satisfez o pedido? "+ resultadoOu);