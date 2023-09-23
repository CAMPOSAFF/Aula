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