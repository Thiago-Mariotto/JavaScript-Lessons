var listElement = document.querySelector('#app ul');        //carrega o elemento <ul> dentro da <div app>
var inputElement = document.querySelector('#app input');    //carrega o elemento <input> dentro da <div app>
var buttonElement = document.querySelector('#app button');  //carrega o elemento <button> dentro da <div app>

//array para armazenas os afazeres
var todos = JSON.parse(localStorage.getItem('list_todos')) || [] ;

//funcao para renderizar todos os elementos da array no html
function renderTodos(){
    //listElement.innerHTML = "";                             //limpa todos os <li> da página

    for(todo of todos){
        var todoElement = document.createElement('li');     //cria um elemento html <li>
        var todoText = document.createTextNode(todo);       //cria um texto html 
        var linkElement = document.createElement('a');      //cria um elemento html <a> 
        var linkText = document.createTextNode('Excluir');  //cria um texto html 

        linkElement.appendChild(linkText);                  //adicionar o texto "Excluir" dentro do elemento <a>
        linkElement.setAttribute('href', '#');              //adioconar o atributo de link 
        var pos = todos.indexOf(todo);                      //variavel para armazenar a posição do vetor
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');  //adiciona atributo de onclick chamando a funcao deletar
        todoElement.appendChild(todoText);                  //adicionar o texto "todo" dentro do elemento <li>
        todoElement.appendChild(linkElement);               //adicionar o componente <a> dentro do <li>
        listElement.appendChild(todoElement);               //adicionar o todo dentro dos <li>
    }
}

renderTodos();

function addTodos(){
    var todoText = inputElement.value;                      //pega o valor do campo de texto
    if(todoText == "" || todoText.length < 2){
        alert("Sua tarefa precisar ter ao menos 2 caracteres!");
    }
    else{
        todos.push(todoText);                                   //adicionar o valor a array todos
        inputElement.value = "";                                //reseta o campo text 
        renderTodos();                                          //chama a funcao de renderização
        saveStorage();   
    }
                                      
}

buttonElement.onclick = addTodos;                           //quando botao é clicado chama funcao addTodos

//funcao para deletar todos
function deleteTodo(pos){
    todos.splice(pos, 1);                                   //remove elemento apartir de uma posicao do array (posicao, quantidade)
    renderTodos();                                          //chama funcao renderizar 
    saveStorage() ;                                     
}

function saveStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}