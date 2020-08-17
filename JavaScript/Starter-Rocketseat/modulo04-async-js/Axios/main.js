/*  Axios é um wrapper do XMLHttpRequest, ele nada mais é do que 
    UM XMLHttpRequest por baixo dos panos, mas com mais informações
    E sua função é retornar os valores de forma mais fácil
*/
axios.get('https://api.github.com/users/diego3g')
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