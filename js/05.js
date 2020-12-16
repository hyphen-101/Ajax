let boton = document.getElementById('cargar');

function cargarAjax() {
    var xhr = new XMLHttpRequest;

    xhr.open("GET", "texto_prueba.txt", true);
    xhr.onReadyStateChange = function() {
        console.log(xhr.readyState);
        if (xhr.readyState == 4 && xhr.status == 200) {
            var contenido = document.getElementById("contenido");
            contenido.innerHTML = xhr.responseText;
        }
    }

    xhr.send();
}

boton.addEventListener('click', cargarAjax);