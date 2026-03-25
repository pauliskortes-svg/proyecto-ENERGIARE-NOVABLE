// JS base del proyecto

console.log("JS conectado correctamente");

document.addEventListener("DOMContentLoaded",() => { 
    const buttons=
document.querySelectorAll(".accordion-btn");
    buttons.forEach(button => { 
button.addEventListener("click",() => { 
    const content=
button.nextElementSibling;
content.classList.toggle("active");

            });

        });

});











