let usuario = prompt("Ingrese un usuario");
let contra =prompt("Ingrese la contraseña");
let email= prompt("Ingrese su correo");



if(email.endsWith(".com")){
  while(contra !== usuario){
    alert("Usuario y Contraseña no validos, intente otra vez")
   usuario= prompt("Ingrese un usuario");
    contra= prompt("Ingrese la contraseña");
}
alert("Bienvenido : "+ `${usuario}`);
}else{
 alert("Correo incorrecto intente otra vez");
 window.location.reload();
}

