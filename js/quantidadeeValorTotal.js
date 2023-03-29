let secaoQuantidadeEValorTotal = document.querySelector(".qntEValor")

secaoProdutos.addEventListener("click",somaCarrinho)

let soma = 0
let quantidade = 0



function somaCarrinho(event) {
    
    let btnComprar = event.target


    if(btnComprar.tagName == "BUTTON") {
        let idProduto = btnComprar.id
        let produto = data.find(function(produto) {
            if(idProduto == produto.id) {
                quantidade++
                for(let i = 0; i < carrinhoCompras.length; i++) {
                    valor = carrinhoCompras[i]["value"]
                }
                soma += valor
        
                quantidadeEValor()

            }
        })

    }
}


function quantidadeEValor() {
    secaoQuantidadeEValorTotal.innerHTML = ""
        if(carrinhoCompras.length > 0) {

        let divCompra = document.createElement("div")
        divCompra.classList.add("compra")

        let divQuantidade = document.createElement("div")
        divQuantidade.classList.add("qnt")

        let pQnt = document.createElement("p")
        pQnt.innerText = "Quantidade:"

        let pNumeroQnt = document.createElement("p")
        pNumeroQnt.innerText = quantidade

        let divTotal = document.createElement("div")
        divTotal.classList.add("total")

        let pTotal = document.createElement("p")
        pTotal.innerText = "Total:"

        let pNumeroTotal = document.createElement("p")
        pNumeroTotal.innerText = `R$ ${soma},00`

        divQuantidade.appendChild(pQnt)
        divQuantidade.appendChild(pNumeroQnt)

        divTotal.appendChild(pTotal)
        divTotal.appendChild(pNumeroTotal)

        divCompra.appendChild(divQuantidade)
        divCompra.appendChild(divTotal)

        secaoQuantidadeEValorTotal.appendChild(divCompra)
    } 

    
}




secaoCarrinho.addEventListener("click",diminuirValorEQnt)

function diminuirValorEQnt(event) {
    let btnExcluir = event.target

    if(btnExcluir.tagName == "BUTTON") {
        let idProduto = btnExcluir.id
        quantidade--
    
        soma -= data[(idProduto) -1]["value"]

        

        quantidadeEValor() 

    }

}

   






