document.getElementById('Info').addEventListener('click', function () {
        document.getElementById ('ht').style.display = 'inline-block';
        document.getElementById ('cierre').style.display = 'block';
    })

document.getElementById('cierre').addEventListener('click', function () {
        document.getElementById ('ht').style.display = 'none';
        document.getElementById ('cierre').style.display = 'none'
    })  

document.getElementById('Expe').addEventListener('click', function () {
        document.getElementById ('Ex').style.display = 'inline-block';
        document.getElementById ('IIcierre').style.display = 'block';

    }) 

document.getElementById('IIcierre').addEventListener('click', function () {
        document.getElementById ('Ex').style.display = 'none';
        document.getElementById ('IIcierre').style.display = 'none'
    })

document.getElementById('Habi').addEventListener('click', function () {
        document.getElementById ('habil').style.display = 'inline-block';
        document.getElementById ('IIIcierre').style.display = 'block'
    }) 

document.getElementById('IIIcierre').addEventListener('click', function () {
        document.getElementById ('habil').style.display = 'none';
        document.getElementById ('IIIcierre').style.display = 'none'
    })

document.getElementById('Contac').addEventListener('click', function () {
        document.getElementById ('Con').style.display = 'inline-block';
        document.getElementById ('IVcierre').style.display = 'block'
    }) 

document.getElementById('IVcierre').addEventListener('click', function () {
        document.getElementById ('Con').style.display = 'none';
        document.getElementById ('IVcierre').style.display = 'none'
    })
    document.getElementById('menu').addEventListener('click', function () {
        document.getElementById ('ht').style.display = 'none';
        document.getElementById ('cierre').style.display = 'none';
        document.getElementById ('Ex').style.display = 'none';
        document.getElementById ('IIcierre').style.display = 'none';
        document.getElementById ('habil').style.display = 'none';
        document.getElementById ('IIIcierre').style.display = 'none';
        document.getElementById ('Con').style.display = 'none';
        document.getElementById ('IVcierre').style.display = 'none'
    })
