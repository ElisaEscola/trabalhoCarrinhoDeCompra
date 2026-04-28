const express = require('express');
const app = express();
const porta = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/finalizar-venda', (req, res) => {
    const dadosVenda = req.body;
    const total = dadosVenda.preco * dadosVenda.quantidade;

    if (!dadosVenda.quantidade || isNaN(dadosVenda.quantidade)) {

        return res.status(400).json({
            sucesso: false,
            erro: "Dados invalidos na quantidade!"
        })

    }


    res.send(`Venda de ${dadosVenda.nome} finalizada! O total foi ${total}`)

    if (dadosVenda.cupom === "PROMO20") {
        return res.status(201).json({
            mensagem: "Venda realizada com sucesso!",
            produto: dadosVenda.produto,
            valorTotal: total,
            status: "compra confirmada confirmado"
        })
    }

});

app.listen(porta, () => {
    console.log(`Servidor rodando! Aguardando o formulário HTML na porta ${porta}...`);
});