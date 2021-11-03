function ValidarForm(){
    var nombre = document.getElementById("nombre").value;
    if(nombre.length==0){
        alert("Elemento vacio nombre");
    }else if(nombre.length>15){
        alert("Demasiados Caracteres nombre");
    }

    var apellidos = document.getElementById("apellidos").value;
    if(apellidos.length==0){
        alert("Elemento vacio apellidos");
    }else if(apellidos.length>35){
        alert("Demasiados Caracteres apellidos");
    }
}