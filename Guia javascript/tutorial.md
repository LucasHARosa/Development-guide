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

# Tipos de dados:

## inteiro, float, boolean, string

```js
    let number = 3
    let pi = 3.14
    let decision = true
    let name = "lucas"
``` 
    null X undefined: nulo é definido só não tem nada dentro. No caso de "let nada" nada é undefined pois não foi declarado.

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

    let aluno = alunos.find(function(aluno) { // Em um array de alunos se procura o aluno joão. Retorna o primeiro elemento com nome joão
        return aluno.nome === 'joão';
    });

    let aluno = alunos.find(function(aluno) { // Em um array de alunos se procura o aluno joão. Cria uma array com elementos com nome joão
        return aluno.nome === 'joão';
    });
```
        
# Declaração de variáveis:

    Em Java as variáveis são fracamente tipadas e dinâmicas

    var: global para todos os escopos

    let: única por escopo

    const: não mutável e única por escopo


# Scope
    Determina a visibilidade de uma variável no código, as variáveis do tipo var são visíveis para todo o código, enquento let e const são visíveis apenas no scopo que foram criadas

    O escopo é definido por {}
 
# Funções

## function expression: 
    Quando a função não recebe um nome, ou é anonima:

```js
        const soma = function(){ 
        }
```

    Arrow function:
```js
        const soma = () => { 
        }
```

## function:

```js
    function name_of_function(number1, number2){
        let total = number1 + number2
        return total 
    }
    let sum = name_of_function(23,7)
    console.log(sum)
```

## function constructor:

```js
     function Person(name){
        this.name = name
    }
    const lucas = new Person("lucas")
```

# TypeCasting

## String -> Inteiro
```js
        let string = "1234"
        console.log(Number(string)+1)
```

## Inteiro -> String
```js
        let numero = 1
        console.log(String(numero)+' é um caracter')
```

# Strings

## Funções com strings:

```js
    .replace("Termo_a_ser_substituido","Termo_que_vai_substituir");

    .toUpperCase(); //transforma tudo em maiuscula

    .toLowerCase(); //transforma tudo em minuscula

    .split("Termo_que_vai_separar_a_string"); //cria um array com a string separando pelo termo desejado, (em uma frase pode ser o espaço). Retorna Array

    .includes("Termo_a_ser_procurado"); //procura em uma string um termo específico. Retorna boolean
```  

## Operadores:

```js
    String1 + String2; //+ concatena strings
```

# Números

## Funções com números:

```js
    .toFixed(número_de_casa_decimeis_desejaveis); // determina o número de casas decimais
```  

# Operadores
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
    Nesta aula veremos sobre o throw e try/catch. São parte do controle de fluxo da aplicação.

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
f
    h1.addEventListener("mouseover",nome_da_função);

    h1.addEventListener("keydown",nome_da_função);

    function nome_da_função (){
        //escopo da função
    }
```