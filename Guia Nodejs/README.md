# Ambiente

## REPL
    Escreve javascript direto no terminal
    
### Iniciar
    node: inicia o javascript no terminal
    node console.js: inicia o javascript de um arquivo no terminal
    node console.js lucas henrique: adiciona no process.argv dois argumentos
    node console --name "Lucas Henrique": adiciona no process.argv dois argumentos '--name' e 'Lucas Henrique'

    Sair: .exit



# iniciando

## Para puxar módulos 
```javascript
    const path = require('path') //Puxa uma informação de um módulo
```

## Para empurrar módulos
```javascript
    module.exports = "Olá"; // cria um módulo de exportação

    const myModule = require("./exports.js"); // Supondo que exista um arquivo com esse módulo acima criado que se chama exports.js, a forma de puxar esse modulo é por um required com o caminho do arquivo
```

# npm

## npm init
    Iniciar o npm
## npm install nome_do_pacotes
    Baixa um modulo
## npm run test
    roda o test do package.json
## npm install nome_do_pacotes -g
    Instala os pacotes globalmente
## npm root -g
    Vê onde estão todas as extensões globais
## npm uninstall nome_da_pacotes -g
    desinstala os pacotes globalmente
## npm i nome_da_pacotes@x.x.x
    Muda a versão do pacote
## npm outdated
    Vê as versões dos pacotes instalados
## npm upgrade
    Faz o upgrade nos pacotes
## npm i nome_da_pacotes@latest
    Instala a última versão
# process

## Para puxar informações do process na linha de execução
```javascript
    process; // Objeto global. Um dos argumentos é o ARGV, que possui os argumentos passados na execução
    const argumentosDaExecucao = process.argv; // array de argumentos do process 
```
## Printf
```javascript
    process.stdout.write("Alguma informação\n");
```

## Scanf
```javascript
    process.stdin.on("data", data =>{ // .on deixa a função pegando sempre as entradas do usuário, entradas do tipo "data". O segundo argumento é a execução de um função assim que o usuário digite dados
        process.stdout.write(data.toString().trim()+"\n");// .trim() remove espaços vazios
        process.exit();
    })
```

# Timers

## setTimeout
    Define o tempo de espera para realizar uma função. Recebe dois argumentos. 1° é a função que será executada, 2° são os milisegundos de espera

```javascript
    const finished = ()=>{ console.log("done!")}
    // 3000 ms de timeout
    setTimeout(finished,3000);

```

## clearTimeout
    Recebe um Timeout como argumento e cancela sua execução no kernel

```javascript
    const finished = ()=>{ console.log("done!")}
    const time = setTimeout(finished,3000);
    clearTimeout(time);
```

## setInterval
    Define um intervalo de tempo que será executada uma função. Recebe dois argumentos. 1° é a função que será executada, 2° são os milisegundos de espera

```javascript
    const periodic = ()=>{ console.log("hello!")}
    // 1000 ms de intervalo
    setInterval(periodic,1000);

```

## clearInterval
    Cancela o timer de intervalo. Recebe um Interval como argumento.

```javascript
    const periodic = ()=>{ console.log("hello!")}
    // 1000 ms de intervalo
    let intervalo = setInterval(periodic,1000);

    setTimeout(()=>{ clearInterval(intervalo)},4000);

```

# Events

## EventEmitter
    Função do tipo classe

```javascript
    // extraindo de events o EventEmitter
    const {EventEmitter} = require('events');
    // criando um novo emissor de eventos
    const eventEmitter = new EventEmitter();
```

## .emit
    Função para emitir eventos

```javascript
    // emissor de eventos. Primeiro argumento é o nome do evento
    eventEmitter.emit('saySomethig');
    // pode ter um ou dois parâmetros. O segundo parâmetro são os argumentos da função
    eventEmitter.emit('saySomethig',"Lucas");
```
## .on
    Função para ouvir a emissão de eventos

```javascript
    // recebidor de eventos. Primeiro argumento é o nome do evento, segundo argumento é a função a ser executada
    eventEmitter.on('saySomethig', () => {console.log("Ouvindo")});

```

## .once
    Função para ouvir a emissão de eventos uma única vez
```javascript
    // recebidor de eventos. Primeiro argumento é o nome do evento, segundo argumento é a função a ser executada
    eventEmitter.once('saySomethig', () => {console.log("Ouvindo")});

```

## Como herdar o event emitter para qualquer classe
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
