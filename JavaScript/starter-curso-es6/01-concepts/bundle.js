"use strict";

var nome = "Diego";
var idade = 23; // Caso queira passar variáveis para dentro de um objeto ou array
// era necessário usar a seguinte sintaxe:

var usuario = {
  nome: nome,
  idade: idade,
  empresa: 'Rocketseat'
};
console.log(usuario); // Porém, com o ES6, posso usar uma sintaxe mais curta:

var usuarioShort = {
  nome: nome,
  // Não preciso repetir
  idade: idade,
  empresa: 'Rocketseat'
};
console.log(usuarioShort);
