// Referencia os elementos na DOM
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// Busca a lista de todos no local storage, convertendo de JSON. Se estiver vazia, inicia com [].
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

/* 
// Armazena os todos padrão
var todos = [
    'Fazer café',
    'Estudar Javascript',
    'Acessar comunidade da Rocket'
];
*/

//Renderiza os todos
function renderTodos() {
    // Como estamos renderizando a lista novamente, precisamos excluir valores antigos
    listElement.innerHTML = ''; // Zera o listElement (Toda a ul)

    for (todo of todos) { // For...Of
        var todoElement = document.createElement('li'); // Cria um elemento li (<li></li>)
        var todoText = document.createTextNode(todo); // Cria um "nó" de text com o todo

        // Cria um elemento <a> com href="#"
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#')

        // Busca o index do todo que será criado
        var pos = todos.indexOf(todo);
        // Adiciona esse index dentro da função deleteTodo() que será ativada no onclick
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
        // Cria o texto dentro do elemento <a>
        var linkText = document.createTextNode('Excluir');

        // Coloca o texto do link dentro do elemento do link
        linkElement.appendChild(linkText);

        // Coloca o texto do todo e o elemento link (<a>) dentro do elemento li
        todoElement.appendChild(todoText); 
        todoElement.appendChild(linkElement);
        // Coloca o elemento li dentro do elemento lista (<ul></ul>)
        listElement.appendChild(todoElement);
    }
}

// Inicia a função que renderiza os todos quando a página é atualizada
renderTodos();

// Adiciona um todo
function addTodo() {
    // Coleta o valor digitado no input
    var todoText = inputElement.value;

    // Insere o conteúdo do input no array todos
    todos.push(todoText);
    // Reseta o input
    inputElement.value = ""
    // Renderiza a lista de todos novamente
    renderTodos();
    // Salva no local storage
    saveToStorage();
}

// Ouve o click do botão e inicia a função addTodo
buttonElement.onclick = addTodo;

// Deleta um todo
function deleteTodo(pos) { // Recebe a pos, ou index do todo a ser deletado
    /* Splice exclui itens de um array, splice(posição do array, quantos arrays excluir) */
    todos.splice(pos, 1); 
    // Renderiza a lista de todos novamente
    renderTodos();
    // Salva no local storage
    saveToStorage();
}

// Salva os todos no local storage
function saveToStorage() {
    /* O local storage guarda itens no formato JSON, 
    por isso é preciso converter para string e JSON */
    localStorage.setItem('list_todos', JSON.stringify(todos));
}