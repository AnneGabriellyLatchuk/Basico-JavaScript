let num = [8,9,1,3,0,6,5]

num.sort()

let pos = num.indexOf(10)

if(pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else{
    console.log(`O valor 6 está na posição ${pos}`)
}
