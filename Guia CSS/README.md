# Seletores:

## Element type selector
HTML:
```HTML
<h1></h1>
```
CSS:
```CSS:
h1{}
```

## Classes selectors
HTML: 
```HTML
<div class="t1 title"> titulo </div>
<div class="t2 title"> titulo </div>
```
CSS:
```CSS 
.title {}
 
.t1 {}

.t2 {}
```

## ID Selector
HTML: 
```HTML
<div id="my-1"> titulo </div>
```
CSS:
```CSS 
#my-1 {}
```

## Attributes selectors
HTML: 
```HTML
<div class="title" id="my-2" title="algo"> titulo </div>
```
CSS:
```CSS 
[title] {}
```

## Pseudo Attributes
CSS:
```CSS
 input:focus{} /* Quando o elemento está em foco, campos de texto por exemplo */

 p:hover {} /* Descansando o mouse em cima */

 input:disabled {} /* Quando desabilitamos um campo */

 input:required {} /* Quando o input é requerido */
```

## combinators
HTML: 
```HTML
<body> <article> <h1> TEXTO </h1> </article> </body>
```
CSS:
```CSS
 body article h1 {}
```

## child combinators
Seleciona só o filho direto do pai
HTML: 
```HTML
<body> <article> <h1> TEXTO </h1> </article> </body>
```
CSS:
```CSS
 body > article > h1 {}
```

## Adjacent sibling combinators
Seleciona o elemento que é irmão na hierarquia
HTML: 
```HTML
<h1>TEXTO</h1> <p>TEXTO</p> <p>TEXTO</p> <p>TEXTO</p>
```
CSS:
```CSS
 h1 + p {}
```

## General sibling combinators
Seleciona todos os elementos irmãos
HTML: 
```HTML
<h1>TEXTO</h1> <p>TEXTO</p> <p>TEXTO</p> <p>TEXTO</p>
```
CSS:
```CSS
 h1 ~ p {}
```

## Pseudo Classes

### first-child
É quando queremos selecionar o primeiro filho de um grupo de elementos. Temos também o last-child
```HTML
<ul>
    <li>Gratidão</li> <!-- Elemento a ser mudado -->
    <li>Esperança</li>
    <li>Fé</li>
</ul>
```
```CSS
ul li:first-child{
    font-weight: bold;
}
```

### nth-of-type
Pega o elemento por tipo e posição
```HTML
<ul>
    <h2>Título</h2>
    <li>Gratidão</li> <!-- Elemento a ser mudado -->
    <li>Esperança</li>
    <li>Fé</li>
</ul>
```
```CSS
ul li:nth-of-type(1){
    font-weight: bold;
}
```

### nth-child
Quando selecionamos o filho de um grupo de elementos
Podemos usar nth-child(odd) para números ímpares e nth-child(even) para números pares

```HTML
<ul>
    <h2>Título</h2>
    <li>Gratidão</li> <!-- Elemento a ser mudado -->
    <li>Esperança</li>
    <li>Fé</li>
</ul>
```
```CSS
ul li:nth-of-type(2){
    font-weight: bold;
}
```

## Pseudo-elements
Podemos adicionar elementos HTML pelo CSS
```CSS
li::after{
    content: ";";
}
li::before{
    content: ";";
}
p::first-line{
    color: #000000;
}
```


## Referências

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements">https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes">https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes</a>


# A Cascata:

Leva em conta 3 fatores
1. Origem do estilo
2. Especificidade
3. Importância


## Origem do estilo
inline (Na linha da tag do HTML) > tag style (No arquivo HTML)> tag link (Arquivo CSS)

## Especificidade
Cada seletor tem um peso que é considerado na hora de se colocar o estilo

0. Universal selector, combinators e negation pseudo-class (:not())
1. Element type selector (h1 - p - div)
10. Classes e attribute selectors
100. ID Selector
1000. Inline

- obs: Dá para somar os seletores h1.title#my-1 {} (Somando 1 elemento, 1 classe e 1 ID selector. Total 111)

