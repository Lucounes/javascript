var carro = {
    velocidade: 81
}
var idade = 66
var rodovia = 80

if(carro.velocidade>rodovia){
    if (idade>65){
        console.log('multado, velocidade acima, idoso de merda')
    }
    else{
        console.log('multado, velocidade acima, tirou a carta pelo correio')
    }
   
}

else if(carro.velocidade==rodovia){
    console.log('na velocidade da rodovia')
}
else if(carro.velocidade >= (rodovia-10) && carro.velocidade<=rodovia){
    console.log('na velocidade até 10km abaixo')
}
else{
    console.log('não foi multado, abaixo da velocidade da rodovia')
}