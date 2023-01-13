# Tags:
## block:
    <div></div>: tag para dividir blocos, quebra linha
    <p></p>: paragrafo
    <h1></h1>: Título, vai até o h5

## inline:
    <span></span>: tag para dividir blocos mas na mesma linha
    <em></em>: itálico
    <b></b>: negrito
    <strong></strong>: negrito

    <br>: break de linha
    <abbr title=""></abbr>: Usado para explicar abreviações
    <pre></pre>: Preserva os espaços em branco do texto
    <style></style>: Coloca CSS direto no arquivo HTML



```html
<h1>Tutorial de html</h1>
```


# imagem
Contém atributos HTML (informações extras e configurações):
    src: onde a imagem está
    alt: texto alternativo

```html
<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>
<img src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="zero" width="100">
<br>
<img src="" alt="Sem imagem">
<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>
```

# link (Use aspas duplas sempre)
    <a href="" target=""></a>
        href: 
            link http normal
            "mailto:lucashrosa99@gmail.com": Envia email
            "tel:+5561992836376": ligar para
            "#algumapalavra": leva para a tag que tem como atributo aquele id

        target:
            _self: padrão, abre o link em cima da página
            _blank: abre uma nova guia


```html
<a href="#atalhos" target="">atalhos</a>
<br>
<a href="https://www.google.com">google</a>
<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>
```

# Atributos mais usados
    
- class="": classifica um bloco para um determinado tipo
- contenteditable="": habilita a edição da página
- data-*
- hiden: esconde o conteúdo
- id="": identificador, 1 por página
- style="": muda o estilo css
- tabindex: 
- title="": define um título

```html
<div class="verde" contenteditable="true" data-id="" id="1" style="color:aqua"> 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa et iusto nesciunt placeat ratione illum repellendus atque ipsum. Dolorem a laborum voluptate tempore vero nemo aspernatur accusantium unde facilis accusamus. 
</div>

<div tabindex="1">
    indica que a ordem do conteúdo por meio do tab
</div>
<div title="titulo do texto" style="color: #309900;">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam error dignissimos libero, ipsa, porro id eum tempora facilis inventore temporibus corrupti nemo cum quod labore? Voluptate nostrum est quo laboriosam.
</div>

<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>
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

```HTML
<p>
    Alguns Caracteres especiais: &lt; &nbsp; &amp; &nbsp;  &gt; &nbsp; &nbsp; &apos; &apos;
    
</p>
<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>
```
# Listas
## Lista não ordenada
    <ul>
        <li></li>
    </ul>

## Lista ordenada
    <ol>
        <li></li>
    </ol>

```HTML
<h2 id="atalhos">Lista de Atalhos:</h2>
    <ol>
        <li>ctrl + r atualiza a página</li>
        <li>alt + z faz a quebra de linha automática</li>
        <li>! cria uma página html no vscode</li>
    </ol>
<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>
```


# Citações:
    <blockquote cite=""></blockquote>: externas
    <cite></cite>: citar páginas
    <q cite=""></q>: citações curtas

  
```HTML
<h2>Citações</h2>
<blockquote cite="https://mail.google.com/mail/u/0/#inbox">(Indica que um texto externo foi citado)</blockquote>

<p>De acordo com o site <a href="https://mail.google.com/mail/u/0/#inbox"></a><cite>Página de email (serve para citar a página)</cite></p>

<q cite="https://mail.google.com/mail/u/0/#inbox">Iguail o blockquote mas esse é para citações curtas</q>
<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>
```

# Abreviações
    <abbr title=""></abbr>: Usado para explicar abreviações

```HTML
<h2>Abreviação</h2>
<p>Usamos o <abbr title="Hypertext Markup Language ">HTML</abbr> para estruturar paginas web. Passe o mouse em cima do <abbr title="Hypertext Markup Language ">HTML</abbr></p>
<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>
```

# Endereço:
    <address></address>: Indica endereço
```HTML
<h2>Endereço</h2>
<address>
    <p>Lucas Rosa
    <br>
    <strong>Rua 31 sul, lote 08, ap 1201A</strong>
    <br>
    <strong>Águas Claras, Brasília DF</strong>
    </p>