- Dá para especificar quando existe uma tag dentro da outra tag #my-1 strong {} (Somando 1 Id selector e 1 elemento)

## Important
Evite o uso, quebra o fluxo natural
```CSS
#my-1 {
    color: blue !important;
}
```

# Dev Tools
F12


# Distâncias relativas

Unidade     Relativo a:
em          Tamanho da fonte pai
rem         Tamanho da fonte do elemento raiz (root/html)
vw          1% da viewport width
vh          1% da viewport heigth

Obs: Se usar porcentagem, vai ser relacionado ao Pai

# Box model

1. width:       
    - largura (px, %, em, rem, vh, vw)

2. heigth:      
    - altura  (px, %, em, rem, vh, vw)

3. content:     
    - conteúdo

4. border:

      - **bordas** (px) (border-top|border-rigth|border-bottom|border-left).
      
      - **border-style** (solid|dotted|dashed|double|groove|ridge|inset|outset) 
      
      - **border-width** (length) (2px | 1em) 
      
      - **border-color** (color) (green | #f33)

      - Em **shorthand** dá para aplicar os tamanhos border: 12px (top) 10px (rigth) 8px (bottom) 2px (left)

5. padding:     
    - **preenchimento interno** (padding-top|padding-right|padding-bottom|padding-left). 
    
    - Em **shorthand** dá para aplicar tudo padding: 12px (top) 10px (rigth) 8px (bottom) 2px (left)

6. margin:      

    - **espaços fora da caixa** (margin-top|margin-rigth|margin-bottom|margin-left). 
    
    - Em **shorthand** dá para aplicar tudo margin: 12px (top e bottom) 10px (rigth e left). 
    
    - **"auto"** calcula para o elemento centralizar horizontalmente no tamanho da página, margin: 10px auto;

7. box-sizing:  

    - Tipo de contagem do tamanho da box. (border-box) conta da borda. (content-box) conta o tamanho do conteúdo.

8. display      
    - **(inline)** não respeita os tamanhos definidos de altura e largura, só respeita margin, padding e border. 
    
    - **(block)** respeita tudo

9. outline      
    - Mesmo estilo da margem. Não modifica o tamanho da caixa


# Cores e Background

## Valores

Definidos por:
1. Palavras-chave: blue, black
2. hexadecimal: #990000, #900, #900a
3. funções: rgb, rgba, hsl, hsla

### Valores Globais

- color: inherit;  Herda a cor do elemento anterior 
- color: initial;  Volta a cor inicial 
- color: unset;  Pega a cor do contexto

https://convertacolor.com/

## Background

1. **background-color**: <rgb(20,20,20)>;

2. **background-image**: <url()>;

3. **background-repeat**: <no-repeat|repeat-x|repeat-y>;

4. **background-position**: <center|rigth|left|top|button>;
    * determina a posição da imagem dentro do background 

5. **background-size**: <cover> preenche tudo, <contain> fica dentro da borda, valores de tamanho <px,em,vw,porcentagem>;

6. **background-origin**: <border-box|padding-box|content-box>;  
    * Onde vai começar a imagem 

7. **background-clip**: <border-box|padding-box|content-box|text>;      
    * Onde vai começar a cor de fundo 

8. **backgroud-attachment**: <scroll|fixed|local>;
    * O conteúdo do fundo pode ficar movél ou fixo 

### Obs
No shorthand os valores são colocados nessa ordem com uma barra (/) entre position e size

9. **background**: linear-gradient(270deg, cor1, cor2, cor3);
    - O primeiro termo é a angulação, por padrão é horizontal, e os outros valores são as cores
-----------------------------------------------------------------------------------
# Posicionamento

## Posição:
- position: <static|realtive|absolute|fixed>
### static: 
- Padrão do html, tudo segue dessa forma
### Relative:
- Posso determinar a posição dele sem interferir nos outros elementos da página
### Absolute:
- O absolute faz o elemento sair do fluxo normal. o elemento é posicionado de acordo com seu parent element mais próximo, caso não exista ele será posicionado em relação ao bloco contendo a raiz do elemento 
### Fixed:
- O elemento fica fixo na página

### Valores:
- Define a distância:
    - left: 100px;
    - top: 80px;
    - bottom: ;
    - rigth: ;


- Define a camada:
    - z-index: ;


## Flex (display:flex;)
- Permite posicionar elementos dentro de uma caixa.
    
- Controle em uma dimensão (vertical ou horizontal).

- Alinhamento, direcionamento, ordenar, tamanhos
        
### flex-direction:
Atributos:

* **row**: linha, começa na esquerda
* **row-reverse**: linha ao contrário, começa na direita
* **column**: coluna, começa no topo
* **column-reverse**: coluna ao contrário, começa em baixo
        
### flex-wrap:
Atributos: 

* **wrap**: respeita o tamanho de cada elemento criando multiplas linhas para preservar o tamanho de cada elemento
* **wrap-reverse**: inverte a ordem dos elementos apresentados

### justify-content:
Alinha os elementos no eixo principal. Atributos:

* **flex-start**: padrão

* **flex-end**: agrupa no fim do eixo principal

* **center**: agrupa ao meio do eixo principal

* **space-around**: cada elemento possui espaço ao redor igual

* **space-between**: o espaço entre os elementos são iguais

* **space-evenly**: o espaço ao redor dos elementos é igual

### Aling-items:
Alinha elementos no eixo cruzado. Atributos:

* **stretch**: (padrão) os elementos ficam esticados no eixo cruzado

* **center**: centraliza os elementos no eixo cruzado

* **flex-start**: Deixa os elementos no inicio do eixo cruzado

* **flex-end**: Deixa os elementos no final do eixo cruzado

### gap:
Coloca espaço entre os elementos. Atributos:

- Valores

### flex-basis:
Determina o tamanho dos elementos relacionado ao eixo principal Atributos:

* auto: (padrão)
* Valores

### flex-grow:
Utiliza todo o espaço vazio do eixo pricipal. Atriutos:

- 0: (padrão), não preenche
- 1: Preencher o espaço vazio em uma fração
- 2: preencher o espaço vazio em duas frações
- ...

### flex-shrink:
Capacidade do elemento se encolher no eixo principal. Atributos:

- 1: (padrão) todos os elementos tem peso igual
- 0: não tem preferência para encolhimento
- 2,3,4...: Ele tem mais preferência para encolhimento

### flex: shorthand

- ordem: grow shrink basis 

## Grid (display:grid;)
Posiciona os elementos em uma tabela imaginária

```css
grid-template-areas: 
"1 1"
"2 3"
"4 5"
(cada aspas duplas é uma linha do grid)
```

```css
grid-template-rows: 30px 1fr 10px;
(determina as dimensões das alturas de linhas)
```
```css
grid-template-columns: 1fr 80px;
(determina as dimensões das larguras das colunas)
```

# Texto


## font-family
- Colocamos uma lista de fontes para procurar e mudar o estilo da letra
## font-weight
- Peso da fonte.
- Valores: normal|bold|bolder|lighter|100|200|300
## font-style
- Estilo da fonte
- Valores: normal|italic|oblique
## font-size
- Tamanho da fonte
- Valores: px,rem,em,
## Web fonts
- @font-face
- @import
- link

## Estilos para fonte

### font-stretch: normal;
- Alargamento ou encolhimento da fonte (50% a 200%) (normal, expanded, condensed)

### letter-spacing: 4px;
- Espaço entre letras

### word-spacing: 1em;
- Espaço entre palavras

### line-heigth: 1.5;
- Espaço entre as linhas

### text-align:;
- Pode ser (center, left, right, justify)

### shorthand
- font: -style, -variant, -weight, -stretch, -size, /line-height, -family;

# Transition
## Pseudo Attributes

```CSS
 input:focus{} /* Quando o elemento está em foco, campos de texto por exemplo */

 p:hover {} /* Descansando o mouse em cima */

 input:disabled {} /* Quando desabilitamos um campo */

 input:required {} /* Quando o input é requerido */
```

## Property e duration

### **transistion-property**: 
É a propriedade css que queremos aplicar a transição. Pode usar "all" para transicionar tudo que foi alterado.
```CSS 
transition-property:background-color,width,height;
```

### **transition-duration**: 
É o tempo de duração da transição.
```CSS 
transition-duration:1s;
```

Somente valores quantificáveis podem ser animados. Isso quer dizer que não é possível fazer uma animação de display indo de none para block, mas sim de opacity de 0 para 1;

## Transition timing functions
```CSS 
transition-timing-function: ease;
```
- **ease** - Início lento, rápido e final lento (este é o padrão)
- **linear** - Mesma velocidade do início ao fim
- **easy-in** - Início lento
- **easy-out** - Final lento
- **easy-in-out** - Início e fim lentos
- **cubic-bezier(n,n,n,n)** - Permite definir seus próprios valores em uma função cubic-bezier

## transition delay
Delay para iniciar a transição
```CSS 
transition-delay: 4s;
```

## Shorthand
```CSS 
transition: all (proprety) 1s (duration) linear (timing-function) 0s (delay);
```

# Animation

## @keyframes e animation-name
São as funções de animação, como funções normais e devem ter nomes

```css
@keyframes example-one{
    from{
        background-color: blueviolet;
    }
    to{
        background-color: rosybrown;
    }
}
.ball{
    animation-name: example-one;
    animation-duration: 4s;
}
```
## Animation-duration
Duração da animação
```css
.ball{
    animation-name: example-one;
    animation-duration: 4s;
}
```
## @keyframe com porcentagem
Essa é uma forma útil quando queremos ter uma animação que execute vários comportamentos em sua duração, então podemos colocar o inicio da animação como 0% e o fim da animação como 100%, usando qualquer outro valor de porcentagem nos referimos ao momento da duração daquela animação em porcentagem e definimos seu comportamento.
```css
@keyframes example-one{
    0%{
        background-color: blueviolet;
    }
    50%{
        background-color: rosybrown;
    }
}
```
## Animation-delay

Animation Delay é o tempo que a animação tem para iniciar 
```css
animation-delay:4s;
```

## Animation-iteration-count
A propriedade animation-iteration-count defini quantas vezes a animação será repetida, podendo ser colocada como um numero, exemplo 3, fará a animação se repetir 3 vezes. Podemos colocar o valor como "infinite” o que vai fazer a animação se repetir sem fim

```css
animation-iteration-count: 3;
```

## Animation direction
A propriedade animation-direction define a direção que a animação vai funcionar, podendo ser: normal | reverse | alternate | alternate-reverse.

* **normal**: começa pela primeira chave do @keyframes e vai ate a última, se o iteration count estiver setado, no momento de repetir, será também da primeira chave do @keyframes ate a ultima
* **reverse**: começa pela última chave do @keyframes e vai ate a primeira, se o iteration count estiver setado, no momento de repetir, será também da última chave do @keyframes ate a primeira.
* **alternate**: começa pela primeira chave do @keyframes e vai ate a última, se o iteration count estiver setado, no momento de repetir, será da última chave do @keyframes ate a primeira, e na próxima repetição volta a ser da primeira chave para a última e assim por diante alternando.
* **alternate-reverse**.: começa pela última chave do @keyframes e vai ate a primeira, se o iteration count estiver setado, no momento de repetir, será da primeira chave do @keyframes ate a última, e na próxima repetição volta a ser da última chave para a primeira e assim por diante alternando.
```css
animation-direction: reverse;
```
## Animation Timing Function
Forma que o elemento acelera na animação

- **ease**- Início lento, rápido e final lento (este é o padrão)
- **linear** - Mesma velocidade do início ao fim
- **easy-in** - Início lento
- **easy-out** - Final lento
- **easy-in-out** - Início e fim lentos

```css
animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
```
## Animation fill mode
determina a posição assim que acaba a animação

* **forwards**: onde o elemento parar ele fica depois da animação
* **backwards**: O tempo de delay antes da animação o elemento recebe as propriedades de inicio da animação
* **both**: junta os dois ultimos
```css
animation-fill-mode:both;
```