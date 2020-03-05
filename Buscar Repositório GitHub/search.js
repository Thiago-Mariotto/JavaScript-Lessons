var inputElement = document.querySelector('#app input');
var listElement = document.querySelector('#app ul');
var buttonElement = document.querySelector('#app button');
var linkApi = 'https://api.github.com/users/';


function buscaRepos(){
    var userName = inputElement.value;

    axios.get(linkApi+userName+'/repos')
        .then(function(response){

            var ElementLi = document.createElement('li'); 
            var mensagemLoading = document.createTextNode('Carregando ...');  //cria texto

            ElementLi.appendChild(mensagemLoading);
            listElement.appendChild(ElementLi);

            var resultado = response;
            window.setTimeout(criaElementos(resultado.data), 2000);

            

        })
        .catch(function(error){
            
            if(error.response.status == '404')
            {
                listElement.innerHTML = "";
                var nameElement = document.createElement('li');  //cria elemento li
                var textoElement = document.createElement('a');
                var nameText = document.createTextNode('Este usuário não existe');  //cria texto
                
                textoElement.appendChild(nameText);
                nameElement.appendChild(textoElement);
                listElement.appendChild(nameElement);
            }
            //console.warn(error);
        })
}

function criaElementos(texto){


        listElement.innerHTML = "";
        for(text of texto){
            var nameElement = document.createElement('li');  //cria elemento li 
            //var tituloElement = document.createTextNode('-> ');
            var nameText = document.createTextNode(text.name);  //cria texto
            
            //nameElement.appendChild(tituloElement);
            nameElement.appendChild(nameText);
            listElement.appendChild(nameElement);
        }
}


buttonElement.onclick = buscaRepos;
