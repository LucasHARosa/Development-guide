/*  
Formas de passar parâmetros para a requisição
1- body params
*/

//chamar o express (o servidor que vai mostrar a página)
const express = require('express');

//instanciando express em uma variável
const app = express();

// Cria a porta para o navegador em "localhost:3000"
// Rodar com "node nomeDoArquivo.js"
app.listen(3000);


//middleware. Usado sempre para enviar algum arquivo json
app.use(express.json());

/*
    - Post atualiza a página com as informações presentes no req
    - Usamos o app Insomnia para criar o seguinte POST:
    {
	    "author" : "Lucas Rosa",
	    "atividade": "APIs"
    }
    - Com o seginte caminho:
        localhost:3000

*/
app.route('/').post((req, res) => {
    let {author, atividade} = req.body;
    res.send(`O author é ${author} atividade ${atividade}`);
});