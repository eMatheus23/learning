"use strict";

// REST
function somaRest() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(somaRest(1, 3, 4)); // SPREAD

/* Enquanto o rest pega o resto de alguma desestruturação ou parâmetros,
o spread tem a funcao de propagar, de repassar as informação de um objeto ou 
array para outra estrutura de dados */

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr3);
