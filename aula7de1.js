class Estudante{
    constructor(nome,email,RA,curso,disciplinas){
        this.nome = nome
        this.email = email
        this.RA = RA
        this.curso = curso
        this.disciplinas = disciplinas
    }
    primeiradisciplina(){
    return this.disciplinas[0]
}
    ultimadisciplina(){
    return this.disciplinas[this.disciplinas.length -1]
}
}
const pessoa1 = new Estudante("Fernando", "affonsocampos14@gmail.com", "1050482313023", "ADS", ["Linguagem de programação", "engenharia de softwares"])
const pessoa2 = new Estudante("André", "andrelnm@hotmail.com","1050482313026", "ADS", ["Contabilidade","Ética e responsabilidade profissional", "portuga"])


console.log(pessoa1.primeiradisciplina(),",",pessoa1.ultimadisciplina())
console.log(pessoa2.primeiradisciplina(),",",pessoa2.ultimadisciplina())