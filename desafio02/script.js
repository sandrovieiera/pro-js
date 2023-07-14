function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados  e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(fano.value);
        let gênero = ''
        let img = document.createElement('img')
        img.style.width = '200px'
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homen'
            if (idade >= 0 && idade < 10) {
                gênero = 'uma Criança'
                img.setAttribute('src', './img/menino.jpg')
            }else if (idade < 21) {
                gênero = 'Um Jovem'
                img.setAttribute('src', './img/jovem.jpg')
            }else if (idade < 50) {
                gênero = 'Um Homen Adulto'
                img.setAttribute('src', './img/homen.jpg')
            }else {
                gênero = 'Um Idoso'
                img.setAttribute('src', './img/idoso.jpg')
            }


        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                gênero = 'Uma Criança'
                img.setAttribute('src', './img/menina.jpg')
            }else if (idade < 21) {
                gênero = 'Uma Jovem'
                img.setAttribute('src', './img/jovemm.jpg')
            }else if (idade < 50) {
                gênero = 'Uma Mulher Adulta'
                img.setAttribute('src', './img/mulher.jpg')
            }else {
                gênero = 'Uma Idosa'
                img.setAttribute('src', './img/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }



}