/* 2º exercício
A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):
const usuarios = [
 { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
 { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
2.1 Utilizando o map
Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
2.2 Utilizando o filter
Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
2.3 Utilizando o find
Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
2.4 Unindo operações
Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
no máximo 50 anos:
// Resultado:
[
 { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
]
*/

const usuarios = [
	{ nome: "Diego", idade: 23, empresa: "Rocketseat" },
	{ nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
	{ nome: "Lucas", idade: 30, empresa: "Facebook" },
];

// 2.1 map() - Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
const idades = usuarios.map((item) => {
	return item.idade;
});

console.log(idades);

// 2.2 Filter - Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat
// e com mais de 18 anos:
const filtro = usuarios.filter((item) => {
	return item.idade > 18 && item.empresa === "Rocketseat";
});

console.log(filtro);

// 2.3 Find - Crie uma variável que procura por um usuário que trabalhe na empresa Google
const find = usuarios.find((item) => {
	return item.empresa === "Google";
});

console.log(find);

// 2.4 Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
// no máximo 50 anos:
const newArr = usuarios.map((item) => {
    item.idade = item.idade * 2;
    return item;
});

const multi = newArr.filter((item) => {
    return item.idade < 50;
});

console.log(multi);
