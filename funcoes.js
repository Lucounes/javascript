var nome = 'lucas'
var pessoa = {
    nome: 'lucas',
    idade: '12'
}
var Cor = 'Vermelho'

function Escrever(escreverAltura2){
    console.log('---funcão que executa função callback---');
    console.log(escreverAltura2);
    escreverAltura2();
    console.log('---funcão que executa função callback---');
    console.log('');
}

function EscreverAltura(){
    console.log('---funcão escrever altura---');
    console.log('altura');
    console.log('---funcão escrever altura---');
    
}

function EscreverCor(){
    console.log('---funcão escrever cor---');
    console.log('cor');
    console.log('---funcão escrever cor---');
    console.log('');
}

function ExibirTeste (nome){
    console.log('---funcão escrever nome---')
    console.log(nome)
    console.log('---funcão escrever nome---')
    console.log('');
}
function ExibirPessoa (pessoa){
    console.log('---funcão escrever nome e idade da pessoa---')
    console.log(pessoa)
    console.log(pessoa.idade)
    console.log('---funcão escrever nome e idade da pessoa---')
    console.log('');
}
const ExibirNome2 = () =>{
    console.log('---funcão exibir nome---')
    console.log('jorge2') 
    console.log('---funcão exibir nome---')
    console.log('');
}
const ExibirCor = (Cor) =>{
    console.log('---funcão exibir cor---')
    console.log(Cor)
    console.log('---funcão exibir cor---')
    console.log('');
}

ExibirNome2();
Escrever(EscreverAltura);
EscreverCor();
ExibirCor(Cor);
ExibirPessoa(pessoa);
ExibirTeste(nome);