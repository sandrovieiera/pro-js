function preencheTabuada() {
    let selectTabuada = document.getElementById('tabuada')
    let numero = document.getElementById('numeroTabuada')
    selectTabuada.innerHTML = ''
    let max = 10
    let num =Number(numero.value)
    if (num == '') {
        alert('Digite um numero')
        
    }
    for (let i = 0; i <= max; i++) {
        let resultado = num * i
        let option = document.createElement('option')
        option.innerHTML = `${num} x ${i} = ${resultado}`
        selectTabuada.add(option)
    }
}