const express = require('express');
const app = express();
const porta = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/salvar-contato', (req, res) => {
   
    // Agora usamos req.body porque os dados vêm escondidos do formulário HTML!

});

app.listen(porta, () => {
    console.log(`Servidor rodando! Aguardando o formulário HTML na porta ${porta}...`);
});