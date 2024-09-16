let elementosDuvidas = document.querySelectorAll('.duvidas')

elementosDuvidas.forEach (function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
})
