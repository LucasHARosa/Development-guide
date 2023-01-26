//chamar o express (o servidor que vai mostrar a página)
const express = require('express');

//instanciando express em uma variável
const app = express();

//A ferramenta que vamos usar para mostrar o html é o ejs
app.set("view engine", "ejs")

// rota de renderização da página .ejs (se espera que o index.ejs esteja dentro da pasta views)
app.get('/', (req, res) => {
    const itens = [
        {
            id: "E",
            name: ' xemplo',
        },
        {
            id: "X",
            name: '',
        },
        {
            id: "E",
            name: '',
        },
        {
            id: "M",
            name: '',
        },
        {
            id: "P",
            name: '',
        },
        {
            id: "L",
            name: '',
        },
        {
            id: "O",
            name: '',
        }
    ]
    const subtitle = "Uma linguagem de modelagem para a criação de uma página HTML utilizando JS"
    res.render('pages/index', {
        objetos: itens,
        subtitle: subtitle,
    });
});

app.get('/sobre', (req, res) => {
    res.render('pages/about');
});

// Servidor fica rodando na máquina na porta 8080 (localhost:8080)
// Devemos rodar o projeto como "node server.js"
app.listen(8080); 
console.log("Servidor fica rodando na máquina na porta 8080")
