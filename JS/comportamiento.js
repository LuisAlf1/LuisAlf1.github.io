document.getElementById('Info').addEventListener('click', function () {
        document.getElementById ('datos').style.display = 'flex';
        document.getElementById ('historial').style.display = 'none';
        document.getElementById ('habil').style.display = 'none';
        document.getElementById ('nexo').style.display = 'none';
        document.getElementById ('formulario').style.display = 'none';
    })

document.getElementById('Experiencia').addEventListener('click', function () {
        document.getElementById ('historial').style.display = 'flex';
        document.getElementById ('datos').style.display = 'none';
        document.getElementById ('habil').style.display = 'none';
        document.getElementById ('nexo').style.display = 'none';
        document.getElementById ('formulario').style.display = 'none';
    }) 

document.getElementById('Destrezas').addEventListener('click', function () {
        document.getElementById ('habil').style.display = 'flex';
        document.getElementById ('historial').style.display = 'none';
        document.getElementById ('datos').style.display = 'none';
        document.getElementById ('nexo').style.display = 'none';
        document.getElementById ('formulario').style.display = 'none';
    }) 

document.getElementById('Comunicacion').addEventListener('click', function () {
        document.getElementById ('nexo').style.display = 'flex';
        document.getElementById ('formulario').style.display = 'flex';
        document.getElementById ('historial').style.display = 'none';
        document.getElementById ('datos').style.display = 'none';
        document.getElementById ('habil').style.display = 'none';
       
    }) 

    document.getElementById('Menu').addEventListener('click', function () {
        document.getElementById ('datos').style.display = 'none';
        document.getElementById ('historial').style.display = 'none';
        document.getElementById ('habil').style.display = 'none';
        document.getElementById ('nexo').style.display = 'none';
        document.getElementById ('formulario').style.display = 'none';
    })
