# Tags:
## block:

* &lt;div&gt;: tag para dividir blocos, quebra linha
* &lt;p&gt;: paragrafo
* &lt;h1&gt;: Título, vai até o h5

## inline:
* &lt;span&gt;: tag para dividir blocos mas na mesma linha
* &lt;hr&gt;: linha horizontal
* &lt;br&gt;: break de linha
* &lt;abbr&gt; : Usado para explicar abreviações
* &lt;pre&gt;: Preserva os espaços em branco do texto
* &lt;style&gt;: Coloca CSS direto no arquivo HTML
## Formatação 
* &lt;b&gt;- Texto em negrito
* &lt;strong&gt;- Texto importante
* &lt;i&gt;- Texto em itálico
* &lt;em&gt;- Texto enfatizado
* &lt;mark&gt;- Texto marcado
* &lt;small&gt;- Texto menor
* &lt;del&gt;- Texto deletado
* &lt;ins&gt;- Texto inserido
* &lt;sub&gt;- texto subscrito
* &lt;sup&gt;- Texto sobrescrito

<div style="text-align: center">
    <p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>
    <img id="mulhercomputador" src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="zero" width="100">
    <br>
    <img src="" alt="Sem imagem">
    <p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>
</div>

```html
<div style="text-align: center">
    <p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>
    <img id="mulhercomputador"
        src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
        alt="zero" 
        width="100"
    >
    <br>
    <img src="" alt="Sem imagem">
    <p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>
</div>

```

# link 



* &lt;a href="" target=""&gt;&lt;/a&gt;
* href: 
    * link normal
    * "mailto:lucashrosa99@gmail.com": Envia email
    * "tel:+5561992836376": ligar para
    * "#algumapalavra": leva para a tag que tem como atributo aquele id

* target:
    * _self: padrão, abre o link em cima da página
    * _blank: abre uma nova guia

Obs: (Use aspas duplas sempre)


<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>
<p> Esse texto link te levará a imagem acima (<a href="#mulhercomputador" target="link interno">Mulher no computador</a>). Esse link te levará ao (<a href="https://www.google.com" target="link google">google</a>).</p>
<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>


```html
<p> Esse texto link te levará a imagem acima
    <a 
        href="#mulhercomputador" 
        target="link interno"
    >
        Mulher no computador
    </a>
    . Esse link te levará ao 
    <a 
        href="https://www.google.com" 
        target="link google"
    >
        google
    </a>
    .
</p>
```

# Atributos mais usados
    
- class="": classifica um bloco para um determinado tipo
- contenteditable="": habilita a edição da página
- data-*
- hidden: esconde o conteúdo
- id="": identificador, 1 por página
- style="": muda o estilo css
- tabindex="number": Ordem do tab
- title="": define um título

<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>

<div class="verde" contenteditable="true" data-id="" id="1" style="color:aqua"> 
    Esse conteúdo é editável 
</div>
<div hidden >Conteúdo escondido</div>
<div tabindex="1">
    Primeiro texto na ordem do Tab
</div>
<div title="titulo do texto" style="color: #309900;">
    Passe o mouse por cima e veja o título
</div>

<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>

```html
<div class="verde" contenteditable="true" id="1" style="color:aqua">  
    Esse conteúdo é editável
</div>
<div hidden>
    Conteúdo escondido
</div>
<div tabindex="1">
    Indica que a ordem do conteúdo por meio do tab
</div>
<div title="titulo do texto" style="color: #309900;">
    Passe o mouse por cima e veja o título
</div>
```
# Caracteres
## Caracteres especiais:
    &nbsp;: indica espaço

## Caracteres reservados:
    < : &lt;
    > : &gt;
    "" :  &quot;
    & : &amp;
    '' : &apos;
<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>
<p>
    Alguns Caracteres especiais: &lt; &nbsp; &amp; &nbsp;  &gt; &nbsp; &nbsp; &apos; &apos;
    
</p>
<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>

```HTML
<p>
    Alguns Caracteres especiais: &lt; &nbsp; &amp; &nbsp;  &gt; &nbsp; &nbsp; &apos; &apos;
    
</p>
```
# Listas
## Lista não ordenada
* &lt;ul&gt;&lt;/ul&gt;: Inicia a lista
* &lt;li&gt;&lt;/li&gt;: Itens da lista

## Lista ordenada
* &lt;ol&gt;&lt;/ol&gt;: Inicia a lista
* &lt;li&gt;&lt;/li&gt;: Itens da lista

<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>
<h3>Exemplo de lista:</h3>
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ol>
<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>

```HTML
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ol>
```


# Citações:
* &lt;blockquote cite=""&gt;&lt;/blockquote&gt;: externas
* &lt;cite&gt;&lt;/cite&gt;: citar páginas
* &lt;q cite=""&gt;&lt;/q&gt;: citações curtas

