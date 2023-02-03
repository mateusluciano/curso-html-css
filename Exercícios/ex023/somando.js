var num = []
for(c = 0; c<27 ; c++) {
    var numero = document.querySelectorAll('.pop')
    var ponto = numero[c].textContent
    var ponto = Number(ponto)
    num.push(ponto)
}
var soma = 0
for(c=0; c<27 ; c++) {
    var analise = num[c]
    soma += num[c]
    console.log(soma)
}

var totalizando = document.querySelector('.total')
totalizando.textContent = `${soma}`