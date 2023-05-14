
//array vacio
let usuarios=[];

//prompt
let usuario = prompt("Ingrese un usuario");
let contra =prompt("Ingrese la contraseña");
let email= prompt("Ingrese su correo");
let edad = prompt("ingrese su edad");
let continuar=prompt("desea seguir ingresando usuarios? Y/N")

    



//funcion mostrar que muestra en la etiqueta nombre edad mail y id
function Mostrar(Use){
  let lista="";
  for(usua of usuarios){
    lista+= 'Id:  ' + usua.id +
      ' | Nombre: ' + usua.Nombre + 
      ' | Edad:  ' + usua.Edad + 
      ' | mail:  ' + usua.Email + '<br>';
  }
  document.getElementById('mostrar').innerHTML = lista;
}


//funcion para crear el objeto usuario
function usuari(id,nombreu,edadu,mail){
  this.id=id
  this.Nombre=nombreu;
  this.Edad=edadu;
  this.Email=mail;
}
//constructor de usuarios
function crearU(){
  var user=new usuari(usuarios.length + 1,usuario,edad,email)
  usuarios.push(user);
}

//condicional

if(email.endsWith(".com")){
  crearU()
  //bucle
  while(continuar==="Y"){
    
    Promptsingresados()
    crearU()
    continuar=prompt("desea seguir ingresando usuarios? Y/N")
}
//si seleciona N llama a la funcion mostrar
alert("estos son los usuarios ingresados")
Mostrar(usuarios);

}else{
 alert("Correo incorrecto intente otra vez");
 Promptsingresados();
continuar=prompt("desea seguir ingresando usuarios? Y/N")
 //window.location.reload();
}

// funcion para no repetir tanto codigo
function Promptsingresados(){
  
 usuario = prompt("Ingrese un usuario");
 contra =prompt("Ingrese la contraseña");
 email = prompt("Ingrese su correo");
 edad = prompt("ingrese su edad");

}

//boton buscar edad
document.getElementById("btnedad").addEventListener("click", function(){
  let buscaredad= prompt ("Ingrese una edad");

console.log(buscaredad)

let lista="";
for(usuari of usuarios){
  if(usuari.Edad === buscaredad){
  lista+= 'Id:  ' + usuari.id +
    ' | Nombre: ' + usuari.Nombre + 
    ' | Edad:  ' + usuari.Edad + 
    ' | mail:  ' + usuari.Email + '<br>';
}
document.getElementById('mostrar').innerHTML = lista;
}
 

})

//boton id
document.getElementById("btnID").addEventListener("click", function(){
  let buscarid= prompt ("Ingrese una id");

console.log(buscarid)

let lista="";
for(usuari of usuarios){
  if(usuari.id === buscarid){
  lista+= 'Id:  ' + usuari.id +
    ' | Nombre: ' + usuari.Nombre + 
    ' | Edad:  ' + usuari.Edad + 
    ' | mail:  ' + usuari.Email + '<br>';
}
document.getElementById('mostrar').innerHTML = lista;
}
 })
//boton nombre
document.getElementById("btnnombre").addEventListener("click", function(){
  let buscarnombre= prompt ("Ingrese un nombre");

console.log(buscarnombre)

let lista="";
for(usuari of usuarios){
  if(usuari.Nombre === buscarnombre){
  lista+= 'Id:  ' + usuari.id +
    ' | Nombre: ' + usuari.Nombre + 
    ' | Edad:  ' + usuari.Edad + 
    ' | mail:  ' + usuari.Email + '<br>';
}
document.getElementById('mostrar').innerHTML = lista;
}
 

})
//boton correo
document.getElementById("btncorreo").addEventListener("click", function(){
  let buscarcorreo= prompt ("Ingrese un correo");

console.log(buscarcorreo)

let lista="";
for(usuari of usuarios){
  if(usuari.Email === buscarcorreo){
  lista+= 'Id:  ' + usuari.id +
    ' | Nombre: ' + usuari.Nombre + 
    ' | Edad:  ' + usuari.Edad + 
    ' | mail:  ' + usuari.Email + '<br>';
}
document.getElementById('mostrar').innerHTML = lista;
}
 

})
//boton mostrar otra vez la lista
document.getElementById("btnr").addEventListener("click", function(){
  mostrar(usuarios);

})


