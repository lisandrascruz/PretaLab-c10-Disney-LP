# Aula 04

# Estrutura de repetição

<p align="center">
  <img width="300" src="https://media.tenor.com/Oe-fMIIqnT8AAAAC/loop-infinite.gif">
</p>

## 🔁 for

`for` é utilizado quando temos definida a quantidade de iterações de repetições necessárias.


 Por parâmetro, <b>for</b> recebe três atributos: 

```javascript
for ([inicialização]; [condição]; [expressão final]) {
   declaração;
}
```
 - Inicialização: é uma expressão ou declaração de variáveis. É usada para iniciar o contador de variáveis.
 - Condição: é a expressão que será avaliada antes da iteração do loop. Enquanto a condição for atendida, o seu código será executado.
 - Expressão final: é validada ao final de cada iteração que acontece no laço FOR. Utilizada para incrementar ou atualizar a variável.
 - Declaração: é o trecho de código que será executado caso a condição seja verdadeira.
 
### Exemplo
```javascript
for (let i = 0; i < 9; i++) {
   console.log(i);
}
```

#### 🏋🏽 Bora praticar 
  Abra o Visual Studio 

  <details>
    <summary> <b>Pratica:</b> Escreva um código JavaScript para exibir os números de 1 até 1000 na tela.</summary>

```javascript
for (let i = 0; i <= 1000; i++) {
    console.log(i);
}
```
  </details>
  
## 🔁 while

`while` cria um laço que executa um bloco de comando especifico enquanto a condição de teste for avaliada como verdadeira. A condição é avaliada antes da execução do bloco.

```javascript
while (condicao){
  declaracao;
}
```

### Exemplo 

Vamos declarar uma variável e iniciá-la em 0 para, em seguida, usar o `while` e passar a instrução que, enquanto nossa variável for menor que 11, a multiplicaremos por 5 (resultando na tabuada do 5).

```javascript
let i = 0;

while(i<11){
  console.log(`${i} x 5 = ${i*5}`)
  i++
}
 ```

 #### 🏋🏽 Bora praticar 
  Abra o Visual Studio 

 <details>  
 <summary><b>Pratica: </b>  Faça um programa, utilizando while, que mostre na tela de 0 até N, em que N é o limite inserido pelo usuário.</summary>
 
 ```javascript
let n = 200;

while(i < n){
  console.log(i)
  i++
}
```
</details>

---
### Pratica

1. Faça um algoritmo que apresente o quadrado de cada um dos número entre 1 a 100.

2. Mostre todos os números pares existentes de 1 até 100;