</address>
<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>
```

# Lista de descrições:
    <dl>
        <dt></dt>
        <dd></dd>
    </dl>   

```HTML
<h2>Descrição</h2>
<dl>
    <dt>HTML</dt>
    <dd>Hypertext Markup Language</dd>

    <dt>HTML</dt>
    <dd>Hypertext Markup Language</dd>
</dl>

<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>
```
# Códigos:
    
    <pre>: deixa os espaços vazios preservados no texto
        <code></code>: blocos de código genéricos
    </pre>
```HTML
<h2>Trecho de Código</h2>
<pre>
    <code>            
    if(sexo == 'm'){
        printf("%.1f kg\n",(tamanho *72.7)-58);
    }
    </code>
</pre>
<p style="color: rgb(109, 109, 109);">--------------------------------------------------------</p>
```
# Tabelas estrutura:

    <caption>: Nome da tabela
    <thead>: Cabeçalho do texto
    <tbody>: Células da tabela
    <tfoot>: Parte inferior da tabela
    <tr>: Linha da tabela
    <th>: Célula da linha de cabeçalho
    <td>: Célula de linha
    rowspan="Número": ocupa linhas
    colspan="Número": ocupa colunas
    span="Número": ocupa grupos
    scope="colgroup""col""row""rowgroup": O escopo identifica o tipo do cabeçalho
```HTML
<h2>Tabela</h2>
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
```
# Midia:
    

## Vídeo:

    Atributos:
        controls: coloca controles no video
        autoplay: o video toca sozinho
        type="": informa o tipo de vídeo
        preload="<metadata (carrega só o básico) |auto (carrega o video) |none (carrega nada)>"
        muted: começa no mudo
        loop: assim que acabar o video ele começa de novo
        poster="": coloca uma capa para o video

## Audio:

    Atributos: 
        controls: coloca controles no audio
    
## Iframe:

    Atributos:
        frameborder="": borda do vídeo
        allow="": ferramentas do reprodutor de vídeos
        allowfullscreen: full screen

## Imagem:

    Atributos:
        alt="": texto de acessibilidade
        title="": texto para descanse de mouse

    Tags:
        <figure>
            <img src="" alt="">
            <figcaption>Texto visivel linkado para a imagem</figcaption> 
        </figure>        

        


```HTML

<h2>Midias</h2>
<video 
    src="../assets-example/rocket.mp4" 
    controls
    width="500"
    height="300"
    autoplay
    preload="metadata"
    poster="../assets-example/ball.png"
    >
        <p>Não suporta video</p>  
</video>

<audio controls>
    <source src="../assets-example/viper.mp3" type="audio/mp3">
    <source src="../assets-example/viper.ogg" type="audio/ogg">
    <p>Não suporta audio</p>
</audio>

<iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/XWHDX914vYQ" title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
    >
</iframe>


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

# Input:

    Atributos:
    - type="": Determina o tipo de dado que será recebido
        text: texto
        data: data
        number: número
        password: Senha
        url: url
        file: arquivo
            <form action="" method="post" enctype="multipart/form-data">
                <input type="file">
            </form>
        color: cor
        checkbox: marcar a caixinha
        hidden: fica escondido, serve para receber alguma informação
        radio: marcar bolinha, só pode um por vez
        search: pesquisa
        range: Uma espécie de escala, Ex: volume


    - autocomplete="": Mostra para o usuário sugestões do tipo do autocomplete
    - autofocus: Deixa o cursor no input
    - disable: Deixa a caixa não utilizável
    - value="": Deixa um valor padrão para a caixa do input
    - readonly: Apenas leitura
    - form="": linka o input com um formulário
    - name="": nome do input, importante para receber as informações depois
    - required: Torna obrigatório o input para o envio do formulário
    - placeholder="": Texto indicativo do que fazer tipo: "Digite sua senha"
    - minlength=""/maxlength="": número máximo e mínimo de caracteres para o campo
    - size="": Tamanho da caixa
    - inputmode="numeric": altera o tipo de teclado
    - pattern="": Determina o que e como pode ser enviado, como uma restrição de caracteres ou ordem de caracteres
    - spellcheck="": Habilita a virificação ortográfica
    - accept=".doc": tipos de arquivos que serão aceitos "file"
    - multiple: Pode enviar mais de um arquivo por vez "file"
    - checked: deixa o campo marcado por padrão "checkbox"
    - aria-label="": Um label que fica escondido
    - min/max="": Número minimo e máximo que pode ser colocado "number"





