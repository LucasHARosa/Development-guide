/*  
    Usando a API do github com axios
*/

const express = require('express');

// axios
const axios = require('axios');

const app = express();

app.listen(3000);


/*
    Axios trabalha com Promisses
    .then(); se houver resposta
    .catch(); se houver erro

*/
app.route('/').get((req, res) => {
    axios.get('https://api.github.com/users/lucasharosa')
    .then(result => res.send(`<img src="${result.data.avatar_url}" />`))

    .catch(error =>console.log(error))
});