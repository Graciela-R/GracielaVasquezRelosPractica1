//Dado un array de enteros, encontrar un par de elementos adyacentes
//tales que tengan el producto mas grande
 var array=[1,0,1,0,1000];
 var cantidad=0, cantidad2=0;
 
 for(let i=0;i<array.length-1;i++){
   cantidad= array[i]*array[i+1];
   if(cantidad>=cantidad2){
    cantidad2=cantidad;
   }

 }
 console.log(cantidad2);