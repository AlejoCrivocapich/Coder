/*let numero = parseInt(prompt("ingrese numero"));


for(let i= 1; i <= 10; i++){
let resultado = numnero * i;
alert(`${numero}* ${i} = ${resultado}`);
}*/

/*for(let turno = 1; turno < 7; turno++){
let nombre = prompt("ingrese su nombre");
alert(`turno # ${turno} Nombre: ${nombre}`)
}*/

/*
//Break
for(let i =0; i<10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
}
console.log("final");*/

//continue saltea el selecionado 
/*
for(let i =0; i<10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}
console.log("final");*/


//let valor =false;

// while(valor){
   // console.log("entramos");
//}

//do{
  //  console.log("entramos");
//}while(valor);



/*switch(valor){
    case valor1:
        codigo a ejecutar en caso de que valor sea igual a valor1
        break;
         case valor2:
        codigo a ejecutar en caso de que valor sea igual a valor2
        break;
        default:codigo a ejecutar en caso de que valor sea igual a valor
        break;
}*/
/*
let moneda="ars";


switch(moneda){
    case "ars":
    console.log("la moneda de argentina");
    break;

    case "cop":
        console.log("la moneda de colombia");
    break;
     case "clp":
    console.log("la moneda de chile");
    break;

    default:
        console.log("la moneda es desconocida");
    break;

}
*/

/*let nombre= prompt("ingrese un nombre");

while(nombre != "ESC"){

switch (nombre){
    case"ANA":
    alert("HOLA ANA");
    break;

    case "JUAN":
        alert("HOLA JUAN");
        break;

        default:
            alert("Quien eres");
            break;
}

}*/

let numero1 =parseInt(prompt("ingrese numero1"));
let numero2 =parseInt(prompt("ingrese numero2"));
let opcion=prompt("seleccione una operacion")

while(opcion !="salir"){
    switch(opcion){

     case"sumar":
     alert("la suma de" +`${numero1}" y "${numero2}"es"`+ (numero1 +numero2));
     break;
     case"restar":
     alert("la resta de"`${numero1}" y "${numero2}"es"`+ (numero1-numero2));
     break;
    case"multiplicar":
     alert("la multiplicacion de"`${numero1}" y "${numero2}"es: "`+ (numero1*numero2));
     break;
    case"dividir":
     alert("la divicion de"`${numero1}" y "${numero2}"es: "`+ (numero1 / numero2));
     break;
    case"default":
     alert("selecione una opcion valida")
     break;
 }
}
