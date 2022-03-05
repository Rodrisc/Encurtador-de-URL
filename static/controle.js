// function verificar(){
let controle = document.getElementById("controle")
var text = controle.value
var botao = document.getElementById("botao")

controle.addEventListener("input", verifica_input, true)
botao.disabled = true

function verifica_input(){


    if(document.getElementById("controle").value === ""){
        

        botao.disabled = true
        botao.style.backgroundColor = "#6d8091"

    } else{
        botao.disabled = false
        botao.style.backgroundColor = "#0075d9"
        // console.log(document.getElementById("controle").value)
    }

}

// }


