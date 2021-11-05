function ValidaForm(){
    var usuario = document.getElementById("username").value;
    if(usuario.length==0){
        alert("El campo usuario es obligatorio");

    }else if(usuario.length>15){
        alert("Demasiados caracteres para el usuario");
    }else if(usuario.length<3){
        alert("El nombre debe tener mas de 3 caracteres");
    }

}