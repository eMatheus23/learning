/*  Promises 
    São linhas de códico que não vão influenciar na linha do tempo
    do nosso código JavaScript.
    São funções que vão devolver resultados só depois de um tempo e 
    não precisamos nos preocupar em saber o tempo exato, pois o JS vai 
    continuar rodando normalmente

*/

var minhaPromise = function () {
    return new Promise(function (resolve, reject) { // resolve = sucesso, reject = ñ sucesso
        // Mesmo código do ex anterior, mas agora dentro de uma promise
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/diego3g');
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                // Quando a resposta chegar, é preciso verificar se foi bem sucedida
                if (xhr.status === 200) {
                    // Se bem sucedida, retorna a funçao resolve
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    // Do contrário, retorna a função reject
                    reject('Erro na requisição')
                }
            }
        }
    });
}

// É aqui que começa a fazer sentido usar promisse
minhaPromise()
    .then(function(response) { // Posso usar o .then, se sucesso
        console.log(response);
    })
    .catch(function(error) { // Ou .catch se erro
        console.warn(error);
    })
    /*  E dentro de cada resultado, eu posso continuar minha aplicação. 
        ex. se minha aplicação depende de um dado bem sucedido da api, eu
        escrevo o resto da função dentro do .then
    */