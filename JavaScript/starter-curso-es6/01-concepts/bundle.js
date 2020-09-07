"use strict";

// REST
// Uma função que soma parâmetros 
function soma(a, b, c) {
  return a + b + c;
}

console.log(soma(1, 3, 4)); // Para cada parâmetro a mais, vou precisar modificar a função 
// Mas se eu quiser usar n parametros, posso usar rest.

function somaRest() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(somaRest(1, 3, 4));
