//ARQUIVO DE FUNCIONALIDADES QUE PODEM SER APLICADAS UTILIZANDO JSES6

/* ##############  CLASSES 

//Utilização de classes utilizando JavaScript  

    class List{

        //metodo construtor

        constructor(){
            this.data = [];

        }

        //metodo data 
        add(data){
            this.data.push(data);
            console.log(this.data);
        }
        
    }

    //utilização de classe extendida de outra classe

    class TodoList extends List {

        //construtor da nova classe
        constructor(){

            //metodo 'super()' mantem o construtor da classe pai 
            super();
            this.usuario = 'Thiago Mariotto';
        }

        //metodo para mostrar usuario
        mostraUsuario(){
            console.log(this.usuario);
        }


    }

    //instanciando objeto MinhaLista herdando a classe TodoList .
    const MinhaLista = new TodoList();

    //Quando o botao do documento for pressionado uma nova string é adicionada no array utiilizando o metodo add. 

    document.getElementById('button').onclick = function(){
        MinhaLista.add('novo todo'); 
    }

    //instanciando o metodo mostrarusuario criado dentro da classe 
    MinhaLista.mostraUsuario();

*/



/* ##############  ARRAY FUNCTIONS 

const arr = [1,2,3,4,5,6,1,7,6,5];

const newArr = arr.map(function(value, index){
    return value * 10 + index;
});

const sum = arr.reduce(function(total, next){
    return total + next;
});

const filter = arr.filter(function(value){
    return value % 2 === 0; 
});

const find = arr.find(function(value){
    return value === 2;
});

console.log(find);

*/



/*  ############## ARROW FUNCTIONS

    const arr = [1,2,3,4];

    const newArr = arr.map(item => item * 2);  //se receber um unico parametro pode se utilizar direto sem as chaves

    const infoArr = arr.map((item, index) => item + index) ; //caso tenha mais de um parametro deve-se utilizar as chaves

    console.log(infoArr);
    console.log(newArr);

*/



/* ###############  DESESTRUTURAÇÃO  

    //Objeto usuario com atributos de nome, idade e outro objeto endereco com atrib rua e numero  

    const usuario = {
        nome: 'Thiago',
        idade: 23,
        endereco: {
            rua: 'antonio',
            numero: 33
        },
    };

    //utilizando a desestruturação podemos pegar os valores dos atributos que queremos sem precisar
    //ficando chamando o objeto e pegando cada um deles separados
    //exemplo: usuario.nome || usuario.endereco.numero
    //quando aplicado a desestruturação podemos definir em uma nova var ou const
    //e chamar o atributo que queremos

    const {nome, endereco: {rua}} = usuario;

    console.log(rua);


*/



/* ############### REST 

    // retorna o resto de uma funcão ou array

    const usuario = {
        nome: 'Thiago',
        idade: 23, 
        empresa: 'SuperGeeks',

    }

    //utiliza-se ...+nome para atribuir a uma variavel 

    const { nome, ...resto} = usuario; 
    console.log(nome, resto);

    // -------------------------------------- //

    const arr = [1,2,3,4,5,6];
    const [a, b, ...c] = arr;
    console.log(a,b,c);

    // -------------------------------------- //

    //da mesma forma utilizada em funcoes onde podemos pegar todos os parametros
    //no exemplo abaixo todos os parametros sao somados utilizando o metodo reduce do JS

    function soma(...parms){
        return parms.reduce((total, next) => total + next); 
    }

    console.log(soma(1,3,4,5,6));

*/




/* ############### SPREAD

    //utiliza-se de todo o array, no exemplo a seguir utilizado para juntar os 2 arrays em um unico

    const arr1 = [ 1, 2, 3];
    const arr2 = [ 4, 5, 6];
    const arr3 = [...arr1, ...arr2];

    console.log(arr3);

    const usuario = {
        nome: 'Thiago',
        idade: 23,
    }

    const usuario2 = { ...usuario, nome: 'Jose'}; 

    console.log(usuario2);

*/

/* ############### TEMPLATE LITERALS

    //forma mais simples de utilziar variaveis dentro de strings 
    const nome =  'Thiago';
    const idade =  23;


    //console.log('Meu nome: ' + nome + ' e tenho ' + idade + ' anos');
    console.log(`Meu Nome é ${nome} e tenho ${idade} anos`);

*/


/* ############### Sintaxe curta de objeto 
    //utilizar os objetos de forma mais curta no ES6

    const nome = 'Thiago';
    const idade = 23;

    const usuario = {
        nome,
        idade,
        empresa: 'DevSol',
    }

    console.log(usuario);
*/

