function ValidarContacto(){
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

    var email = document.getElementById("email").value;
    if(email.length==0){
        alert("Elemento vacio email");
    }else if(email.length>40){
        alert("Demasiados Caracteres email");
    }else if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){
        alert("La dirección de email " + email + " es correcta.");
    } else {
        alert("La dirección de email es incorrecta." + email);
    }
}