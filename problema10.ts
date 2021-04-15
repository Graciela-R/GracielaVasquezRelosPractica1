//Problema 10:Si una direccion determinada, cumple con todas las reglas de una direccion ipv4
let cadenaip="172.16.254.1";
//let cadenaip="172.316.254.1";
//let cadenaip=".254.255.0";
let variable, variable2;
let numero:number=0,numero2=0,contador=0;
if(cadenaip.charAt(0)=='.'){
    console.log("false");
}
else{
    if(cadenaip.charAt(cadenaip.length-1)=='.'){
        console.log("false");

    }
    else{
        for(let i=0;i<cadenaip.length;i++){
            if(cadenaip.charAt(i)!='.'){
                variable =parseInt(cadenaip.charAt(i));
                numero=numero*10;
                numero=numero+variable; 
            }
            if(cadenaip.charAt(i)=='.' || i==cadenaip.length-1){
                    if(numero <=255 && numero>=0){
                        contador++;
                    }
                    numero=0;
                    variable=0;
                
            }
            
        }
        if(contador==4){
            console.log("true");
        }
        else{
            console.log("false");
        }
        

    }
}


