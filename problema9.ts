//Determinar la cantidad minima de pares
let vector=new Array();
let vectorcaracter=new Array();
let vectornumeros=new Array();
let N=4;
let contador=0;
let caracter;
let variable:number=0;
let variable2="0";
let variable3="0";
vector=['kambei','gorobei','shichiroji','kyuso','heihachi','katsuschiro','kikochiyo'];
//vector=['jorge','jose','oscar','jerry'];
for(let i=0;i<vector.length;i++){
    for(let j=0;j<vector.length;j++){
        variable2=vector[i];
        variable3=vector[j];
        
        if(variable2.charAt(0) == variable3.charAt(0)){
            contador++; 
                   
        }
    }
    if(contador>1){
    
            if(vectorcaracter[vectorcaracter.length-1]!= vector[i].charAt(0)){
                vectorcaracter[vectorcaracter.length]=vector[i].charAt(0); 
                vectornumeros[vectornumeros.length]=contador;
            }     
        
        
    }
     contador=0;
}
for(let i=0;i<vectornumeros.length;i++){
    variable=vectornumeros[i]/2;
    console.log(Math.floor(variable) + " ");
}

