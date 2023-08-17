//! Métodos HTTP

//? GET: 

//* get      /     http/1.1
//  mètodo  path   versión del protocolo

//  headers: son objetos (key:value)
//* Host: developer.mozilla.org
//* Accept-Lanuguage: fr
//  Definen las reglas de la solicitud

//? PUT
//? DELETE
//? POST


//! Eventos
// Formas del usuario de interactuar con la página.

//----------------------------------------
// estructura básica de una solicitud GET
$.ajax({
    type: "GET",
    url: "http://localhost:3000/usuarios",
    success: usuario
});

$.ajax({
    type: "DELETE",
    url: "http://localhost:3000/usuarios/usuario1",
    success: "Se elimino al usuario"
});

// Event handler
$("#boton").on("click", function() {
    $.ajax({
        type: "GET",
        url: "https://pokeapi.co/api/v2/pokemon/ditto",
        success: data => {
            console.log(data);

            let info = document.createElement("h1");
            info.textContent = `Pokemon: ${data.name}`;

            let info2 = document.createElement("h3");
            info2.textContent = `Id: ${data.id}`

            let info3 = document.createElement("p");
            info3.textContent = `Stats: ${data.stats[0].stat.name} - ${data.stats[0].base_stat}`

            $("#respuesta").append(info);
            $("#respuesta").append(info2);
            $("#respuesta").append(info3);

        }
    });
})

