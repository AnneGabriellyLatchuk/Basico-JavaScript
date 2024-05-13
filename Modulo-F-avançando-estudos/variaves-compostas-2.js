let valores = [8, 5, 7, 1, 2, 4]

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} //forma mais tradicional

for( let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} //forma mais fácil
