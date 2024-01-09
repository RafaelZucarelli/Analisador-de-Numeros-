let fnum = document.getElementById('txtnum')
let tab = document.getElementById('seltab')
let res = document.querySelector('div#res')
let valores = []



function isNumero(n) {
    if (Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}
function inTab (n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
} 



function adicionar () {

    

    if(isNumero(fnum.value) && !inTab(fnum.value, valores)) {

        valores.push(Number(fnum.value))
        let item = document.createElement('option') 
        item.text = `Valor ${fnum.value} adicionado.`
        tab.appendChild(item)
        

     } else {
        window.alert ('[ERRO] Valor inválido ou já encontrado na lista')   
    }
    fnum.value = ''
    fnum.focus()
}

function finalizar () {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {

        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let cont in valores) {
            soma += valores[cont]
            if (valores[cont] > maior )
            maior = valores[cont]
    
            if (valores [cont] < menor)
             menor = valores[cont]
    
    }

        media = soma/tot 
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados. <\p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior} . <\p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor} . <\p>`
        res.innerHTML += `<p>A soma de todos os valores é: ${soma} . <\p>`
        res.innerHTML += `<p>A média dos valores é: ${media} . <\p>`
    }
}