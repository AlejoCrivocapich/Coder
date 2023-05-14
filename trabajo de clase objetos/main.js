//el arreglo vacio
const estudiante =[];

//pide los datos del alumno al usuario y ingresa el primero mediante la funcion crearE
let nombre= prompt("ingrese un nombre");
let edad=prompt("ingrese su edad");
let CI=prompt("Ingrese su documento de identidad");
let opcion=prompt("Dese Ingresar otro Estudiante? si/no")
crearE()

//mientras el usuario quiera seguir ingresando estudiantes se seguiran pidiendo datos
while(opcion==="si"||opcion==="Si"){
    nombre= prompt("ingrese un nombre");
    edad=prompt("ingrese su edad");
     CI=prompt("Ingrese su documento de identidad");
    opcion=prompt("Dese Ingresar otro Estudiante? si/no")
    crearE()
}
//si El usuario da que no muestra los estudiantes ingresados por la funcion
Mostrar(estudiante);
console.log(estudiante);


//crea la base para ingresar un alumno
function alumno(id,nombreP,edadP,ciP){
    this.id=id
    this.Nombre=nombreP;
    this.Edad=edadP;
    this.Ci=ciP;
}
//pasa los parametros ingresados de prompt en la funcion alumno y mediante el push lo ingresa en estudiante
function crearE(){
    var estudiant=new alumno(estudiante.length + 1,nombre,edad,CI)
    estudiante.push(estudiant);
}
//Recorre el cada objeto del arreglo mediantelos .algo y los ingresa en lista que esta vacia, luego obtiene el id de mostrar y iguala su contenido a lo que posee lista adentro
function Mostrar(alumno){
    let lista="";
    for(alumno of estudiante){
      lista+= 'Id:  ' + alumno.id +
        ' | Nombre: ' + alumno.Nombre + 
        ' | Edad:  ' + alumno.Edad + 
        ' | Ci:  ' + alumno.Ci + '<br>';
    }
    document.getElementById('mostrar').innerHTML = lista;
  }
