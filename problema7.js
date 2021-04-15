//Realice un programa en el cual se le proporcionara dos cadenas, y su trabajo
//consistiria en encontrar  el numero de caracteres similares que tiene entre ellos
//incluyendo los repetidos
var cadena1 = "abca";
var cadena2 = "xyzbac";
var vector = new Array();
var contador = 0;
var posicion = -1;
var retorno;
for (var i = 0; i < cadena1.length; i++) {
    for (var j = 0; j < cadena2.length; j++) {
        if (cadena1[i] == cadena2[j]) {
            if (existe(j) != true) {
                contador++;
                insertar(j);
                break;
            }
            /* else if(cadena1[0]==cadena2[0]){
                    contador++;
                    vector[0]=j;
                    break;

                }*/
        }
    }
}
console.log(contador);
function existe(x) {
    for (var i = 0; i < vector.length; i++) {
        if (vector[i] == x) {
            console.log(vector);
            return true;
        }
    }
}
function insertar(j) {
    vector[vector.length] = j;
}
