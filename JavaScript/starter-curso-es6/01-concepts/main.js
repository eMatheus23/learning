// REST

function somaRest(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(somaRest(1, 3, 4));

// SPREAD
/* Enquanto o rest pega o resto de alguma desestruturação ou parâmetros,
o spread tem a funcao de propagar, de repassar as informação de um objeto ou 
array para outra estrutura de dados */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2 ]

console.log(arr3);