<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>
<blockquote cite="https://mail.google.com/mail/u/0/#inbox">(Indica que um texto externo foi citado)</blockquote>
<br>
<p>De acordo com o site <a href="https://mail.google.com/mail/u/0/#inbox"><cite>Página de email (serve para citar a página)</cite></a></p>
<br>
<q cite="https://mail.google.com/mail/u/0/#inbox">Usado para citações curtas</q>
<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>
  
```HTML
<blockquote cite="https://mail.google.com/mail/u/0/#inbox">
    (Indica que um texto externo foi citado)
</blockquote>

<p>
    De acordo com o site <a href="https://mail.google.com/mail/u/0/#inbox"> <cite>Página de email (serve para citar a página)</cite> </a>
</p>

<q cite="https://mail.google.com/mail/u/0/#inbox">
    Usado para citações curtas
</q>
```

# Abreviações
* &lt;abbr title=""&gt;&lt;/abbr&gt;: Usado para explicar abreviações

<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>

<p>Passe o mouse em cima do <abbr title="Hypertext Markup Language ">HTML</abbr></p>
<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>

```HTML
<p>Passe o mouse em cima do <abbr title="Hypertext Markup Language ">HTML</abbr></p>
```

# Endereço:
* &lt;address&gt;&lt;/address&gt;: Indica endereço

<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>
<address>
    <p>Lucas Rosa
    <br>
    <strong>Rua 31 sul, lote 08, ap 1201A</strong>
    <br>
    <strong>Águas Claras, Brasília DF</strong>
    </p>
</address>
<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>


```HTML
<address>
    <p>
        Lucas Rosa
        <br>
        <strong>Rua 31 sul, lote 08, ap 1201A</strong>
        <br>
        <strong>Águas Claras, Brasília DF</strong>
    </p>
</address>
```

# Lista de descrições:
* &lt;dl&gt;&lt;/dl&gt;: indica que vai ter uma lista de descrição
* &lt;dt&gt;&lt;/dt&gt;: título
* &lt;dd&gt;&lt;/dd&gt;: descrição

<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>      
<dl>
<dt>HTML</dt>
<dd>Hypertext Markup Language</dd>

<dt>HTML</dt>
<dd>Hypertext Markup Language</dd>
</dl>

<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>

```HTML
<dl>
    <dt>HTML</dt>
    <dd>Hypertext Markup Language</dd>

    <dt>HTML</dt>
    <dd>Hypertext Markup Language</dd>
</dl>
```
# Códigos:
    
* &lt;pre&gt;&lt;/pre&gt;: deixa os espaços vazios preservados no texto
* &lt;code&gt;&lt;/code&gt;: blocos de código genéricos

<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>   
<pre>
<code>            
if(sexo == 'm'){
    printf("%.1f kg\n",(tamanho *72.7)-58);
}
</code>
</pre>
<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>

```HTML

<pre>
    <code>            
    if(sexo == 'm'){
        printf("%.1f kg\n",(tamanho *72.7)-58);
    }
    </code>
</pre>

```
# Tabelas estrutura:

* &lt;caption&gt;: Nome da tabela
* &lt;thead&gt;: Cabeçalho do texto
* &lt;tbody&gt;: Células da tabela
* &lt;tfoot&gt;: Parte inferior da tabela
* &lt;tr&gt;: Linha da tabela
* &lt;th&gt;: Célula da linha de cabeçalho
* &lt;td&gt;: Célula de linha
* rowspan="Número": ocupa linhas
* colspan="Número": ocupa colunas
* span="Número": ocupa grupos
* scope="colgroup""col""row""rowgroup": O escopo identifica o tipo do cabeçalho

<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>
<table>
    <caption><h3>Pessoas por idade</h3></caption>
    <colgroup>
        <col>
        <col style="background-color: red;">
    </colgroup>
    <thead>
        <tr>
            <th scope="col">Nome</th>
            <th scope="col">Idade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Mayk</td>
            <td>25</td>
        </tr>
        <tr>
            <td>Lucas</td>
            <td>23</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>total:</td>
            <td>2 Pessoas</td>
        </tr>
    </tfoot>
</table>
<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>

```HTML

<table>
    <caption><h3>Pessoas por idade</h3></caption>
    <colgroup>
        <col>
        <col style="background-color: red;">
    </colgroup>
    <thead>
        <tr>
            <th scope="col">Nome</th>
            <th scope="col">Idade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Mayk</td>
            <td>25</td>
        </tr>
        <tr>
            <td>Lucas</td>
            <td>23</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>total:</td>
            <td>2 Pessoas</td>
        </tr>
    </tfoot>
</table>
```
# Midia:
    
##  Imagem
Contém atributos HTML (informações extras e configurações):

