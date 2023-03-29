
let filtro = document.querySelector(".menu ul")

filtro.addEventListener("click",filtrarItens)

function filtrarItens(event) {
    let arrayFiltro = []

    let btnFiltro = event.target
    
    if(btnFiltro.tagName == "BUTTON") {
        if(btnFiltro.id == 2) {
            for(let i = 0; i < data.length; i++) {
                if(data[i]["tag"].includes('Acessórios')) {
                    arrayFiltro.push(data[i])
                    listarProdutos(arrayFiltro,secaoProdutos)
                }
            }
        } if(btnFiltro.id == 1) {
            for(let i = 0; i < data.length; i++) {
                listarProdutos(data,secaoProdutos)
            }
        } if(btnFiltro.id == 3) {
            for(let i = 0; i < data.length; i++) {
                if(data[i]["tag"].includes('Calçados')) {
                    arrayFiltro.push(data[i])
                    listarProdutos(arrayFiltro,secaoProdutos)
                }
            }
        } if(btnFiltro.id == 4) {
            for(let i = 0; i < data.length; i++) {
                if(data[i]["tag"].includes('Camisetas')) {
                    arrayFiltro.push(data[i])
                    listarProdutos(arrayFiltro,secaoProdutos)
                }
            }
        }
    }

}

let inputBusca = document.querySelector(".pesquisar input")

let btnBusca = document.querySelector(".pesquisar button")

btnBusca.addEventListener("click",function(){
    let pesquisaUsuario = inputBusca.value

    let resultadoBusca = busca(pesquisaUsuario)

    listarProdutos(resultadoBusca,secaoProdutos)

    inputBusca.value = ""
})

function busca(valorPesquisa) {
    let resultBusca = []

    for(let i = 0; i < data.length; i++) {
        let pesquisa = valorPesquisa.toLowerCase()
        let nomeProduto = data[i]["nameItem"].toLowerCase()

        if(nomeProduto.includes(pesquisa)) {
            resultBusca.push(data[i])
        }
    }
    return resultBusca
}

inputBusca.addEventListener("keyup",function(event) {
    if(event.keyCode == 13) {
        let pesquisaUsuario = inputBusca.value

        let resultadoBusca = busca(pesquisaUsuario)

        listarProdutos(resultadoBusca,secaoProdutos)

        inputBusca.value = ""
    }
})


