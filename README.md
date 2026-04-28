# trabalhoCarrinhoDeCompra
O Front-end (HTML):
Criar um arquivo index.html com um formulário que peça as seguintes informações:
Nome do Produto (input text)
Preço Unitário (input number)
Quantidade (input number)
Cupom de Desconto (input text)
O formulário deve usar o método POST e apontar para a rota: http://localhost:8080/finalizar-venda.


2. O Back-end (Node.js + Express):
Configurar o servidor na porta 8080.
Não esqueçam de usar os tradutores express.json() e express.urlencoded({ extended: true }).
Criar a rota app.post('/finalizar-venda') para receber os dados via req.body.


4. As Regras de Negócio (A Lógica):
O seu servidor precisa processar a venda seguindo estas regras:
Validação de Segurança: Se a quantidade for menor que 1 ou o preço for menor ou igual a zero ➔ Status 400 (Bad Request) com mensagem de erro.
Cálculo: O sistema deve calcular o valorTotal = quantidade * preco.
O Cupom Especial: Se o cliente digitar o cupom "PROMO20", o sistema deve aplicar 20% de desconto no valor total.
Resposta de Sucesso: Se tudo estiver certo ➔ Status 201 (Created), devolvendo um JSON com o nome do produto, o valor final a pagar e uma mensagem de confirmação.



📝 Critérios de Avaliação (Visto no Lab):
[0,5 pt] Formulário HTML enviando dados via POST corretamente.
[0,5 pt] Servidor recebendo dados pelo req.body sem erros.
[0,5 pt] Lógica de cálculo e aplicação do cupom "PROMO20" funcionando.
[0,5 pt] Uso correto dos Status Codes (400 para erro e 201 para sucesso).


ola