# Formulário:
        - <form action=""></form>

        Atributos básicos:
        - action: Para onde enviar os dados
        - method: Jeito de enviar dados

    <fieldset></fieldset>:
        Realiza o grupamento de campos

        Atributos:
        - disable: desabilita o campo
        - form="": recebe o id do form que ele pertence
        - name="": nome do grupo

        Tags:
        - <legend></legend>: Legenda do campo
        - <label for="id_do_input"></label>: Recebe o nome do input.
            O atributo for serve para conectar o label e a tag de entrada de dados (button, input, meter, output, progress, select, textarea) via id do input
        - <input type="">: Tipo de dado que vai ser recebido
        
    <button></button>:
        Representa um botão, é usado par enviar formulários

        Atributos:
        - type="": (submit) usado para enviar; (reset) resetar o formulário; (button) usado para enviar em alguns casos
        - autofocus: faz o botão ser selcionado ao entrar na página
        - disable: desabilita o botão
        - name="": nome do botão
        - value="": valor a ser recebido
        - form="": faz a ligação a um formulário

        Outra opção:
        - <input type="submit" form="forms1" value="Enviar">

    <datalist id=""></datalist>:
        Lista de valores como ~sugestão~ a uma tag <input>. São suportados text, search, url, tel, email, date, month, week, time, datetime-local, number, range e color

        Atributos:

        Tags:
        - <option value="">banana</option>: Coloca as opções
        - <input type="" list="fruta">: Faz a ligação do input com a lista atrávez do atributo list
    

```HTML
<h2>Formulário</h2>
<form action="" id="forms1">
    <fieldset form="" name="">
        <legend>Contato</legend>
        <div>
            <label for="">Nome</label>
            <br>
            <input type="text">
        </div>
        <br>
        <div>
            <label for="">Fruta</label>
            <br>
            <input type="text" list="fruta" >
        </div>
        <br>
        <div>
            <label for="area">Mensagem:</label>
            <br>
            <textarea name="area" id="area" cols="10" rows="4"></textarea>
        </div>
    </fieldset>
    <fieldset>
        <legend>Marque as opções</legend>
        <div>
        <!-- name: agrupa as as caixas | value: nome recebido caso a caixa seja marcada -->
            <input type="checkbox" name="interest" id="lista" value="notificação">
            <label for="notificação">Ativas as notificações</label>
            
        </div>
        <div>
            <input type="checkbox" name="interest" id="lista" value="lista" checked>
            <label for="lista">Inscrever-se na lista de e-mail</label>
            
        </div>
    </fieldset>
    <fieldset>
        <legend>Esse formulário está arrumado?</legend>
        <label for="sim">Sim</label>
        <input type="radio" name="arrumado" id="sim" value="Sim">
        <label for="não">Não</label>
        <input type="radio" name="arrumado" id="não" value="Não">
    </fieldset>
    <input type="range" min="-100" max="100" step="5">
    <br>
    <label for="car">Selecione o carro</label>
    <!--Select:-->
    <select name="car" id="car">
        <option value="">Escolha seu carro</option>
        <option value="renaut">Clio</option>
        <option value="renaut1">Clio1</option>
        <option value="renaut2">Clio2</option>
        <option value="renaut3">Clio3</option>
    </select>
        
        
    
</form>

<datalist id="fruta">
    <option value="banana">banana</option>
    <option value="tomate">tomate</option>
    <option value="kiwi"></option>
    <option value="abacaxi"></option>
    <option value="nuca"></option>
</datalist>


<br>
<button form="forms1">Enviar</button>
<input type="submit" form="forms1" value="Enviar submit">

```
