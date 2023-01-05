/*  
Formas de passar parâmetros para a requisição
3- query params: passa parâmetros atráves da rota do link
*/

//chamar o express (o servidor que vai mostrar a página)
const express = require('express');

//instanciando express em uma variável
const app = express();

// Cria a porta para o navegador em "localhost:3000"
// Rodar com "node nomeDoArquivo.js"
app.listen(3000);


/*
    O GET puxa informações da rota
    - Usamos o app Insomnia para criar o seguinte GET:
    - Com o seginte caminho:
        localhost:3000?nome=Lucas&cidade=Brasilia
*/
app.route('/').get((req, res) => res.send(`meu nome é ${req.query.nome} e minha cidade é ${req.query.cidade}`));

