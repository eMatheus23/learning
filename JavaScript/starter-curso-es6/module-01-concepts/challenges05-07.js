//5.1 Rest
const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x);
console.log(y);

function soma(...params) {
	return params.reduce((total, next) => total + next);
}

console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));

//5.2 Spread
const usuario = {
	nome: "Diego",
	idade: 23,
	endereco: {
		cidade: "Rio do Sul",
		uf: "SC",
		pais: "Brasil",
	},
};

const usuario2 = { ...usuario, nome: "Gabriel" };
console.log(usuario2);

const usuario3 = { ...usuario, nome: "Lontra" };
console.log(usuario3);


// 6
const usuario6 = 'Diego';
const idade = 23;

console.log(`O usuário ${usuario6} possui ${idade} anos`);

// 7
const nome7 = 'Diego';
const idade7 = 23;
const usuario7 = {
 nome7,
 idade7,
 cidade: 'Rio do Sul',
};


/*
5º Exercício
Utilizando o operador de rest/spread (...) realize as seguintes operações:
5.1 Rest
A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
posição do vetor e outra variável y que recebe todo restante dos dados.
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]
Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:
// function soma...
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3
5.2 Spread
A partir do objeto e utilizando o operador spread:
const usuario = {
 nome: 'Diego',
 idade: 23,
 endereco: {
 cidade: 'Rio do Sul',
 uf: 'SC',
 pais: 'Brasil',
 }
};
Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.


6º Exercício
Converta o seguinte trecho de código utilizando Template Literals:
const usuario = 'Diego';
const idade = 23;
console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
7º exercício
Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:
const nome = 'Diego';
const idade = 23;
const usuario = {
 nome: nome,
 idade: idade,
 cidade: 'Rio do Sul',
};


*/
