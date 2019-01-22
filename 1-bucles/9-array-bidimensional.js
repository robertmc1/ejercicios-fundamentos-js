
// ej 9
// Rellena la matriz como la siguiente utilizando bucles for anidados
// let matriz = [
//   ['00','01','02'],
//   ['10','11','12'],
//   ['20','21','22']
// ];

let matriz = [
    [],
    [],
    []
]

for(let i=0; i <matriz.length; i++){
    for(let j = 0; j < 3; j++){
     if (i==0) {
         matriz[i].push("0"+ j);
     }else if(i==1){
         matriz[i].push("1"+j);
     }else if(i==2){
         matriz[i].push("2"+j);
     }
    }
}

console.log(matriz);
