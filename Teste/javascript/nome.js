var nome1 ="lucao",
    idade1 = "17"

var pessoa = {
    EscreverSobreNome: () =>{
        console.log('123')
    },
    EscreverNome: (nome) =>{
        console.log(nome)

    },
    EscreverIdade: (idade) =>{
        console.log(idade)
    }
}

pessoa.EscreverSobreNome()
pessoa.EscreverNome(nome1)
pessoa.EscreverIdade(idade1)