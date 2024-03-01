
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".text-mensaje");
const btnCopiar = document.querySelector(".btn-copiar");


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEntrada = textArea.value.trim(); // Obtener el texto de entrada y eliminar espacios en blanco al inicio y al final
    
    if (textoEntrada === "") { // Verificar si el texto está vacío
        alert("Por favor ingrese texto antes de encriptar."); // Mostrar un mensaje de alerta si el texto está vacío
        return; // Salir de la función si el texto está vacío
    }
    
    const textoEncriptado = encriptar(textoEntrada); // Encriptar el texto
    mensaje.value = textoEncriptado; // Mostrar el texto encriptado en el área de mensajes
    textArea.value= ''; // Limpiar el área de entrada
    mensaje.style.backgroundImage= 'none'; 
}

function encriptar (stringEncriptada) {

    let matrizLlaves = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "afat"]];
    stringEncriptada =stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizLlaves.length; i++) {
        if (stringEncriptada.includes(matrizLlaves[i][0])) {
            stringEncriptada=stringEncriptada.replaceAll(matrizLlaves[i][0], matrizLlaves[i][1]);
        }
       
        
    }
    return stringEncriptada;

}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value= ''; 
}


function desencriptar (stringdesencriptada) {

    let matrizLlaves = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "afat"]];
    stringdesencriptada =stringdesencriptada.toLowerCase();

    for (let i = 0; i < matrizLlaves.length; i++) {
        if (stringdesencriptada.includes(matrizLlaves[i][1])) {
            stringdesencriptada=stringdesencriptada.replaceAll(matrizLlaves[i][1], matrizLlaves[i][0]);
        }
       
        
    }
    return stringdesencriptada;

}


btnCopiar.addEventListener('click', function() {
    mensaje.select();
    document.execCommand("copy");
    mensaje.value= '';
    alert("Texto copiado al portapapeles");
});





