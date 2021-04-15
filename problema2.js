//Problema 2:Dada una cadena mostrarla invertida
var cadena = "cadena porque";
var cadenasTotales = cadena.length;
var cadena2 = cadena.charAt(cadenasTotales - 1);
cadenasTotales = cadenasTotales - 1;
for (var i = cadenasTotales - 1; i >= 0; i--) {
    cadena2 = cadena2 + cadena.charAt(i);
}
// document.write(cadena2);
console.log(cadena2);
