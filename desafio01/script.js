function carregar(){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    msg.innerHTML = `Agora São ${hora}:${minutos} hm.`
    if(hora >= 0 && hora < 12) {
     alert ('bom dia!')
    img.src = "./img/fotomanha.jpg" 
    document.body.style.background = '#e2cd9f'
}else if (hora >= 12 && hora < 18) {
    alert('boa tarde')
    img.src = './img/fototarde.jpg'
    document.body.style.background = '#b9846f'
}else {
    alert ('boa noite')
    "./img/fotonoite.jpg" 
    document.body.style.background = '#515154'
}
}