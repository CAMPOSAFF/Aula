{
    "name": "0710-aula",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "type": "module",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
      "axios": "^1.5.1"
    }
  }
  /* 
  import axios from "axios"

fetch("https://viacep.com.br/ws/13334100/json/")
.then((resposta) => console.log(resposta.status))
.then((objeto) => {
    if(objeto.erro) console.log('CEP incorreto')
    else console.log(objeto)
})
.catch(() => console.log('Erro ao chamar a API'))

axios.get("https://viacep.com.br/ws/13334100/json/")
.then((resposta) => console.log(resposta.data))
.catch(() => console.log('Erro ao chamar a API'))
*/
// tem que criar uma nova pasta e aplicar instalação do axios, npm init e todo o resto, o primeiro codigo entra no json



/*

import axios from "axios"

fetch("https://viacep.com.br/ws/13334100/json/")
.then((resposta) => console.log(resposta.status))
.then((objeto) => {
    if(objeto.erro) console.log('CEP incorreto')
    else console.log(objeto)
})
.catch(() => console.log('Erro ao chamar a API'))

let endereco = {}
axios.get("https://viacep.com.br/ws/13334100/json/")
.then((resposta) => endereco = resposta.data)
.catch(() => console.log('Erro ao chamar a API'))

console.log(endereco)


*/

import express from "express"
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('Olá mundo!')
})

app.get('/aluno',(req,res)=>{
    //res.send(JSON.stringify({id:1,nome:"Aluno"}))
    res.status(200).json({id:1,nome:"Nome"})  // o erro 200 pode ser 404 not found, entre outros.
})

app.listen(port, () => {
    console.log('Aplicação rodando na porta 3000')
})



/*


import express from "express"
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('Olá mundo!')
})

app.get('/aluno/:id',(req,res)=>{
    console.log(req.params.id)
    res.status(200).json({id:1,nome:"Nome"})
})

app.listen(port, () => {
    console.log('Aplicação rodando na porta 3000')
})



*/


