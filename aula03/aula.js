const lisFoiAoRestaurante = false;
const tinhasOpcoesVegetarianas = false;

// if(lisFoiAoRestaurante && tinhasOpcoesVegetarianas) {
//   console.log("Lis moh feliz!!")
// } else{
//   console.log("Lis moh chateadona :(")
// }

if(lisFoiAoRestaurante && tinhasOpcoesVegetarianas) {
  // console.log("Lis moh feliz!!");
} else if (lisFoiAoRestaurante && !tinhasOpcoesVegetarianas) {
  // console.log("Lis deu um feedback negativo");
} else {
  // console.log("Lis moh chateadona :(");
}

// 0 a 24 
const hora = -4;
if (hora < 12) {
  console.log('Bom dia!');
} else {
  console.log('Boa tarde!');
}