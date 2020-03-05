
//funcao promisse para requisição AJAX 
//utilizando Promisse
/*
var minhaPromisse = function(){
    return new Promise(function(resolve, reject){                                                   //instancia novo objeto da classe Promisse

        var xhr = new XMLHttpRequest();                                                             //variavel xhr utliza request xml por http
        xhr.open('GET','https://api.github.com/users/thiago-mariotto');                             //utilizando metodo GET acessa o link da API do GITHUB
        xhr.send(null);                                                                             //envia a requisiçã para o servidor

        xhr.onreadystatechange = function(){                                                        //quando existe alguma alteração na requisão anterior é exec
            if(xhr.readyState === 4){                                                               //se o status for 4 (DONE - operação concluida)
                if(xhr.status === 200){                                                             //código de status 200 (CONCLUIDO)
                    resolve(JSON.parse(xhr.responseText));                                          //retorna o texto recebido 
                }
                else{                                                                               //código de status diferente de 200
                    reject('Erro na requisição');                                                   //retorna mensagem de erro
                }
            }
        }
    });
}

minhaPromisse()                                                                                     //chama funcao minhaPromisse()
    .then(function(response){                                                                       //caso tenha uma resposta de sucesso
        console.log(response);                                                                      //executa a resposta de sucesso
    }) 
    .catch(function(){                                                                              //caso não tenha resposta exec o tratamento de erro
        console.warn(error);                                                                        //o erro é reportado
    });
*/

//Utilizando axios
//requer <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

axios.get('https://api.github.com/users/thiago-mariotto')                                           //chama funcao axios utilizando get
    .then(function(response){                                                                       //caso tenha uma resposta de sucesso
        console.log(response);                                                                      //executa a resposta de sucesso
    }) 
    .catch(function(){                                                                              //caso não tenha resposta exec o tratamento de erro
        console.warn(error);                                                                        //o erro é reportado
    });