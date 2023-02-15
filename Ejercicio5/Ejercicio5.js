"use strict";

//Para que se ejecute una vez cargada la pagina, utilizamos el objeto windows.
window.addEventListener("load", function(){

    //identificamos el elemnto boton con su id, para añadirle el listener y ejecutar la función
    document.getElementById("boton").addEventListener("click", function(){
       
        //instanciamos el objeto XMLHttpRequest para comunicar que vamos a utilizar AJAX
        let xhr = new XMLHttpRequest();

        //Cuando se cargue la página, se ejecuta la función.
        xhr.onload = procesarRespuesta;
        xhr.open("GET", "ajax.json", true);
        xhr.overrideMimeType('text/plain');
        xhr.send();

        function procesarRespuesta(){
            //primero parseamos la respuesta en string al ser un JSON y la guardamos en "respuesta"
            let respuesta = JSON.parse(xhr.responseText);

            //obtenemos el valor del nombre del autor 
            let nombreAutor = respuesta.nombre;
            //obtenemos el valor del nombre del autor 
            let apellidoAutor = respuesta.apellido;
            
            //añadimos el nombre y apellido del autor al html
            document.getElementById("autor").innerHTML = (nombreAutor + " " + apellidoAutor);
            
            for(let i = 0; i < respuesta.libros.length; i ++){
                //seleccionamos el elemento por la id para el títutlo
                let tituloLibro = document.getElementById("titulo");
                //seleccionamos el elemento por la id para el subtitulo
                let subTituloLibro = document.getElementById("subtitulo");

                //añadimos al html el contenido seleccionado de cada titutlo del libro en función de su posición del array
                tituloLibro.innerHTML += (i+1) + ".- " + respuesta.libros[i].titulo + " ";
                //añadimos al html el contenido seleccionado de cada subtitutlo del libro en función de su posición del array
                subTituloLibro.innerHTML += (i+1) + ".- " + respuesta.libros[i].subTitulo + " ";
            }
        }
    })

})