/*
const aux = document.getElementById('menu-checkbox');

aux.addEventListener('change', function() {
    console.log("Hola mundo!");
})
*/

// Para desabilitar el scroll del body cuando se abre el menu en dispositivos chicos
document.querySelector(".menu__checkbox").addEventListener('change', (event) => {
    document.body.style.overflow = event.target.checked ? "hidden" : "auto";
})

// Para ocultar el menu al hacer click en un elemento
const aux = document.getElementsByClassName('menu-enlace');
// Para agregar un escuchador a cada elemento del menu
for (let i = 0; i < (aux.length) - 1; i++) {
    aux[i].addEventListener('click', (event) => {
        document.getElementById('menu-checkbox').checked = false;
    })
}