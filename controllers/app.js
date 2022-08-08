const express = require('express');
const rotasProdutos = require('./rotas/rotasProdutos');
let app = express();

app.get('/', (req, res) => res.send('Olá mundo'));
app.get('/contatos', (req, res) => res.send('Pagina contatos'));

app.use('/produtos', rotasProdutos);

app.listten(3000, () => console.log('Servidor rodando na porta 3000'));