"use strict";

//Para que se ejecute una vez cargada la pagina, utilizamos el objeto windows.
window.addEventListener("load", function(){

    //identificamos el elemnto boton con su id, para añadirle el listener y ejecutar la función
    document.getElementById("boton").addEventListener("click", function(){
       
        //instanciamos el objeto XMLHttpRequest para comunicar que vamos a utilizar AJAX
        let xhr = new XMLHttpRequest();

        //creamos un elemento div
        let contenedor = document.createElement("div");
        //añadimos un id llamado contenedor
        contenedor.setAttribute("id", "contenedor");
        //añadimos este div al html
        document.body.appendChild(contenedor);

        //Cuando se cargue la página, se ejecuta la función.
        xhr.onload = procesarRespuesta;
        xhr.open("GET", "ajax.php?nombre=Miguel&apellido=Vázquez Martín", true);
        xhr.send();

        function procesarRespuesta(){
            //añadimos la información al div que acabamos de crear
            contenedor.textContent = this.responseText;
        }

        //añadimos este div al html
        document.body.appendChild(contenedor);
    })

})