//Dado un numero n determinar si es primo o no
let numero=7;
var division=1;
let contador=0;
while(division<=numero){
    if(numero% division==0){
        contador=contador+1;
    }
    division++;
}
if(contador==2){
 document.write("true");

}
else{
    document.write("false");
}
