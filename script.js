function ValidaForm(){
    var usuario = document.getElementById("username").value;
    if(usuario.length==0){
        alert("El campo usuario es obligatorio");

    }else if(usuario.length>15){
        alert("Demasiados caracteres para el usuario");
    }




var contra = document.getElementById("password").value;  
var espacios = false;
var cont = 0;

while (!espacios && (cont < p1.length)) {
  if (p1.charAt(cont) == " ")
    espacios = true;
  cont++;
}
   
if (espacios) {
  alert ("La contraseña no puede contener espacios en blanco");
  return false;
}

}