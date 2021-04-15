//Realice un programa en el cual se le proporcionara dos cadenas, y su trabajo
//consistiria en encontrar  el numero de caracteres similares que tiene entre ellos
//incluyendo los repetidos
let cadena1:String="abca";
let cadena2:String="xyzbac";
let vector=new Array();
let contador=0;
let posicion=-1;
let retorno;
for(let i=0;i<cadena1.length;i++){
    for(let j=0;j<cadena2.length;j++){
        if(cadena1[i]==cadena2[j]){
           if( existe(j)!=true){
            contador++;
            insertar(j);
            break;
           }
        }
              
        }
        
    }
    console.log(contador);
    
function existe(x){
    for(let i=0;i<vector.length;i++){
        if(vector[i]==x){
            console.log(vector);
            return true;
        }
    }

}
function insertar(j){
    vector[vector.length]=j;
}

