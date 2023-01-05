# Tipos de dados:

## Declaração de variáveis:

Em Java as variáveis são fracamente tipadas e dinâmicas

var: global para todos os escopos

let: única por escopo

const: não mutável e única por escopo

## Inteiro, float, boolean, string

```js
    let number = 3
    let pi = 3.14
    let decision = true
    let name = "lucas"
``` 
null X undefined: nulo é definido só não tem nada dentro. No caso de "let nada" nada é undefined pois não foi declarado.

## Strings 
### Funções com strings:

```js
    .replace("Termo_a_ser_substituido","Termo_que_vai_substituir");

    .toUpperCase(); //transforma tudo em maiuscula

    .toLowerCase(); //transforma tudo em minuscula

    .split("Termo_que_vai_separar_a_string"); //cria um array com a string separando pelo termo desejado, (em uma frase pode ser o espaço). Retorna Array

    .includes("Termo_a_ser_procurado"); //procura em uma string um termo específico. Retorna boolean
```  

### Operadores String:

```js
    //typecast
    let string = "1234"
    console.log(Number(string)+1)

    String1 + String2; //+ concatena strings
```

## Números
### Funções com números:

```js
    .toFixed(número_de_casa_decimeis_desejaveis); // determina o número de casas decimais
```  
### Operadores Números:
```js
    //typecast
    let numero = 1
    console.log(String(numero)+' é um caracter')
```

## Objetos:

```js
    const autor={name:"lucas",age: 23}; //Declaração do objeto

    console.log(autor.name); //Retorna o valor do atributo

    console.log(autor[name]); //Retorna o valor do atributo

    console.log(autor["name"]); //Retorna o valor do atributo

    console.log(typeof autor.name); //Retorna o tipo do atributo 
``` 

OBS1: depois de criar um objeto, para aumentar o número de atributos basta fazer o nome do objeto.atributo_novo (autor.admin = true)

### Operadores objeto:

```js
delete auto.age; //Deleta a propriedade do objeto

let autor = new String('Lucas'); //Cria um objeto novo
```           


## Array:

```js
const values=[1,2,3]; //Declaração do array

let values = new Array(10); //Declaração de um array com construtor de 10 espaços

let values = new Array('a','b','c'); //Declaração de um array com construtor com 3 elementos

console.log(values[1]); //Acessando elementos do array

values[3] = 4; //Atribuição de valores
```
OBS1: Podemos colocar variáveis e objetos juntos no mesmo array

### Funções Array:

```js
.length; //conta quantos elementos tem no array

.join("separador");// junta elementos do array em string. Retorna String

.from(string); //Transforma uma string em um array onde cada espaço vira um caracter

.push("Elemento"); //Adiciona um elemento no fim do array

.unshift("Elemento"); //Adiciona um elemento no inicio do array

.pop(); //Remove um elemento do fim do array

.shift(); //Remove um elemento no início do array

.slice(posição__inicial,posicao_final+1); //Separa os elementos de um array. Retorna um array com os elementos

.splice(posição__inicial,quantidade_de_elementos_retirados); //Retira elementos a partir de uma posição no array

.indexOf("elemento"); //Procura qual o índice do elemento procurado; Retorna inteiro
    
.includes("elemento"); //Retorna boolean se o elemento está ou não no array

.reverse(); //Inverte a ordem do array

.sort(); //Ordena os elementos do array

.forEach((elemento,posição,array)=>{}); //Trabalhar com um for de maneira mais fácil, pode receber de 1 a 3 argumentos

.map((elemento,posição,array) => {}); // Retorna um array modificando cada elemento do array, Recebe como argumento uma função
    
.map(elemento => elemento * 2); // Arrow function permite

let aluno = alunos.find(function(aluno) { // Em um array de alunos se procura o aluno joão. Retorna o primeiro elemento com nome joão
    return aluno.nome === 'joão';
});

let aluno = alunos.filter(function(aluno) { // Em um array de alunos se procura o aluno joão. Cria uma array com elementos com nome joão
    return aluno.nome === 'joão';
});
```

# Print:

```js
console.log("hello world") // aspas duplas ou simples

console.log(1+1) // expressões regulares

console.log(`Hello 
${1+1}`) // A crase permite multi linhas e codígos junto com strings
```

## Multi variáveis:

```js
    console.log("valor de x: ",x, " |valor de y: ",y);
    console.log('O Valor de x: '+ x + '. O valor de y: ' + y ); // Usado paara retorno de função
    console.log(`O valor de x: ${x}. o valor de y: ${y}`);
```


        

# Scope
Determina a visibilidade de uma variável no código, as variáveis do tipo var são visíveis para todo o código, enquento let e const são visíveis apenas no scopo que foram criadas

O escopo é definido por {}
 
