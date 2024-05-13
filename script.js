document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnDescargar').addEventListener('click', function() {
        var enlaceDescarga = document.createElement('a');
        enlaceDescarga.href = '../documentos/laCatedral.pptx';
        enlaceDescarga.download = 'laCatedral.pptx';
        enlaceDescarga.click();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnAudio').addEventListener('click', function() {
        var url = 'https://vocaroo.com/1j2tkE4kbqCZ'; 
        window.open(url, '_blank');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnAudio2').addEventListener('click', function() {
        var url = 'https://vocaroo.com/1groD9ZTPhPP'; 
        window.open(url, '_blank');
    });
});

function abrirDialogo() {
    var imagenPequena = document.querySelector('.card-img-top').getAttribute('src');
    var imagenDialogo = document.getElementById('imagenDialogo');
    imagenDialogo.setAttribute('src', imagenPequena);
    var dialogo = document.getElementById('imagenDialog'); 
    if (!dialogo.showModal) {
        dialogPolyfill.registerDialog(dialogo);
    }
    dialogo.showModal();
}

function cerrarDialogo() {
    var dialogo = document.getElementById('imagenDialog');
    dialogo.close();
}






function abrirFolleto() {
    var imagenPequena = document.querySelector('.card-img-top').getAttribute('src');
    var imagenDialogo = document.getElementById('folletoDialog');
    imagenDialogo.setAttribute('src', imagenPequena);
    var dialogo = document.getElementById('folletoDialog'); 
    if (!dialogo.showModal) {
        dialogPolyfill.registerDialog(dialogo);
    }
    dialogo.showModal();
}

function cerrarFolleto() {
    var dialogo = document.getElementById('folletoDialog');
    dialogo.close();
}


function abrirPostulacion() {
    var imagenPequena = document.querySelector('.card-img-top').getAttribute('src');
    var imagenDialogo = document.getElementById('postulacionCorreo');
    imagenDialogo.setAttribute('src', imagenPequena);
    var dialogo = document.getElementById('postulacionCorreo'); 
    if (!dialogo.showModal) {
        dialogPolyfill.registerDialog(dialogo);
    }
    dialogo.showModal();
}

function cerrarPostulacion() {
    var dialogo = document.getElementById('postulacionCorreo');
    dialogo.close();
}




function abrirQuestionarioGA2() {
    var imagenPequena = document.querySelector('.card-img-top').getAttribute('src');
    var imagenDialogo = document.getElementById('cuestionarioGA2');
    imagenDialogo.setAttribute('src', imagenPequena);
    var dialogo = document.getElementById('cuestionarioGA2'); 
    if (!dialogo.showModal) {
        dialogPolyfill.registerDialog(dialogo);
    }
    dialogo.showModal();
}

function cerrarCuestionarioGA2() {
    var dialogo = document.getElementById('cuestionarioGA2');
    dialogo.close();
}



function abrirCronica() {
    var imagenPequena = document.querySelector('.card-img-top').getAttribute('src');
    var imagenDialogo = document.getElementById('cronica');
    imagenDialogo.setAttribute('src', imagenPequena);
    var dialogo = document.getElementById('cronica'); 
    if (!dialogo.showModal) {
        dialogPolyfill.registerDialog(dialogo);
    }
    dialogo.showModal();
}

function cerrarCronica() {
    var dialogo = document.getElementById('cronica');
    dialogo.close();
}





function abrirCuestionarioP2() {
    var imagenPequena = document.querySelector('.card-img-top').getAttribute('src');
    var imagenDialogo = document.getElementById('cuestionarioP2');
    imagenDialogo.setAttribute('src', imagenPequena);
    var dialogo = document.getElementById('cuestionarioP2'); 
    if (!dialogo.showModal) {
        dialogPolyfill.registerDialog(dialogo);
    }
    dialogo.showModal();
}

function cerrarCuestionarioP2() {
    var dialogo = document.getElementById('cuestionarioP2');
    dialogo.close();
}


function abrirCuestionarioGA3() {
    var imagenPequena = document.querySelector('.card-img-top').getAttribute('src');
    var imagenDialogo = document.getElementById('cuestionarioGA3');
    imagenDialogo.setAttribute('src', imagenPequena);
    var dialogo = document.getElementById('cuestionarioGA3'); 
    if (!dialogo.showModal) {
        dialogPolyfill.registerDialog(dialogo);
    }
    dialogo.showModal();
}

function cerrarCuestionarioGA3() {
    var dialogo = document.getElementById('cuestionarioGA3');
    dialogo.close();
}




function abrirVideo() {
    var dialogo = document.getElementById('videoDialog');
    if (!dialogo.showModal) {
        dialogPolyfill.registerDialog(dialogo);
    }
    dialogo.showModal();
}

function cerrarDialogoVideo() {
    var dialogo = document.getElementById('videoDialog');
    dialogo.close();
}


function abrirForo() {
    var imagenPequena = document.querySelector('.card-img-top').getAttribute('src');
    var imagenDialogo = document.getElementById('foro1');
    imagenDialogo.setAttribute('src', imagenPequena);
    var dialogo = document.getElementById('foro1'); 
    if (!dialogo.showModal) {
        dialogPolyfill.registerDialog(dialogo);
    }
    dialogo.showModal();
}

function cerrarForo() {
    var dialogo = document.getElementById('foro1');
    dialogo.close();
}


function abrirForoFinal() {
    var imagenPequena = document.querySelector('.card-img-top').getAttribute('src');
    var imagenDialogo = document.getElementById('foro2');
    imagenDialogo.setAttribute('src', imagenPequena);
    var dialogo = document.getElementById('foro2'); 
    if (!dialogo.showModal) {
        dialogPolyfill.registerDialog(dialogo);
    }
    dialogo.showModal();
}

function cerrarForoFinal() {
    var dialogo = document.getElementById('foro2');
    dialogo.close();
}


function abrirMapa() {
    var imagenPequena = document.querySelector('.card-img-top').getAttribute('src');
    var imagenDialogo = document.getElementById('mapa');
    imagenDialogo.setAttribute('src', imagenPequena);
    var dialogo = document.getElementById('mapa'); 
    if (!dialogo.showModal) {
        dialogPolyfill.registerDialog(dialogo);
    }
    dialogo.showModal();
}

function cerarMapa() {
    var dialogo = document.getElementById('mapa');
    dialogo.close();
}