* src: onde a imagem está
* alt: texto alternativo
<figure style="text-align: center">
    <img src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" width="100">
    <figcaption>
        Texto visivel linkado para a imagem
    </figcaption> 
</figure>

```HTML
<figure>
    <img src="" alt="">
    <figcaption>
        Texto visivel linkado para a imagem
    </figcaption> 
</figure>
```
## Vídeo:

Atributos:
* controls: coloca controles no video
* autoplay: o video toca sozinho
* type="": informa o tipo de vídeo
* preload="metadata": (carrega só o básico) 
* preload= "auto": (carrega o video)
* preload="none": (carrega nada)
* muted: começa no mudo
* loop: assim que acabar o video ele começa de novo
* poster="": coloca uma capa para o video

<video 
    src="./assets-example/Oceano - 135658.mp4" 
    controls
    width="500"
    height="300"
    autoplay
    muted
    loop
    preload="metadata"
    poster="./assets-example/tela.png"
    > 
</video>

```HTML
<video 
    src="../assets-example/rocket.mp4" 
    controls
    width="500"
    height="300"
    autoplay
    muted
    loop
    preload="metadata"
    poster="./assets-example/tela.png"
>  
</video>
```
## Audio:

Atributos: 
* controls: coloca controles no audio

<audio controls>
    <source src="./assets-example/viper.mp3" type="audio/mp3">
    <source src="./assets-example/viper.ogg" type="audio/ogg">
    <p>Não suporta audio</p>
</audio>

```HTML
<audio controls>
    <source src="./assets-example/viper.mp3" type="audio/mp3">
    <source src="./assets-example/viper.ogg" type="audio/ogg">
    <p>Não suporta audio</p>
</audio>
```    
## Iframe:

Atributos:
* frameborder="": borda do vídeo
* allow="": ferramentas do reprodutor de vídeos
* allowfullscreen: full screen

<iframe width="560" height="315" src="https://www.youtube.com/embed/XQ55yZJEuN0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```HTML
<iframe 
    width="560" 
    height="315"
    src="https://www.youtube.com/embed/XQ55yZJEuN0" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
</iframe>
```
## Imagem 2.0:

Atributos:
* alt="": texto de acessibilidade
* title="": texto para descanse de mouse

<figure>
    <a href="https://unsplash.com/">
        <img   
            src="https://images.unsplash.com/photo-1668619834434-a9fb20654726?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
            alt="não encontrado"
            title="Leão"
            width="300px"
        >
    </a>
    <figcaption>Imagem de um leão</figcaption>
</figure>

```HTML
<figure>
    <a href="https://unsplash.com/">
        <img   
            src="https://images.unsplash.com/photo-1668619834434-a9fb20654726?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
            alt="não encontrado"
            title="Leão"
            width="300px"
        >
    </a>
    <figcaption>Imagem de um leão</figcaption>
</figure>
```
# Formulário:
Atributos:
* action: Para onde enviar os dados
* method: Jeito de enviar dados
* target="": Especifica onde exibir a resposta recebida após o envio do formulário.
* autocomplete="on"/"off": Especifica se um formulário deve ter o preenchimento automático ativado ou desativado.
* novalidate: informa que os dados não precisam ser validados

* disable: desabilita o campo
* form="": recebe o id do form que ele pertence
* name="": nome do grupo
## Input:

Atributos:
* type="": Determina o tipo de dado que será recebido
    * text: texto
    * date: data
    * number: número
    * password: Senha
    * url: url
    * file: arquivo
    * color: cor
    * checkbox: marcar a caixinha
    * radio: marcar bolinha, só pode um por vez
    * search: Pesquisa
    * range: Uma espécie de escala, Ex: volume
    * submit: espécie de botão
* id="": indica a identificação do input
* hidden: fica escondido, serve para receber alguma informação
*  autocomplete="": Mostra para o usuário sugestões do tipo do autocomplete
*  autofocus: Deixa o cursor no input
*  disable: Deixa a caixa não utilizável
*  value="": Deixa um valor padrão para a caixa do input
*  readonly: Apenas leitura
*  form="": linka o input com um formulário
*  name="": nome do input, importante para receber as informações depois
*  required: Torna obrigatório o input para o envio do formulário
*  placeholder="": Texto indicativo do que fazer tipo: "Digite sua senha"
*  minlength=""/maxlength="": número máximo e mínimo de caracteres para o campo
*  size="": Tamanho da caixa
*  inputmode="numeric": altera o tipo de teclado
*  pattern="": Determina o que e como pode ser enviado, como uma restrição de caracteres ou ordem de caracteres
*  spellcheck="": Habilita a virificação ortográfica
*  accept=".doc": tipos de arquivos que serão aceitos "file"
*  multiple: Pode enviar mais de um arquivo por vez "file"
*  checked: deixa o campo marcado por padrão "checkbox"
*  ari-label="": Um label que fica escondido
*  min/max="": Número minimo e máximo que pode ser colocado "number"

## Label
Adiciona uma label para identificar campos, como o input

Atributos:

* for="": Faz o link com o campo que se deseja a label
<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>
<form>
<label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="Lucas" readonly><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Rosa"><br><br>
  <input type="submit" value="Submit">
</form>
<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>

```html
<form>
    <label for="fname">First name:</label>
    <br>
    <input type="text" id="fname" name="fname" value="Lucas" readonly>
    <br>
    <label for="lname">Last name:</label>
    <br>
    <input type="text" id="lname" name="lname" value="Rosa">
    <br><br>
    <input type="submit" value="Submit">
