//Determinar la cantidad minima de pares
var vector = new Array();
var vectorcaracter = new Array();
var vectornumeros = new Array();
var N = 4;
var contador = 0;
var caracter;
var variable = 0;
var variable2 = "0";
var variable3 = "0";
vector = ['kambei', 'gorobei', 'shichiroji', 'kyuso', 'heihachi', 'katsuschiro', 'kikochiyo'];
//vector=['jorge','jose','oscar','jerry'];
for (var i = 0; i < vector.length; i++) {
    for (var j = 0; j < vector.length; j++) {
        variable2 = vector[i];
        variable3 = vector[j];
        if (variable2.charAt(0) == variable3.charAt(0)) {
            contador++;
        }
    }
    if (contador > 1) {
        if (vectorcaracter[vectorcaracter.length - 1] != vector[i].charAt(0)) {
            vectorcaracter[vectorcaracter.length] = vector[i].charAt(0);
            vectornumeros[vectornumeros.length] = contador;
        }
    }
    contador = 0;
}
for (var i = 0; i < vectornumeros.length; i++) {
    variable = vectornumeros[i] / 2;
    console.log(Math.floor(variable) + " ");
}
