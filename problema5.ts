//problema 5
let array2=[0,3];
let array3=array2;
let variable=0,variable2=0,copiak=0;
let contador=0;
for(let j=0;j<array2.length-1;j++){
    for(let i=0;i<array3.length-1;i++){
        if(array3[i]>array3[i+1]){
            variable=array3[i+1];
            array3[i+1]=array3[i];
            array3[i]=variable;
        }
}
}
for(let k=0;k<array3.length-1;k++){
    copiak=array3[k];
    while(copiak+1 != array3[k+1]){
        contador++;
        variable2=copiak+1;
        copiak++;
        

    }

}
console.log(array3);
console.log(contador);