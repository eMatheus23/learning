// REST

const usuario = {
	nome: "Diego",
	idade: 23,
	empresa: "Rocketseat",
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);
