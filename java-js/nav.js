function accion() {
    console.log ('boton ok');
    var botones = document.getElementsByClassName ('nav-enlace');
    for (var i= 0; i < botones.length; i++) {
        botones[i].classList.toggle('desaparece');
    }
}