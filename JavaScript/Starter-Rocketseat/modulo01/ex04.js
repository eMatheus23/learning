/*
4º exercício
Escreva uma função que dado um total de anos de estudo 
retorna o quão experiente o usuário é:


function experiencia(anos) {
 // código aqui
}
var anosEstudo = 7;
experiencia(anosEstudo);

// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

*/

// Use a function to difine the experience
function experiencia(anos) {
    if (anos <= 1) { 
        return console.log("Iniciante"); // If 0 >= anos <= 1, returns Iniciante
    }
    else if (anos <= 3) {
        return console.log("Intermediário");
    }
    else if (anos <= 6){
        return console.log("Avançado");
    }
    else if (anos <= 7) {
        return console.log("Jedi Master");
    }
}

var anosEstudos = 7;
experiencia(anosEstudos);