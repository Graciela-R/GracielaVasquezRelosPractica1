//dado un numero N encontrar  los N primeros numeros primos
let N=9;
let contador2=0;
let contadorprimo=0;
let i=1;
while(contadorprimo<N){
        for(let j=1;j<=i;j++){
            if(i%j==0){
                contador2++;
            }
        }
        
        if(contador2==2){
            contadorprimo++;
            console.log(i + " ");
        }
       
      contador2=0;
      i++;
}
