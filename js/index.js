let secaoProdutos = document.querySelector(".vitrine")


function listarProdutos(arrProdutos, secao) {

    secao.innerHTML = ""

    for(let i = 0; i < arrProdutos.length; i++) {
        let produto = arrProdutos[i]
        let card = criarCardProduto(produto)
        secao.appendChild(card)
        
    }
}

listarProdutos(data,secaoProdutos)



function criarCardProduto(produto) {
    let id = produto.id
    let imagem = produto.img
    let nameItem = produto.nameItem
    let description = produto.description
    let value = produto.value
    let addCart = produto.addCart
    let tag = produto.tag

    let tagLi = document.createElement("li")

    let tagDiv = document.createElement("div")
    tagDiv.classList.add("card")

    let tagImg = document.createElement("img")
    tagImg.src = imagem
    tagImg.alt = nameItem

    let tagSpan = document.createElement("span")
    tagSpan.innerText = tag

    let tagH3 = document.createElement("h3")
    tagH3.innerText = nameItem

    let tagPDescricao = document.createElement("p")
    tagPDescricao.innerText = description

    let tagPreco = document.createElement("p")
    tagPreco.classList.add("preco")
    tagPreco.innerText = `R$ ${value}.00`

    let btnAdicionarCarrinho = document.createElement("button")
    btnAdicionarCarrinho.classList.add("adicionar")
    btnAdicionarCarrinho.innerText = addCart
    btnAdicionarCarrinho.setAttribute("id",id)

    tagDiv.appendChild(tagImg)
    tagDiv.appendChild(tagSpan)
    tagDiv.appendChild(tagH3)
    tagDiv.appendChild(tagPDescricao)
    tagDiv.appendChild(tagPreco)
    tagDiv.appendChild(btnAdicionarCarrinho)

    tagLi.appendChild(tagDiv)

    return tagLi
}

    


