document.getElementById('Info').addEventListener('click', function () {
        document.getElementById ('ht').style.display = 'flex';
        document.getElementById ('Ex').style.display = 'none';
        document.getElementById ('habil').style.display = 'none';
        document.getElementById ('Con').style.display = 'none';
        document.getElementById ('formulario').style.display = 'none';
    })

document.getElementById('Expe').addEventListener('click', function () {
        document.getElementById ('Ex').style.display = 'flex';
        document.getElementById ('ht').style.display = 'none';
        document.getElementById ('habil').style.display = 'none';
        document.getElementById ('Con').style.display = 'none';
        document.getElementById ('formulario').style.display = 'none';
    }) 

document.getElementById('Habi').addEventListener('click', function () {
        document.getElementById ('habil').style.display = 'flex';
        document.getElementById ('Ex').style.display = 'none';
        document.getElementById ('ht').style.display = 'none';
        document.getElementById ('Con').style.display = 'none';
        document.getElementById ('formulario').style.display = 'none';
    }) 

document.getElementById('Contac').addEventListener('click', function () {
        document.getElementById ('Con').style.display = 'flex';
        document.getElementById ('formulario').style.display = 'flex';
        document.getElementById ('Ex').style.display = 'none';
        document.getElementById ('ht').style.display = 'none';
        document.getElementById ('habil').style.display = 'none';
       
    }) 

    document.getElementById('menu').addEventListener('click', function () {
        document.getElementById ('ht').style.display = 'none';
        document.getElementById ('Ex').style.display = 'none';
        document.getElementById ('habil').style.display = 'none';
        document.getElementById ('Con').style.display = 'none';
        document.getElementById ('formulario').style.display = 'none';
    })
