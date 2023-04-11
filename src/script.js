const pantalla = document.querySelector(".Pantalla")
const botones = document.querySelectorAll(".btn")


//leer botones
botones.forEach(boton => {
    boton.addEventListener("click", ()=> {
        const botonApretado = boton.textContent;

        //función C
        if (boton.id === "c"){
            pantalla.textContent = "0"
            return;
        }

        //función delete
        if (boton.id === "delete"){
            pantalla.textContent[-1]=null
            return;
        }


        //escribir números.
        if(pantalla.textContent === "0"){
            pantalla.textContent=botonApretado
        }else{
            pantalla.textContent += botonApretado;
        }

    })
})