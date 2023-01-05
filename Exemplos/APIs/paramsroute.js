/*  
Formas de passar parâmetros para a requisição
2- route params: passa parâmetros atráves da rota do link
*/

//chamar o express (o servidor que vai mostrar a página)
const express = require('express');

//instanciando express em uma variável
const app = express();

// Cria a porta para o navegador em "localhost:3000"
// Rodar com "node nomeDoArquivo.js"
app.listen(3000);

//O GET puxa informações da rota
app.route('/').get((req, res) => res.send("rota normal"));

/*
    - Usamos o app Insomnia para criar o seguinte GET:
    - Com o seginte caminho:
        localhost:3000/qualquercoisa
*/

app.route('/:variavel').get ((req, res) => {
    res.send(req.params.variavel); // req.params é a forma de puxar oq foi passado pela rota em requisição
})