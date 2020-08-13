/*
    3º exercício
    Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
    e retorna um booleano true/false caso exista ou não.
    function temHabilidade(skills) {
    // código aqui
    }
    var skills = ["Javascript", "ReactJS", "React Native"];
    temHabilidade(skills); // true ou false
    Dica: para verificar se um vetor contém um valor, utilize o método indexOf
*/ 

function temHabilidade(array, element) {
    // Use indexOf() to search for the element
    const result = array.indexOf(element);
    // If result of the indexOf is different from -1, the element is present
    if (result != -1) {
        console.log('true');
    }
    // If the result is -1, the element is not present
    else {
        console.log('false');
    }
}
// Declaration of the array
var skills = ["Javascript", "ReactJS", "React Native"];
// Function calling with the parameters 
temHabilidade(skills, "Javascript");