</form>
```
## Fieldset
Realiza o grupamento de campos

* &lt;fieldset&gt;&lt;/fieldset&gt;

## Legend
Define uma legenda para o fieldset

* &lt;legend&gt;&lt;/legend&gt;
<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>
<form>
    <fieldset>
        <legend>Seu nome:</legend>
        <label for="nome">Nome:</label>
        <input type="text" id="nome">
    </fieldset>
</form>
<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>

```HTML
<form>
    <fieldset>
        <legend>Seu nome:</legend>
        <label for="nome">Nome:</label>
        <input type="text" id="nome">
    </fieldset>
</form>
```

## Select
Elemento define uma lista suspensa:

* &lt;select&gt;&lt;/select&gt;: Começa a barra de seleção
* &lt;option&gt;&lt;/option&gt;:Itens da lista

Atributos:

* id="": identificação única
* name="": forma de fazer referencia
* size="number": define quantas opções serã mostradas 
* multiple: permite selecionar mais de um elemento
* value="": valor do atributo
* selected: seleciona o "option" para ser mostrado primeiro
<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>
<form action="">
  <label for="car">Selecione o carro</label>
    <select name="car" id="car">
        <option value="inicial" selected>Escolha seu carro</option>
        <option value="renaut">Clio</option>
        <option value="A">Astra</option>
        <option value="jeep">Jeep</option>
        <option value="bmw">A3</option>
    </select>
</form>
<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>

```html
<form action="">
  <label for="car">Selecione o carro</label>
    <select name="car" id="car">
        <option value="inicial" selected>Escolha seu carro</option>
        <option value="renaut">Clio</option>
        <option value="A">Astra</option>
        <option value="jeep">Jeep</option>
        <option value="bmw">A3</option>
    </select>
</form>
```

## textarea
* &lt;textarea&gt;&lt;/textarea&gt;

Atributos:

* id="": identificação única
* name="": forma de fazer referencia 
* rows="number": número de linhas
* cols="number": número de colunas
<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>
<label for="area">Mensagem:</label>
<br>
<textarea name="area" id="area" cols="10" rows="4"></textarea>
<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>

```html
<form action="">
    <label for="area">Mensagem:</label>
    <br>
    <textarea name="area" id="area" cols="10" rows="4"></textarea>
</form>
```
## Datalist
* &lt;datalist id=""&gt;&lt;/datalist&gt;

<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>
<datalist id="fruta">
    <option value="banana">banana</option>
    <option value="tomate">tomate</option>
    <option value="kiwi">kiwi</option>
    <option value="abacaxi">abacaxi</option>
    <option value="melao">melao</option>
</datalist>
<form action="">
    <label for="fruta">Selecione a fruta:</label>
    <input id="fruta" list="fruta">
</form>

<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>

```html
<datalist id="fruta">
    <option value="banana">banana</option>
    <option value="tomate">tomate</option>
    <option value="kiwi">kiwi</option>
    <option value="abacaxi">abacaxi</option>
    <option value="melao">melao</option>
</datalist>
<form action="">
    <label for="fruta">Selecione a fruta:</label>
    <input id="fruta" list="fruta">
</form>

```

## Botão
<button type="button" onclick="alert('Hello World!')">Click Me!</button>

```html
<button type="button" onclick="alert('Hello World!')">Click Me!</button>
```
<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>
<fieldset>
    <legend>Marque as opções</legend>
    <input type="checkbox" name="interest" id="lista" value="notificação">
    <label for="notificação">Ativas as notificações
    </label>   
    <input type="checkbox" name="interest" id="lista" value="lista" checked>
    <label for="lista">Inscrever-se na lista de e-mail
    </label>          
</fieldset>
<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>

```html
<form action="">
   <fieldset>
    <legend>Marque as opções</legend>
    <input type="checkbox" name="interest" id="lista" value="notificação">
    <label for="notificação">Ativas as notificações
    </label>   
    <input type="checkbox" name="interest" id="lista" value="lista" checked>
    <label for="lista">Inscrever-se na lista de e-mail
    </label>          
</fieldset>
</form>
```
* button: Representa um botão, é usado par enviar formulários

<hr>

