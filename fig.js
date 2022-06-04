console.group("cuadrado");
//const cuadrado = 5;
//console.log("los lados del cuadrado miden: "+ cuadrado +"cm");
function pcuadrado(lado){
    return lado*4;
} 
//console.log("el perimetro mide: "+ pcuadrado +"cm");
function acuadradio(lado) {
    return lado*lado;
}
//console.log("su area mide: "+ acuadrado +"cm2");
console.groupEnd();


console.group("triangulo");
//const lt1 = 6;
//const lt2 = 6;
//const baset3 = 4;
//const ht = 5.5;
function pt (lado1, lado2, base){
    return lado1+lado2+base;
}
function at(base,altura) {
    return (base*altura)/2;
}

//const pt = lt1+lt2+baset3;
//const at = (ht*baset3)/2;
console.log("El perimetro triangulo: "+ pt+"cm");
console.log("El area del triangulo: "+ at +"cm2");





console.groupEnd();
console.group("circulo");
const radio = 4;
console.log("el radio es:"+radio);
const diametro = radio*2;
console.log("el diametro es:"+diametro);
const pi = Math.PI;
console.log("pi es:"+pi);
const circunferencia = radio* (2*pi);
console.log("la circunferencia del circulo es:"+circunferencia);
const areacirculo = (radio*radio)* pi;
console.log("el area del circulo es:"+ areacirculo);
console.groupEnd();