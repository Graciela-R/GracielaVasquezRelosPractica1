//comprobar si una cadena es palindroma
var cadena = "this is a sample string";
var cadenacopia = cadena;
var cadenasTotales = cadena.length;
var cadena2 = cadena.charAt(cadenasTotales - 1);
cadenasTotales = cadenasTotales - 1;
for (var i = cadenasTotales - 1; i >= 0; i--) {
    cadena2 = cadena2 + cadena.charAt(i);
}
if (cadenacopia == cadena2) {
    console.log("true");
}
else {
    console.log("false");
}
console.log(cadena2);
