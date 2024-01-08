function adicionar (){
    let fnum = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    if(fnum.value.length == 0 && fnum.value.length > 100) {
        window.alert ('[ERRO] Por favor digite um número')
        } else {
        let n = Number(fnum.value)
        let cont = 1
    
            let item = document.createElement('option')
            item.text = `Valor ${n} adicionado.`
            item.value = `tab${cont}`
            tab.appendChild(item)       
    }

function finalizar (){
    let elem = tab.length;
    let maiorelem = Math.max(fnum)
    let menorelem = Math.min(fnum)
    let soma = 
}


}