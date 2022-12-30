const {EventEmitter} = require('events');
const {inherits} = require('util');
const eventEmitter = new EventEmitter();
eventEmitter.on('saySomethig', () => {console.log("Ouvindo")});
eventEmitter.emit('saySomethig');

 // extraindo inherits de util


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