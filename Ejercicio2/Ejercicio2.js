"use strict";

//cuando el documento este cargado
$(document).ready(function(){
    
    //cuando se pulse el boton se ejecuta el código
    $("#boton").on("click", function(){
        //método get
        $.get({
            //cargamos el archivo xml
            url: "ajax.xml",
            //ejecutamos la función procesarRespuesta
            success: procesarRespuesta
        });

        //a la función se le pasa un parametro que contiene el xml completo
        function procesarRespuesta(contenidoXML){
            //dentro del xml busca elementos con la etiqueta data y ejecuta la funcion para cada una 
            $(contenidoXML).find("item").each(function(i){
                //obtener el valor del atributo nombre
                let nombre = $(this).attr("nombre");
                //obtener el valor del atributo apellido
                let apellido = $(this).attr("apellido");
                //Reunir lo obtenido en una variable para poder agregarlo al html
                let resultado = ("Nombre: " + nombre + ", Apellido: " + apellido + "\n");
                //muestra por consola el resultado
                console.log(resultado);
                
                //añadimos el resultado al codigo html
                $("#contenedor"+(i+1)).append(resultado);
            })
            
        }
        
    })
    
    
})