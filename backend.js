
const express = require('express');
const app = express();
const porta = 8080;

app.use (express.json());
app.use (express.urlencoded({extended:true}));

app.post('/finalizar-venda',(req,res) => {
    const dadosVenda =  req.body;
    console.log('dados recebidos:', dadosVenda);
    res.status(200).send('venda processada com sucesso!');
});

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);