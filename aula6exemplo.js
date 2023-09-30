import promptsync from "prompt-sync"

const prompt = promptsync()

const numeros= [1,26,58,4];

const numerosduble=numeros.map(numero =>numero*2)
// se for uma função mais complexa, vai precisar acrescentar o return

console.log(numerosduble)

const listapalavras = ["teste","nome","outro"]
const qtdcaract = listapalavras.map(palavra =>palavra.lenght)

console.log(qtdcaract)

//find acha sempre o primeiro resultado, ele pega o primeiro na ordem da linha

const numeroencontrado = numeros.find(numero =>numero>8)
console.log(numeroencontrado)

const palavraencontrada = listapalavras.find(palavra =>palavra == "nome")
console.log(palavraencontrada)

const pessoas =[
    ['nomee',['teste','teste2']],
    ['nome2',['teste','teste2','teste3']],
    ['nome3',['teste','teste2']],
]
const pessoaencontrada = pessoas.find(pessoa=>pessoa[0] =="nome2")
console.log(pessoaencontrada)

//filter

const maioresDez = numeros.filter(numero =>numero >3)
console.log(maioresDez)

const pessoasdoish = pessoas.filter(pessoa=>pessoa[0].length>2)
console.log(pessoasdoish) // não aparece a pessoa encontrada, por quê?

//reduce

const somanumeros = numeros.reduce((acumulador,atual) =>acumulador +atual, 0) // esse zzero no final sgnifica que começa em zero, tipo o i=0;
console.log(somanumeros)

const hobbiestotal = pessoas.reduce((soma,pessoa) =>soma + pessoa[1].length,0)
console.log(hobbiestotal)

//some , apresenta se tem ou não(true/false)

const termaiscinq = numeros.some(numero => numero >50)
console.log(termaiscinq)

//every - todos os itens, quando encontra o primeiro que é falso ele ja para e da o resultado

const todosmaiorcinq = numeros.every(numero=> numero>50)
console.log(todosmaiorcinq)

//include

const temumdez = numeros.includes(4)
pessoas[0][1].push('pescar')

const pessoapesca = pessoas[0][1].includes("pescar")

console.log(temumdez)
console.log(pessoapesca)

//spread


const array1= [1,2,3,4]
const array2 = [...array1,5,6]

console.log(array2) //[1,2,3,4,5,6,]

function somartres(a,b,c){
    return a+b+c
}
const itens = [2,9,10,12,15]
console.log(somartres(itens[0], itens[1],itens[3]))
console.log(somartres(...itens))


function somartodos(...valores){
    let resultado=0

    for(const valor of valores){
        resultado += valor
    }
    return resultado
}

console.log(somartodos(5,6,7,9))
console.log(somartodos(3,2))
console.log(somartodos(...numeros))  //spread  


