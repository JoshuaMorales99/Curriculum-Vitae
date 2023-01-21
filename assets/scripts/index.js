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