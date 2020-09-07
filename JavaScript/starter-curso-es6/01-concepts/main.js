// REST

// Uma função que soma parâmetros 
function soma(a, b, c) {
    return a + b + c;
}

console.log(soma(1, 3, 4));
// Para cada parâmetro a mais, vou precisar modificar a função 
// Mas se eu quiser usar n parametros, posso usar rest.

function somaRest(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(somaRest(1, 3, 4));
