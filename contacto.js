(function(){
    var formulario = document.getElementsByName("formulario")[0],
        elementos = formulario.elements,
        boton = document.getElementById("boton");

        var validarNombre = function(e){
            if(formulario.nombre.value == 0){
                alert("Escribe tu nombre");
                //Para prevenir que envíe los datos cuando cerramos el cartel de alert usamos preventDefault()
                e.preventDefault();
            }
        };
        var validarApellido = function(e){
            if(formulario.apellido.value == 0){
                alert("Escribe tu apellido");
                e.preventDefault();
            }
        };

        var validarTerminos = function(e){
            if(formulario.terminos.checked == false){
                alert("Acepta los términos y condiciones");
                e.preventDefault();
            }
        };


        var validar = function(e){
            validarNombre(e);
            validarApellido(e);
            validarTerminos(e);
        };

// ------Agrego el evento Submit(con .addEventListener) al formulario----
    formulario.addEventListener("submit", validar);
}())
