function getFlag(str){
    // procura a posição da flag na linha de comando
    let index=process.argv.indexOf(str);
    // retorna a string seguinte a flag
    return process.argv[index+1];
}

//exporta uma função
module.exports = getFlag;

/*
Código a ser recebido por outro arquivo:

Aqui ele puxa o module.exports e atribui a uma variável
const getflagvalue = require('./exports');

A variavél vira a função criada no outro arquivo
console.log("ola " + getflagvalue("--name"));
*/
