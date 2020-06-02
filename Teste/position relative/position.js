const divFirst = document.querySelector('.elementExample_first')

const divLast = document.querySelector('.elementExample_last')

divFirst.addEventListener('click',function(event){
    divFirst.classList.toggle('elementExample_isActive')
    divLast.classList.add('elementExample_isActive')
})

divLast.addEventListener('click',function(event){
    divLast.classList.toggle('elementExample_isActive')
    divFirst.classList.add('elementExample_isActive')
})
