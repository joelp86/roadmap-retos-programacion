//OPERADORES ("Aritmeticos")

//SUMA

var suma = 2 + 3;
console.log(suma);
//devuelve 5

//RESTA
var resta = 5 - 2;
console.log(resta);
//devuelve 3

//MULTIPLICACION

var multiplicar = 5 * 2 ;
console.log(multiplicar);
//devuelve 10

//DIVISION

var dividir = 20/ 2 ;
console.log(dividir);
//devuelve 10

//MODULO / RESTO

var modulo = 20 % 5 ;
console.log(modulo);
//devuelve 0

//Operadores y precedencias:
//Lista de operadores de mayor a menor

/* 1- Parentesis ()
2- Exponenciacion **
3- Multiplicacion: Division / , Modulo%
4- Suma (+) , Resta (-)
*/
//Ejemplo:

var resultado = 5 + 3 * 2;
console.log(resultado);// devuelve 11
//Primero se multiplica 3 * 2 y luego se suma 5

var resultado = (5 + 3) * 2;
console.log(resultado); //devuelve 16
//Primero se suma 3 + 2 ,luego se multiplica por 2


//Operador de ADICION
var cadena = "El resultado es:" + 5;
console.log(cadena);//devuelve el resultado es: 5

//OPERADORES DE COMPARACION:

//MAYOR QUE (>)
console.log(5 > 4);//deuelve TRUE.

//MENOR QUE (<)
console.log(6 < 5);//devuelve FALSE.

//MAYOR O IGUAL (> =)
console.log(5 >= 5);//devuelve TRUE.

//MENOR O IGUAL (< =)
console.log(4 <= 5);//devuelve true

//IGUAL A ==
console.log("5"== 5);//devuelve TRUE.

 //OPERADORES DE ASIGNACION:

 //IGUALDAD == , ===
 console.log("5" == 5);//devuelve TRUE

 console.log("3"=== 3);//DEVUELVE false
 console.log(8 === 8); //devuelve TRUE.


 //OPERADORES LOGICOS:
  // 1- &&(AND)

  (5 < 2) && (5 > 3); //FALSE

  // 2- || (OR)
  (5 < 2) || (5 > 3); //TRUE

  // 3- ! (NOT)

  !(5 < 2 ); // TRUE

 
