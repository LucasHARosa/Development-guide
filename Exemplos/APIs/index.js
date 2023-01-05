//chamar o express (o servidor que vai mostrar a página)
const express = require('express');

//instanciando express em uma variável
const app = express();

// Cria a porta para o navegador em "localhost:3000"
// Rodar com "node nomeDoArquivo.js"
app.listen(3000);
let author = "Luquinhas";

/*
    
Sobre os verbos http:
    - req: requisição
    - res: resposta
    - .route: Rotas. Caminho que o arquivo vai fazer.
        Ex: localhost:3000/sobre
    - .send: envia como resposta do método
*/

//O GET puxa informações da rota
app.route('/').get((req, res) => res.send(author));

//middleware. Usado sempre para enviar algum arquivo json
app.use(express.json());

/*
    - Post atualiza a página com as informações presentes no req
    - Usamos o app Insomnia para criar um POST 
*/
app.route('/').post((req, res) => res.send(req.body));

/*
    - Put atualiza a página resgatando informações presentes no req
    - Usamos o app Insomnia para criar um PUT
*/

app.route('/').put((req, res) => {
    author = req.body.author;
    res.send(author);
});
/*
    - Delete deleta alguma informação da página
    - No Insomnia usamos o caminho localhost:3000/algumacoisa
*/
app.route('/:identificador').delete((req, res) => {
    res.send(req.params.identificador);
})
