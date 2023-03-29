let secaoCarrinho = document.querySelector(".compras")



let carrinhoCompras = []

listarProdutosCarrinho(carrinhoCompras,secaoCarrinho)

function listarProdutosCarrinho(arrProdutos,secao) {
    secao.innerHTML = ""
    if(carrinhoCompras.length == 0) {
        let tagDiv = document.createElement("div")
        tagDiv.classList.add("semCompras")

        let tagH3 = document.createElement("h3")
        tagH3.innerText = "Carrinho vazio"

        let tagP = document.createElement("p")
        tagP.innerText = "Adicione itens"

        tagDiv.appendChild(tagH3)
        tagDiv.appendChild(tagP)
        
        secao.appendChild(tagDiv)
    } else {

    for(let i = 0; i < arrProdutos.length; i++) {
       let produto = arrProdutos[i]
       let card = criarCardCarrinho(produto)
       secao.appendChild(card)
    }
}
}

function criarCardCarrinho(produto) {
        let id = produto.id
        let imagem = produto.img
        let h3 = produto.nameItem
        let p = produto.value

        let tagLi = document.createElement("li")

        let tagImg = document.createElement("img")
        tagImg.src = imagem
        tagImg.alt = h3

        let tagDiv = document.createElement("div")
        tagDiv.classList.add("itemLista")

        let tagH3 = document.createElement("h3")
        tagH3.innerText = h3

        let tagP = document.createElement("p")
        tagP.innerText = `R$ ${p},00`

        let tagButton = document.createElement("button")
        tagButton.innerText = "Remover Produto"
        tagButton.setAttribute("id",id)

        tagLi.appendChild(tagImg)
        tagDiv.appendChild(tagH3)
        tagDiv.appendChild(tagP)
        tagDiv.appendChild(tagButton)
        tagLi.appendChild(tagDiv)

        return tagLi
        

    


    
}


secaoProdutos.addEventListener("click",adicionarProdutoCarrinho)



function adicionarProdutoCarrinho(event) {
    let btnComprar = event.target

    if(btnComprar.tagName == "BUTTON") {
        let idProduto = btnComprar.id
        let produto = data.find(function(produto) {
            if(produto.id == idProduto) {
                return produto
            }
        })
        adicionarCarrinho(produto)
    }
}

function adicionarCarrinho(produto) {
    if(produto !== undefined) {
        carrinhoCompras.push(produto)
        listarProdutosCarrinho(carrinhoCompras,secaoCarrinho)
    } 
    }




secaoCarrinho.addEventListener("click",excluirProdutoCarrinho) 

function excluirProdutoCarrinho(event) {
    let btnExcluir = event.target

    if(btnExcluir.tagName == "BUTTON") {
        let idProduto = btnExcluir.id

        let produto = data.find(function(produto) {
            if(idProduto == produto.id) {
                carrinhoCompras.splice(carrinhoCompras.indexOf(produto),1)
                listarProdutosCarrinho(carrinhoCompras,secaoCarrinho)
            }
        })

        
    }
}









