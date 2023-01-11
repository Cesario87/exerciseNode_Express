const boton = document.createElement("input");
const espacios = document.querySelector(".añadirBoton");
espacios.appendChild(boton);
boton.setAttribute("type", "button");
boton.setAttribute("value", "Esto es un botón");

boton.addEventListener("click", function(){alert("Holi!!")});
