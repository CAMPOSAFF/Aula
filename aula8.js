fetch("https://viacep.com.br/ws/13348863/json/")
.then((resposta) => resposta.json())
.then((endereco) => console.log(endereco))
.catch(() => console.log(`Erro ao chamar a API`))


/*   fetch("https://viacep.com.br/ws/13334100/json/")
.then((resposta) => console.log(resposta.status))
.then((objeto) => {
    if(objeto.erro) console.log('CEP incorreto')
    else console.log(objeto)
})
.catch(() => console.log('Erro ao chamar a API')) */


