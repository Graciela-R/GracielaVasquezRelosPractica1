//problema 6
let matriz=[[0,1,1,2],[0,5,0,0],[2,0,3,3]];
let suma=0;
let funcion;

let agarrecolumna= new Array();
for(let i=0;i<matriz.length;i++){
    for(let j=0;j<matriz.length;j++){
        if(matriz[i][j]!=0){
          funcion=existeb(j);
          if(funcion==1){
            suma=suma+matriz[i][j];
            console.log(suma);
          }
        }
        else{
           
            agarrecolumna[agarrecolumna.length]=j;
        }
    }
}
console.log(suma);
function existeb(j) {
    let contador3=0;
    for(let k=0;k<agarrecolumna.length;k++){
        if(j!=agarrecolumna[k]){
            contador3 ++;
        }

    }
    if(contador3==agarrecolumna.length-1){
     return 1;
    }
    else{
        return 0;
    }
}
