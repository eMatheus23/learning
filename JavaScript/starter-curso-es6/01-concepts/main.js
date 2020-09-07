const nome = "Diego";
const idade = 23;

// Caso queira passar variáveis para dentro de um objeto ou array
// era necessário usar a seguinte sintaxe:
const usuario = {
    nome: nome,
    idade: idade,
    empresa: 'Rocketseat',
};

console.log(usuario);

// Porém, com o ES6, posso usar uma sintaxe mais curta:

const usuarioShort = {
    nome, // Não preciso repetir
    idade,
    empresa: 'Rocketseat',
};

console.log(usuarioShort);