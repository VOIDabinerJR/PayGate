let valor =500;
let seguro= 0;
for (let i=0; true; i++){
valor = valor * 6
seguro= valor * 0.2
valor = valor - seguro

console.log("investido: "+ valor)
if (valor+seguro >= 450000){
    console.log(i)
    console.log(seguro)
    console.log(valor)
    break
 
}

}
