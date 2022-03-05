async function copiarTexto (){
    let TextoCopiado = document.getElementById("texto");
    await navigator.clipboard.writeText(TextoCopiado);
    alert('Texto copiado: '+ TextoCopiado)
    

}