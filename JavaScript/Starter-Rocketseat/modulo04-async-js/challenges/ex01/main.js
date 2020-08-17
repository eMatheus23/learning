function checaIdade (idade) {
    // Forma de criar uma promisse
    return new Promise(function (resolve, reject) { 
        /*  setTimeout é uma função que executa determinada ação após o tempo definido
            setTimeout(function(){ action }, time(ms));
        */
        setTimeout(() => {
            if (idade >= 18) {
                // Se bem sucedida, retorna a funçao resolve
                resolve();
            } else {
                // Do contrário, retorna a função reject
                reject();
            }
        }, 2000);
    });   
}

// Chama a função e passa o parâmetro idade
checaIdade(20)
    .then(function() { // Executa o .then, se sucesso
        console.log("Maior que 18");
    })
    .catch(function() { // Ou .catch se erro
        console.warn("Menor que 18");
    })

/*
1º exercício
Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
idade o resultado deve cair no .then, caso contrário, no .catch
function checaIdade(idade) {
 // Retornar uma promise
}
checaIdade(20)
 .then(function() {
 console.log("Maior que 18");
 })
 .catch(function() {
 console.log("Menor que 18");
 });

*/