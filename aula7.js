const pessoa ={
    nome: "Fernando",
    idade: 26,
    endereço: "sei não",
    imprimridade: function(){
        console.log(this.idade)
}
}
console.log(pessoa.nome)
pessoa.imprimridade()

console.log(JSON.stringify(pessoa)) 

const pessoajson = JSON.stringify(pessoa)//transforma em json
const pessoa2 = JSON.parse(pessoajson) //transforma em objeto
console.log(pessoa2.endereço)


class Pessoa {
    constructor(nome,idade,hobbies){
        this.nome= nome
        this.idade= idade
        this.hobbies=hobbies
    }
}
const pessoa4 = new Pessoa("teste4",45,["testeee","testee2","testergfjgsfhg"])
console.log(pessoa4.hobbies)


//factory ou class são os mais utilizdos
//facilidade para programar um componente ao longo do programa

