/*
  Crie um programa para medir o comprimento da circunferência.
*/
// const pi = 3.14159265359;

const raio = 4;

// const area = pi * raio * raio;
const area = Math.PI * Math.pow(raio, 2);
console.log(
  "A área do circulo de raio " + raio + "cm é igual a " + area.toFixed(2)
);

const comprimento = 2 * Math.PI * raio;
console.log(
  "A circunferencia do circulo de raio " + raio + "cm é igual a " + comprimento.toFixed(2)
);
