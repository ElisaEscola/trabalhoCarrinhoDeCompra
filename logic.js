const express = require('express');
const app = express();
const porta = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/finalizar-venda', (req, res) => {
    const dadosVenda = req.body;
    const preco = parseFloat(dadosVenda.preco);
    const quantidade = parseInt(dadosVenda.quantidade);
    const total = dadosVenda.preco * dadosVenda.quantidade;

    if (!quantidade || isNaN(quantidade) || quantidade <= 0) {
        return res.status(400).json({
            sucesso: false,
            erro: "Dados inválidos na quantidade!"
        });
    }

    if (!preco || isNaN(preco) || preco <= 0) {
        return res.status(400).json({
            sucesso: false,
            erro: "Preço inválido! O valor deve ser maior que zero."
        });
    }

    if (dadosVenda.cupom === "PROMO20") {
        return res.status(201).json({
            mensagem: "Venda com desconto realizada!",
            produto: dadosVenda.produto,
            valorTotal: total * 0.8,
            status: "compra confirmada"
        });
    }
    const totalFormatado = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    return res.send(`Venda de ${dadosVenda.produto} finalizada! O total foi ${total}`);
});

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}!`);
    console.log(`Acesse http://localhost:${porta} para testar.`);
});