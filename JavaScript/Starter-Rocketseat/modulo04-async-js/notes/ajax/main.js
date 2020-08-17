// Inicia uma requisição AJAX
var xhr = new XMLHttpRequest();

// open GET, envia um pedido para a API e envia null
xhr.open('GET', 'https://api.github.com/users/diego3g');
xhr.send(null);

/*  A requisição demora mais para chegar do que a página para carregar.
    Por isso, se tentarmos fazer qualquer coisa com os dados recebidos da
    API, vamos ter um erro, pois o código vai executar antes da resposta chegar.
    Por isso, é preciso fazer um código assíncrono, que não vai executar na ordem padrão,
    mas vai esperar a resposta da API ou servidor antes de começar a executar.
*/

// onreadystatechange é uma função ou método que espera o estado da requisição mudar para pronta 
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) { // Aparentemente, um readyState bem sucedido, retorna o número 4
        console.log(JSON.parse(xhr.responseText));
        // A resposta precisa ser convertida de JSON
    }
}