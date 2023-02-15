"use strict";
//cuando el documento este cargado
$(window).on("load", function (){

    //cuando se pulse el boton se ejecuta el código
    $("#boton").on("click", function(){
        //obtenemos los datos del documento php pasadole los parametros
        $.getJSON("./ajax.json", function(contenido){
            let autorLibro = contenido.nombre;
            let apellidoLibro = contenido.apellido;
            $("autor").append(autorLibro + " " + apellidoLibro);
            console.log(autorLibro + apellidoLibro);

            $(contenido).each(function(i){
                 //seleccionamos el elemento por la id para el titulo
                let tituloLibro = contenido.libros.titulo;
                //seleccionamos el elemento por la id para el subtitulo
                let subTituloLibro = contenido.libros.subtitulo;
                
                //añadimos el resultado al codigo html
                $("#titulo"+(i+1)).append(tituloLibro);
                $("#subtitulo"+(i+1)).append(subTituloLibro);
            })
        })
    })   
})