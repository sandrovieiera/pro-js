function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar'
        //alert('[Erro] falta dados! \u{1F4A9} \u{1F621} ')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('passo invlido! Considerndo passo 1')
            p = 1
        }
        if (i < f) {
           
                // Contagem crescente
                for (let c = i; c <= f; c += p) {
                    res.innerHTML += ` ${c} \u{1F449} `
                }
        } else {
            //Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F499} `
            }
        }
        res.innerHTML += `\u{1F3c1}`
    }




}
