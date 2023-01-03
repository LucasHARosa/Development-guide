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

.map((value) => { // Retorna um array modificando cada elemento do array, Recebe como argumento uma função
    return value *2; // value é cada elemento do array
})

.map(value => value * 2); // Arrow function permite

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
### async
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



# DOM

## selecionando elementos

```js
    document.getElementById("name"); // Seleciona o elemento a partir do id. Retorna um element

    document.getElementByClassName("name"); // Seleciona o elemento a partir da classe. Retorna um HTMLCollection

    document.getElementByTagName("name"); // Seleciona o elemento a partir do tag name. Retorna um HTMLCollection

    document.querySelector("#name"); // Seleciona o elemento a partir do seletor CSS. Retorna um element

    document.querySelectorAll(".name"); // Seleciona todos os elementos a partir do seletor CSS. Retorna um NodeList  
```

## Manipulando conteúdos
```js
    let element = document.querySelector("h1");

    element.textContent += " Olá"; // Manipula o texto do elemento

    element.innerText = "Olá"; // Troca o texto do elemento

    element.innerHTML = "<strong> Hola! </strong>"; // Adiciona conteúdo HTML pelo js

    // input

    let input = document.querySelector("input"); 

    input.value = "Valor que eu quiser"; // Atribuimos a variável o valor do input no js e no html

    // Atributos

    const header = document.querySelector("header"); 

    header.setAttribute("id", "header"); // Coloca um atributo no elemento

    header.getAttribute("id"); // Retorna o valor do atributo id

    header.removeAttribute("id"); // Remove o atributo id do elemento

    // CSS
```

## Navegando pelos elementos

```js
    const body = document.querySelector("body");

    body.parentElement; // Pega o elemento pai
    body.parentNode; // Pega o nó pai

    body.childNodes; // Retorna um NodeList com todos elementos filhos, pega espaços vazios
    body.children; // Retorna um HTMLCollection com as tags filhas, sem espaços vazios

    body.firstChild; // Primeiro elemento filho, conta espaços vazios
    body.firstElementChild; // Primeira tag filha, sem contar espaços vazios

    body.lastChild; // último elemento filho, conta espaços vazios
    body.lastElementChild; // última tag filha, sem contar espaços vazios

    body.nextSibling; // Proxímo irmão, conta espaços vazios
    body.nextElementSibling; // Proxímo irmão, sem contar espaços vazios

    body.prevSibling; // Irmão anterior, conta espaços vazios
    body.prevElementSibling; //Irmão anterior, sem contar espaços vazios
    
```

## Adicionando elementos a página

Tendo esse Arquivo HTML:
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <header>
            <h1>Blog</h1>
        </header>
        <script src="./manual.js"></script>
    </body>
    </html>
```
```js
    const div = document.createElement("div");
    div.innerText = "Olá"; 
    const body = document.querySelector("body");

    body.append(div); // Coloca o elemento div após o último filho <script>

    body.prepend(div); // Coloca o elemento div antes do primeiro filho <header>

    body.insertBefore(div, body.lastChild); // 1° argumento = elemento, 2° argumento = posição. Coloca o elemento antes da posição desejada

```

## Eventos

### Por HTML
```html
    <h1 onclick="nome_da_função()">Frase</h1>
    <h1 ondrag="nome_da_função()">Frase</h1>
    <h1 onmouseover="nome_da_função()">Frase</h1>
    <h1 onqualquercoisa="nome_da_função()">Frase</h1>
```
```js
    function nome_da_função(){
        //escopo da função
    }
```

### Via js

```html
    <input type="text">
```
```js
    const input = document.querySelector("input");
    input.onkeydown = function (event){
        //escopo da função
        // Nesse event temos diversos métodos que podem retornar inúmeros elementos
    }
    input.onkeyup = function (event){
        //escopo da função
    }
```

```js
    const h1 = document.querySelector("h1");
    
    h1.addEventListener("click",nome_da_função);

    h1.addEventListener("mouseover",nome_da_função);

    h1.addEventListener("keydown",nome_da_função);

    function nome_da_função (){
        //escopo da função
    }
```

# NodeJS

## REPL
Escreve javascript direto no terminal
    
### Iniciar
    node: inicia o javascript no terminal
    node console.js: inicia o javascript de um arquivo no terminal
    node console.js lucas henrique: adiciona no process.argv dois argumentos
    node console --name "Lucas Henrique": adiciona no process.argv dois argumentos '--name' e 'Lucas Henrique'
    Sair: .exit



## Iniciando

### Para puxar módulos 
```javascript
    const path = require('path') //Puxa uma informação de um módulo
