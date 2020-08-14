/*
    5º exercício
    Dado o seguinte vetor de objetos:
    var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
    ];
    Escreva uma função que produza o seguinte resultado:
    O Diego possui as habilidades: Javascript, ReactJS, Redux
    O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
    Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e 
    para unir valores de um array com um separador utilize o join.
*/

// Iniciate the array
var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

// Return the "name" of the first object
// Return the habilities
// Print the results ina formated way
// Repeat until all objects are maped


for (let name of usuarios) {
    const { nome, habilidades } = name
    console.log(`O ${nome} possui as habilidades: ${habilidades.join(", ")}`);
}
