// REST

function somaRest(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(somaRest(1, 3, 4));

// SPREAD
/* Enquanto o rest pega o resto de alguma desestruturação ou parâmetros,
o spread tem a funcao de propagar, de repassar as informação de um objeto ou 
array para outra estrutura de dados */

const usuario1 = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat',
};

const usuario2 = { ...usuario1, nome: 'Gabriel' };

console.log(usuario2);