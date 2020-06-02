var cep = document.querySelector('#txtCep')
var endereco = document.querySelector('#txtEndereco')
var cidade = document.querySelector('#txtCidade')
cep.addEventListener('blur', function(){
   
    var url = 'https://viacep.com.br/ws/'+ cep.value +'/json/';
    var method ='GET'
    console.log(url)
    fetch(url,{method})
    .then(async function(res){
        var retorno = await res.json();
        console.log(retorno)
        endereco.value = retorno.logradouro;
        cidade.value = retorno.localidade;
    })
})
