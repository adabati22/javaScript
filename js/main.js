
// grados celsius a farenheit

function  conversion (grados) {
    let farenheit = grados *  9/5 
    let resultado = farenheit + 32;
    return alert ("Su temperatura es de " + resultado + "º farenheit" )
 }
 
if(confirm("¿queres convertir celsius a farenheit")){
    
    let celsius= prompt ("ingrese la temperatura en grados Celsius")
    conversion(celsius)
 

}
else{
    alert("gracias por tu visita")
}

//conteo de pares e impares

const numeros =[2,6,23,96,345,76,97,82,35,1 ]
for (let i=0;i<numeros.length; i++){
    if( numeros[i] % 2 ===0){
        console.log(numeros[i] + " es par")
    }
    else{
        console.log(numeros[i] + " es impar")
    }
}
//contar
let contar = 1
while(contar <= 50){
    console.log(contar)
    contar++
}
// edad para salir
const datos =
    {   
        nombre:prompt("ingrese su nombre de pila"),
        edad: prompt("ingrese su edad"),
    }

function mayor (nombre,edad){
if( edad < 18){
    alert (nombre + " estas chiquito para ir a boliche")
}
else if(edad >= 18 && edad <= 21) {
    alert (nombre + " podes ingresar al boliches")
}
else {
    alert ( nombre + " estas para ir a un bar ")
}
}
mayor(datos.nombre, datos.edad)
