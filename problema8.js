//dado un numero N encontrar  los N primeros numeros primos
var N = 9;
var contador2 = 0;
var contadorprimo = 0;
var i = 1;
while (contadorprimo < N) {
    for (var j = 1; j <= i; j++) {
        if (i % j == 0) {
            contador2++;
        }
    }
    if (contador2 == 2) {
        contadorprimo++;
        console.log(i + " ");
    }
    contador2 = 0;
    i++;
}
