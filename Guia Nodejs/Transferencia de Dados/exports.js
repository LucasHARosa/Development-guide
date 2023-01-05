// Nesse caso vamos mandar uma flag na linha de execução do arquivo do tipo "node captura.js --name lucas"

function getFlag(str){
    // procura a posição da flag na linha de comando
    let index=process.argv.indexOf(str);
    // retorna a string seguinte a flag
    return process.argv[index+1];
}

//exporta uma função
module.exports = getFlag;

