const inputElement = document.querySelector("#app input")
const inputButton = document.querySelector("#app button")
const listElement = document.querySelector("#app ul")


function sendRequest() {
    listElement.innerHTML = ''
    
    createItem('Carregando...');

    var userName = inputElement.value;

    axios.get('https://api.github.com/users/' + userName + '/repos')
    .then(function(response) { // Se sucesso        
        listElement.innerHTML = ''
        // Itera o array "data", dentro do objeto recebido pela api
        for (repo of response.data) {
            // Chama a função que cria os itens
            createItem(repo.name); //.name faz com que apenas o nome passado
        }
    })
    .catch(function(error) { // Se falha
        listElement.innerHTML = ''
        createItem('Usuário não encontrado')
        console.warn(error);
    })


}

function createItem(text) {
    // Criar o li
    var createdItem = document.createElement('li');
    
    // Criar o texto
    var createdText = document.createTextNode(text);

    // Colocar o texto dentro do li
    createdItem.appendChild(createdText);
    // Colocar o li dentro da lista
    listElement.appendChild(createdItem);
}

inputButton.onclick = sendRequest;
/* Explicando:
O Axios recebe da API das repos do Github, um objeto como o abaixo:

repos = {   
    config:
    data: <-- E a propriedade "data" é um array de objetos
    headers:
    request:
    status:
    statusText: 
}

A lista de repositórios está em um array que está dentro 
da propriedade "data", dentro do objeto "repos" recebido pelo Axios.

Dentro da propriedade "data", temos um array, onde cada item é uma
repo. E cada repo é um objeto com as propriedades abaixo:

data = [
    0: {
        id:
        node_id:
        name:
        full_name
        ...
    }
    1: {}
    2: {}
]

Portanto, estamos buscando a propriedade "nome:", que está dentro de cada
objeto de array, que está dentro da propriedade "data:", que é uma propriedade
do objeto recebido pela API.

Caminho: 
Objeto da API > data > repoIndex > nome

Como não estamos buscando o nome de um repo, mas de todos, precisamos iterar
todos os itens dentro do array data. Para isso, vamos ao endereço do array: repos.data
e iteramos usando o for...of:  for (repo of repos.data).

Isso vai nos retornar as informações cada um dos repos, todos os repos, na forma de objeto. 
Armazenamos então, cada objeto recebido na variável "repo"
Mas como só precisamos do nome do repo, usamos o endereço  da propriedade .name: "repo.name"


        // Armazena o resultado da API (Um objeto) na váriavel "repos"
        // var repos = response;
*/

