var pops = document.querySelectorAll('.pop')

var lista = []
for(c=0; c<pops.length; c++){
    var popula = pops[c].textContent
    popula = popula.replace(/[\.]/g, "")
    var novo = Number(popula)
    lista.push(novo)
}

var soma = 0
for(c=0; c<lista.length; c++){
    soma += lista[c]
}

var resultado = document.querySelector('.soma')

resultado.innerHTML = soma.toLocaleString('pt-BR')