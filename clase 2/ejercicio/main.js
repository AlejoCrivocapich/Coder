// pedido de los numeros por medio del prompt
let numero1 = parseInt(prompt("ingrese el primer numero"));
let numero2 = parseInt(prompt("ingrese el segundo numero"));

// comprobacion si Los numeros son par
if((numero1 % 2) ==0 && (numero2 % 2) == 0){
    alert("los 2 son numeros par")
}else if (numero1 %2==0 && numero2 %2!=0){
    alert("el numero"+numero1+"es par")
}else if(numero1 %2 !=0 && numero2 %2 ==0){
   alert("el numero"+numero2+"es par")
}else{
  alert("ninguno de los 2 son par")
}


// pedido de operacion y calculadora
let calculo = prompt("ingrese la operacion a realizar ");

if(numero1!= ""  && numero2 !="" && calculo ==="sumar" || calculo ==="Sumar" ){
 alert(numero1 + numero2)
}else if(numero1!= "" && numero2 !="" && calculo ==="restar" || calculo ==="Restar" ){
    alert(numero1 - numero2)
}else if(numero1!= "" && numero2 !="" && calculo ==="multiplicar" || calculo ==="Multiplicar" ){
    alert(numero1 * numero2)
}else if(numero1!= "" && numero2 !="" && calculo ==="dividir" || calculo ==="Dividir" ){
    alert(numero1 / numero2)
}else{
    alert("ingrese una operacion valida");
}