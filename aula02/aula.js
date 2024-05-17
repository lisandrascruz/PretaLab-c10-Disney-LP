// ############# Armazenamento #############
/*
  Declarando variável em JS
  let: respeita o escopo e é recomendado o uso
*/

// aqui eu to aprendendo a criar variaveis
let nome = "Lisandra";
let cidadeNatal = 'Salvador';
let cidadeResidencial = `Recife`;
// let estaComFome = "aham" "sim" "iapois";
let estaComFome = true;
let esta_com_fome = true;
let FOMEDANADA = true; 
let pedido = null;


let idade = 29;
console.log(idade)

idade = 30;
console.log(idade)

/* 
  Declarando constante em JS
  const: o valor de um dado imultável
*/
const nome1 = "Lisandra";
const cidadeNatal1 = 'Salvador';
const cidadeResidencial1 = `Recife`;
const idade1 = 29;
const estaComFome1 = true;
const pedido1 = null;

const nomeCompleto = "Lisandra Sousa da Cruz"

console.log("Eu me chamo " + nomeCompleto + " e eu tenho " + idade1 + " anos")

/* 
Crie as seguintes constantes e em seguida use a criatividade para 
concatená-las, formando uma frase: primeiro nome; último nome; ano de nascimento; 
cor preferida; hobby; um sentimento.
*/
const primeiroNome = "Lisandra";
const ultimoNome = "Cruz";
const anoNascimento = 1994;
const corFavorita = "verde";
const hobby = "viajar";
const umSentimento = "amor";

const frase = "meu ultimo nome é " + ultimoNome + " e um hobby meu é " + hobby;

console.log(frase)
console.log("eu me chamo "+ primeiroNome + " minha cor favorita é " + corFavorita)