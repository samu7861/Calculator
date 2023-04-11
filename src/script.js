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
            if (pantalla.textContent.length === 1 || pantalla.textContent ==="Error"){
                pantalla.textContent = "0"
            }else{
                pantalla.textContent = pantalla.textContent.slice(0, -1)
            }
            return;
        }

        //función cálcular
        if(boton.id === "igual"){
            try{
                pantalla.textContent=eval(pantalla.textContent)
            }catch{
                pantalla.textContent="Error"
            }
            
            return;
        }


        //escribir números.
        if(pantalla.textContent === "0" || pantalla.textContent==="Error"){
            pantalla.textContent=botonApretado
        }else{
            pantalla.textContent += botonApretado;
        }

    })
})