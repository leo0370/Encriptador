const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")


function btnEncriptar(){
    const TextoEncriptado = encriptar(inputTexto.value)
    mensaje.value = TextoEncriptado;
    inputTexto.value= "" 
}

function encriptar(stringEncriptada){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
     
    for(let i = 0; i< matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
           stringEncriptada= stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    
    return stringEncriptada

    
}
function btnDesencriptar(){
    const TextoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = TextoEncriptado;
    inputTexto.value= "" 
}

function desencriptar(stringDencriptada){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDencriptada = stringDencriptada.toLowerCase();
     
    for(let i = 0; i< matrizCodigo.length; i++){
        if(stringDencriptada.includes(matrizCodigo[i][1])){
           stringDencriptada= stringDencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
    }
    
    return stringDencriptada
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
    alert("texto copiado")
}