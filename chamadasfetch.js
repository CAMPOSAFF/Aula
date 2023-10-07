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


/*import express from "express"
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('Olá mundo!')
})

app.listen(port, () => {
    console.log('Aplicação rodando na porta 3000')
})

*/
