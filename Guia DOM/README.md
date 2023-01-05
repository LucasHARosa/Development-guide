# DOM

Forma de modificar o html a partir do javascript

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