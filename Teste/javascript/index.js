let nome = 'lucao'
let idade = '17'
let tamanho = '1,70'

//objetos
var Pessoa = {
    nome: "lucao",
    idade: "17",
    tamanho: "1,70"

}

var Carro = {
    cor: "azul",
    rodas: "4",
}

let animal = { 
    nome: 'cachorro',
    idade: '4',
    raca: 'viraLata'
}
//função/variavel
const ExecutarAnimal = (animal) =>{
    console.log(animal)
}
//função que recebe 3 parametros
function ExibirNome(nome,idade,tamanho){
    //exibir os 3 parametros recebidos
    console.log(nome,idade,tamanho)
}
//exibir string hard coded
function ExibirNomeHard(){
    console.log('meunome')
}

function ExibirPessoa(Pessoa){
    console.log(Pessoa)
    //pegar parametro idade do objeto pessoa
    console.log(Pessoa.idade)
}

function ExibirCarro(Carro){
    console.log(Carro)
    //pegar parametro cor do objeto carro
    console.log(Carro.cor)
}


ExibirNome(nome,idade,tamanho);
ExibirNomeHard();
ExibirPessoa(Pessoa);
ExibirCarro(Carro);
ExecutarAnimal(animal);