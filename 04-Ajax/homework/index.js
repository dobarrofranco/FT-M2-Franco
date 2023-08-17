let img = $("img");
img.hide();

$("#boton").on("click", function() {
    img.show();
    $.ajax({
        type: "GET",
        url: "http://localhost:5000/amigos",
        success: data => {
            let info;
            $("#lista").empty(info);
            
            data.forEach(element => {
                info = document.createElement("li");
                info.innerText = element.name + " - id: " + element.id;
                $("#lista").append(info);
            }); 

            img.hide([2000]);
            
        }
    })
})


$("#search").click (() => {
    let entrada = $("#input").val();
    img.show();

    $.ajax({
        type: "GET",
        url: `http://localhost:5000/amigos`,
        success: data => {
            let size;
            size = data.length;
            if (entrada > size || entrada !== data.id) {
                $("#amigo").text('Este amigo no existe');
            }
            $("#input").val("");
            img.hide([3000]);
        }
    });

    
    $.ajax({
        type: "GET",
        url: `http://localhost:5000/amigos/${entrada}`,
        success: data => {
            // let info;
            // info = document.createElement("p"); //! otra opción
            // info.innerText = data.name;
            
            $("#amigo").text(data.name)
            $("#input").val("");
            img.hide([3000]);
        }
    });
    
})


let inputClean = (() => {
    $("#input").val();
    $("#inputDelete").val();
});


$("#delete").click (() => {
    let entradaDelete = $("#inputDelete").val();

    $.ajax({
        type: "GET",
        url: `http://localhost:5000/amigos`,
        success: data => {
            let size;
            size = data.length;
            if (entradaDelete > size || entradaDelete === data.id) {
                $("#success").text('Este amigo no existe');
            }
            $("#inputDelete").val("");
            img.hide([3000]);
        }
    });


    $.ajax ({
        type: "DELETE",
        url: `http://localhost:5000/amigos/${entradaDelete}`,
        success: data => {
            
            // if (entradaDelete !== data.id) {
            //     $("#success").text('Este amigo no existe')
            // }
            
            $("#success").text('Tu amigo fue borrado con éxito');
            

            $("#inputDelete").val("")

            img.hide([3000]);
        }
    })
})

