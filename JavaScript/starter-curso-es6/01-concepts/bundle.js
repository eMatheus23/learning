"use strict";

// Template literals => Uma forma de incluir variáveis dentro de strings
// a partir do ES6
var nome = "Diego";
var idade = 23; // console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos.');

console.log("Meu nome \xE9 ".concat(nome, " e tenho ").concat(idade, " anos.")); // Preciso usar crase e não aspas.
