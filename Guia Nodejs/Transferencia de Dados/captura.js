//Código a ser recebido por outro arquivo:

//Aqui ele puxa o module.exports e atribui a uma variável
const getflagvalue = require('./exports');

//A variavél vira a função criada no outro arquivo
// Nesse caso vamos passar para a função criada em exports uma flag "--name" e retornar o nome colocado
console.log("ola " + getflagvalue("--name"));