let total;
limpar();

function adicionar() {
    if (document.getElementById("quantidade").value > 0) {
        let produto = document.getElementById("produto").value;
        let quantidade = document.getElementById("quantidade").value;
        let nomeProduto = produto.split("-")[0];
        let valorUn = produto.split("R$")[1];
        let preco = quantidade * valorUn;
        let carrinho = document.getElementById("lista-produtos");
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco},00</span></section>`;
        total = total + preco;
        let campoTotal = document.getElementById("valor-total");
        campoTotal.textContent = `R$ ${total},00`;
        document.getElementById("quantidade").value = "";
    } else {
        alert("Insira a quantidade");
    }
}

function limpar() {
    total = 0;
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").textContent = "R$ 0,00";
}