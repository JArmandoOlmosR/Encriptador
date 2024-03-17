let output;

//validaremos si hay texto 
function encriptar (){
    if(validar()){
        //obtenemos los valores de la entrada para colocarlos en la salida que mos va a dar
        document.getElementById("container-nino").style.display = "none";
        document.getElementById("container-salida").style.display = "inline";
        output = document.getElementById("texto-entrada").value;
        //Cambiamos cada letra por otras para hacer la encriptacion
        output = output.replaceAll('e','enter');
        output = output.replaceAll('i', 'imes');
        output = output.replaceAll('a', 'ai');
        output = output.replaceAll('o', 'ober');
        output = output.replaceAll('u', 'ufat');
        document.getElementById("texto-salida").value = output;
        return;
    }else{
        //sino mandamos una advertencia para que coloquen texto
        alert("EL texto introducido es inválido, no debe contener mayúsculas ni caracteres especiales");
    }
}


//hacemos lo mismo pero ahora para desencirptar
function desencriptar (){
    if(validar()){
        document.getElementById("container-nino").style.display = "none";
        document.getElementById("container-salida").style.display = "inline";
        output = document.getElementById("texto-entrada").value;
//volvemos a los valores del inicio para desencriptar
        output = output.replaceAll('ai', 'a');
        output = output.replaceAll('enter','e');
        output = output.replaceAll('imes', 'i');
        output = output.replaceAll('ober', 'o');
        output = output.replaceAll('ufat', 'u');
        document.getElementById("texto-salida").value = output;
        return;
    }else{
        alert("EL texto introducido es inválido, no debe contener mayúsculas ni caracteres especiales");
    }
}

function validar (){
    //hacemos una condicion que solo acepte minusculas
    for (let letra of document.getElementById("texto-entrada").value){
        if (!"abcdefghijklmnñopqrstuvwxyz ".includes(letra)){
            return false;
        }
    }
    return true;
}


//tratamos de copiar el texto que obtenemos de salida
function copiar(){
    navigator.clipboard.writeText(document.getElementById("texto-salida").value);
}

function salidaValida(){
    if(true){

    }
}