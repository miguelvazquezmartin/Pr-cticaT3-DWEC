"use strict";

//cuando el documento este cargado
$(document).ready(function(){

    //cuando se pulse el boton se ejecuta el código
    $("#boton").on("click", function(){
        //obtenemos los datos del documento php pasadole los parametros
        $.get("ajax.php", {nombre: "Miguel", apellido: "Vázquez"}, function(contenido){
            //creamos el div
            var newDiv = $("<div>");
            //introducimos la informacion en el div
            newDiv.html(contenido);
            //añadimos el div al html
            $("body").append(newDiv);
        }); 
    })   
})