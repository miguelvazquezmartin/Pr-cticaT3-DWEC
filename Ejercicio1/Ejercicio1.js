"use strict";

//Para que se ejecute una vez cargada la pagina, utilizamos el objeto windows.
window.addEventListener("load", function(){

    //identificamos el elemnto boton con su id, para añadirle el listener y ejecutar la función
    document.getElementById("boton").addEventListener("click", function(){
        
        //instanciamos el objeto XMLHttpRequest para comunicar que vamos a utilizar AJAX
        let xhr = new XMLHttpRequest();

        //Cuando se cargue la página, se ejecuta la función.
        xhr.onload = procesarRespuesta;
        xhr.open("GET", "ajax.xml", true);
        xhr.send();

        //creamos un elemento div
        let contenedor = document.createElement("div");
        //añadimos un id llamado contenedor
        contenedor.setAttribute("id", "contenedor");

         //función que se ejecuta cuando carga la página
        function procesarRespuesta(){
            //obtenemos el documento XML completo
            let elementoBase = xhr.responseXML.documentElement;
            //obtenemos los elementos item del documento
            let item = elementoBase.getElementsByTagName("item");
            for (let i = 0; i < item.length; i++) {
                //seleccionamos solo los nodos que sean de tipo element
                if(item[i].nodeType == Node.ELEMENT_NODE){
                    //ejecutamos la función
                    procesarInfo(item[i]);
                }
            }
            
        }
        //añadimos este div al html
       document.body.appendChild(contenedor);

       function procesarInfo(contenido){
            //obtenemos el valor del atributo nombre
            let nombre = contenido.getAttribute("nombre");
            //obtenemos el valor del atributo apellido
            let apellido = contenido.getAttribute("apellido");
            //creamos un objeto que contenga toda la respuesta
            let producto = ("Nombre: " + nombre + ", Apellido: " + apellido + "\n");
            //añadimos ese contenido a nuestro div y devolvemos el contenido
            contenedor.textContent += producto;
            return contenedor;
       }
    })

    
})
