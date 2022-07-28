document.getElementsByTagName('h2')
var heading2 = document.getElementsByTagName('h2')[0]

window.onload = function() {
    let aumentar = document.getElementById('aumentar');
    aumentar.onclick = aumentarValor;
    
    let diminuir = document.getElementById('diminuir');
    diminuir.onclick = diminuirValor;

    let resetar = document.getElementById('resetar');
    resetar.onclick = resetarValor;
}

var contador = 0;

aumentarValor = function() {
    updateDisplay(++contador);
    if (contador > 0) {
        heading2.style.color = 'lime'
    }
    
    if (contador == 0) {
        heading2.style.color = 'white'
    }
}

diminuirValor = function() {
    updateDisplay(--contador);
    if (contador < 0) {
        heading2.style.color = 'red'
    }
    
    if (contador == 0) {
        heading2.style.color = 'white'
    }
}

function resetarValor() {
    contador = 0;
    updateDisplay(contador);
    heading2.style.color = 'white'
}

function updateDisplay(valor) {
    document.getElementById('contador').innerHTML = valor;
}