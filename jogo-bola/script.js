
function addbola() {

    let bola = document.createElement('div');
    bola.setAttribute('class', 'bola');

    let p1 = Math.floor(Math.random() * 500);
    let p2 = Math.floor(Math.random() * 500);

    bola.setAttribute('style', 'left:' + p1 + 'px; top:' + p2 + 'px;');
    bola.setAttribute('onclick', 'estourar(this)')

    document.body.appendChild(bola);
}
function estourar (el) {
    document.body.removeChild(el);
}

function iniciar() {
    setInterval(addbola, 1000);
}