```

### Para empurrar módulos
```javascript
    module.exports = "Olá"; // cria um módulo de exportação

    const myModule = require("./exports.js"); // Supondo que exista um arquivo com esse módulo acima criado que se chama exports.js, a forma de puxar esse modulo é por um required com o caminho do arquivo
```

## npm

### npm init
    Iniciar o npm
### npm install nome_do_pacotes
    Baixa um modulo
### npm run test
    roda o test do package.json
### npm install nome_do_pacotes -g
    Instala os pacotes globalmente
### npm root -g
    Vê onde estão todas as extensões globais
### npm uninstall nome_da_pacotes -g
    desinstala os pacotes globalmente
### npm i nome_da_pacotes@x.x.x
    Muda a versão do pacote
### npm outdated
    Vê as versões dos pacotes instalados
### npm upgrade
    Faz o upgrade nos pacotes
### npm i nome_da_pacotes@latest
    Instala a última versão
    
## process

### Para puxar informações do process na linha de execução
```javascript
    process; // Objeto global. Um dos argumentos é o ARGV, que possui os argumentos passados na execução
    const argumentosDaExecucao = process.argv; // array de argumentos do process 
```
### Printf
```javascript
    process.stdout.write("Alguma informação\n");
```

### Scanf
```javascript
    process.stdin.on("data", data =>{ // .on deixa a função pegando sempre as entradas do usuário, entradas do tipo "data". O segundo argumento é a execução de um função assim que o usuário digite dados
        process.stdout.write(data.toString().trim()+"\n");// .trim() remove espaços vazios
        process.exit();
    })
```

## Timers

### setTimeout
Define o tempo de espera para realizar uma função. Recebe dois argumentos. 1° é a função que será executada, 2° são os milisegundos de espera

```javascript
    const finished = ()=>{ console.log("done!")}
    // 3000 ms de timeout
    setTimeout(finished,3000);

```

### clearTimeout
Recebe um Timeout como argumento e cancela sua execução no kernel

```javascript
    const finished = ()=>{ console.log("done!")}
    const time = setTimeout(finished,3000);
    clearTimeout(time);
```

### setInterval
Define um intervalo de tempo que será executada uma função. Recebe dois argumentos. 1° é a função que será executada, 2° são os milisegundos de espera

```javascript
    const periodic = ()=>{ console.log("hello!")}
    // 1000 ms de intervalo
    setInterval(periodic,1000);

```

### clearInterval
Cancela o timer de intervalo. Recebe um Interval como argumento.

```javascript
    const periodic = ()=>{ console.log("hello!")}
    // 1000 ms de intervalo
    let intervalo = setInterval(periodic,1000);

    setTimeout(()=>{ clearInterval(intervalo)},4000);

```

## Events

### EventEmitter
Função do tipo classe

```javascript
    // extraindo de events o EventEmitter
    const {EventEmitter} = require('events');
    // criando um novo emissor de eventos
    const eventEmitter = new EventEmitter();
```

### .emit
Função para emitir eventos

```javascript
    // emissor de eventos. Primeiro argumento é o nome do evento
    eventEmitter.emit('saySomethig');
    // pode ter um ou dois parâmetros. O segundo parâmetro são os argumentos da função
    eventEmitter.emit('saySomethig',"Lucas");
```
### .on
Função para ouvir a emissão de eventos

```javascript
    // recebidor de eventos. Primeiro argumento é o nome do evento, segundo argumento é a função a ser executada
    eventEmitter.on('saySomethig', () => {console.log("Ouvindo")});

```

### .once
Função para ouvir a emissão de eventos uma única vez
```javascript
    // recebidor de eventos. Primeiro argumento é o nome do evento, segundo argumento é a função a ser executada
    eventEmitter.once('saySomethig', () => {console.log("Ouvindo")});

```

### Como herdar o event emitter para qualquer classe
```javascript
    // extraindo inherits de util
    const {inherits} = require('util');
    // extraindo de events o EventEmitter
    const {EventEmitter} = require('events');
    // criando uma nova função classe
    function Pessoa (name){
        this.name = name;
    }
    //atribuindo as propriedades do EventEmitter a pessoa
    inherits(Pessoa, EventEmitter);
    //Criando uma pessoa
    const lucas = new Pessoa("Lucas");
    //Ouvindo o evento chama
    lucas.on('chama',()=>{console.log("bem vindo "+lucas.name)});
    console.log("Opa cheguei!");
    //emitido o evento chama
    lucas.emit('chama');

```