# Function
## Operadores
    == igual
    != diferente
    === estritamente igual
    !== estritamente diferente
    > maior que
    < menor que
    >= maior igual
    <= menor igual
    && E lógico
    || OU lógico
    ! Not

## Function expression: 
Quando a função não recebe um nome, ou é anonima:

```js
const soma = function(){ 
}
```

Arrow function:
```js
const soma = (a,b) => { 
    return a+b;
}

const dividirPorDois = c => c/2; // caso a função só tenha uma linha de retorno pode ser feito assim
```

## Function:

```js
function name_of_function(number1, number2){
    let total = number1 + number2
    return total 
}
let sum = name_of_function(23,7)
console.log(sum)
```

## Function constructor:

```js
function Person(name){
    this.name = name
}
const lucas = new Person("lucas")
```



# switch:
```js
switch(expression){
    case 'a':
        //bloco de codigo
        break
    case 'b':
        //bloco de codigo
        break
    default:
        //bloco de codigo
        break
}
```


# Throw e Try/Catch
São parte do controle de fluxo da aplicação.

Throw em inglês significa lançar, disparar, catch quer dizer pegar e try tentar.

Isso significa que vamos tentar executar um bloco de código, e se der algum erro, será disparado e capturado na nossa aplicação. Suponhamos que haja uma função que dispare um erro caso não seja passado um parâmetro dessa função.

```js
function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório';
    }

    console.log(name);
}
```

Nesse caso, se o nome vier vazio, será disparada uma mensagem.

Precisamos agora usar o try/catch para capturarmos esse erro, caso contrário, ele irá encerrar nossa aplicação, e nós o faremos da seguinte maneira:

```js
try {
    sayMyName()
} catch(e) {
    console.log(e)
}
```

# Laços de repetição

## for:

```js
for(let i =0;i<10;i++){
    if(i===5){
        continue; //Vai para o próximo passo no laço de repetição
    }
    if(i==8){
        break; //Para o laço de repetição
    }
    console.log(i)
}
```

## for of: arrays

```js
let name = "lucas"
let names = ["lucas", "ana"]
for(let char of name){ //Vai executar caracter por caracter
    console.log(char);
}
for(let name of names){ //Vai executar elemento por elemento do array
    console.log(name)
}
```  
## for in: objetos

```js
let autor={name:"lucas", age:"23",admin:true}
for(let proprietys in autor){
    console.log(autor[proprietys]); //Retorna os valores de cada atributo
}
```


# Promisses
É um objeto JavaScript com a promessa de que algo será realizado. É usado para operações assíncronas

    Pending: Estado inicial, assim que o objeto da promessa é iniciado
    Fulfilled: A promessa foi concluída com sucesso
    Rejected: A promessa foi rejeitada, houve um erro
    Settled: Seja com sucesso ou erro, ela foi finalmente concluída


```js
let aceitar = true
const promessa = new Promise((resolve, reject) => {
	if (aceitar) {
		return resolve('pedido aceito!')
	}
	return reject('pedido negado!')
})
promessa
	.then(result => console.log(result)) // .then pega o resultado da Promise. Se "aceitar" for true vai imprimir pedido aceito
	.catch(erro => console.log(erro)) // .catch pega o erro da Promise. Se "aceitar" for false vai imprimir pedido negado
	.finally(() => console.log('finalizada')) // Vai imprimir finalizada independente de "aceitar"
```

### Async
Async é um tipo de função que executa de maneira assíncrona
O último código apresentado pode ser realizado da seguinte forma:

```js
let aceitar = true
const promessa = new Promise((resolve, reject) => {
	if (aceitar) {
		return resolve('pedido aceito!')
	}
	return reject('pedido negado!')
});

async function espera(){
    try{
        const result = await promessa; // await espera por promessa
        console.log(result);
    } catch (error){
        console.log(error);
    } finally{
        console.log("finalizada");
    }
}

```

## Fetch
Fetch é uma estrutura de promessa que recebe com argumento uma url. Pode retornar erro ou o resultado 

```js
fetch('https://api.github.com/users/maykbrito')
.then(response => response.json()) // .json é uma função do resultado
.then(data => fetch(data.repos_url)) // Usando uma função do resultado
.then(r => console.log(r))
.catch(erro => console.log(erro.message));
```
### Async
```js
async function start(){
    try{
        const response = await fetch('https://api.github.com/users/maykbrito')
        const user = await response.json();
        const reposResponse = await  fetch(user.repos_url);
        console.log(reposResponse);
    } catch(e){
        console.log(e);
    }
}
start()
```

## Axios

Biblioteca que tem uma estrututra de promisses e funciona como o fetch

```js
import axios from "axios";
axios.get('/')
.then(res=>{
    console.log(res.data);
})
```



