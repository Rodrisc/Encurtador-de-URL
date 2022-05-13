// // function verificar(){
// let controle = document.getElementById("controle")
// var text = controle.value
// var botao = document.getElementById("botao")

// controle.addEventListener("input", (e) => {
//     if(controle.value === ""){
        

//         botao.disabled = true
//         botao.style.backgroundColor = "#6d8091"

//     } else{
//         botao.disabled = false
//         botao.style.backgroundColor = "#0075d9"
//         console.log(controle.value)

//     }
// })
// botao.disabled = true


// // }

   

$(document).ready(function () {

    $('#controle').val('')
})
//     $('#controle').on('input', function () {

//         if ($(this).val() != '') {
//             $('#button').prop('disabled', false);
//         }
//         else {
//             $('#button').prop('disabled', true);
//         }
//     });
// });

$('#controle').on('input', function(){
    var url = $('#controle').val()
    var posicao_do_ponto =  url.lastIndexOf('.')
    var url_recebida_ultimo_ponto = url.substr(posicao_do_ponto)

   if(url_recebida_ultimo_ponto.length != 1 & $(this).val() != ''){
       
       $('#button').prop('disabled', false)
   } else{
       
       $('#button').prop('disabled', true)
   }
    
    
    // if($('#controle').val() >= 1){
    //     console.log('url aceita')
    // }else {
    //     console.log('url não aceita')
    // }
})
