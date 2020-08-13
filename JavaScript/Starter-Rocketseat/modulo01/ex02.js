/*
2º exercício
Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
function pares(x, y) {
 // código aqui
}
pares(32, 321);
*/

function pares(x, y) {
    // Criar um loop que passe por todos os números do intervalo
    for (i = x; i <= y; i++) {
        // Se o número for par, imprimir, se impar, não fazer nada. 
        if ((i % 2) == 0) {
            console.log(i);
        }
    }
    // Finalizar loop quando i == y
}

pares(32, 321);