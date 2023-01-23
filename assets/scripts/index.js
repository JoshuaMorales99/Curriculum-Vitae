/* ========================= Para el menu responsivo (pantallas chicas) ========================= */
// Para desabilitar el scroll del body cuando se abre el menu en dispositivos chicos
document.querySelector(".menu__checkbox").addEventListener('change', (event) => {
    document.body.style.overflow = event.target.checked ? "hidden" : "auto";
})

// Para ocultar el menu en dispositivos chicos al hacer click en un elemento del mismo
const aux = document.getElementsByClassName('menu-enlace');
// Para agregar un escuchador a cada elemento del menu
for (let i = 0; i < (aux.length) - 1; i++) {
    aux[i].addEventListener('click', (event) => {
        document.getElementById('menu-checkbox').checked = false;
    })
}

/* =============================== Para definir el tema de la página =============================== */
// Para la primera visita a la página
if (!localStorage.modoOscuro) localStorage.modoOscuro = false;

verificarModo();

// Para cambiar entre los modos oscuro y claro
document.getElementById('btn-oscuro-claro').addEventListener('click', () => {
    if(localStorage.modoOscuro == 'true') {
        localStorage.modoOscuro = 'false';
    } else {
        localStorage.modoOscuro = 'true';
    }
    verificarModo();
})

function verificarModo() {
    if(localStorage.modoOscuro == 'false') {
        document.getElementById('texto-oscuro-claro').innerHTML = "Modo oscuro";
        document.getElementById('simbolo-oscuro-claro').innerHTML = "dark_mode";
        document.documentElement.setAttribute('tema', 'oscuro');
    } else {
        document.getElementById('texto-oscuro-claro').innerHTML = "Modo claro";
        document.getElementById('simbolo-oscuro-claro').innerHTML = "light_mode";
        document.documentElement.setAttribute('tema', 'claro');
    }
}