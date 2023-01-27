/* ========================= Para el menu responsivo (pantallas chicas) ========================= */
// Para deshabilitar el scroll del body cuando se abre el menu en dispositivos chicos
document.querySelector(".menu__checkbox").addEventListener('change', (event) => {
    cambiarEstadoScroll(event);
});

// Para ocultar el menu en dispositivos chicos al hacer click en un elemento del mismo
const elementos = document.getElementsByClassName('menu-enlace');
for (let i = 0; i < (elementos.length) - 1; i++) {
    elementos[i].addEventListener('click', (event) => {
        ocultarMenu();
        // Bug fix: Al presionar un elemnto del menu, quedaba deshabilitado el scroll
        cambiarEstadoScroll(event); 
    })
}

// Bug fix: Al reescalar la pantalla de chico a otro valor mayor, quedaba desabilitado el scroll
window.addEventListener('resize', (event) => {
    if (window.screen.width >= 576 && document.body.style.overflow == 'hidden') {
        ocultarMenu()
        cambiarEstadoScroll(event);
    }
});

function cambiarEstadoScroll(event) {
    document.body.style.overflow = event.target.checked ? 'hidden' : 'auto';
}

function ocultarMenu() {
    document.getElementById('menu-checkbox').checked = false;
}

/* =============================== Para definir el tema de la página =============================== */
// Para la primera visita a la página
if (!localStorage.modoOscuro) localStorage.modoOscuro = false;

verificarModo();

// Para cambiar entre los modos oscuro y claro
document.getElementById('btn-oscuro-claro').addEventListener('click', () => {
    localStorage.modoOscuro = localStorage.modoOscuro == 'true' ? 'false' : 'true';
    verificarModo();
});

function verificarModo() {
    if(localStorage.modoOscuro == 'false') {
        document.getElementById('texto-oscuro-claro').innerHTML = "Modo oscuro";
        document.getElementById('simbolo-oscuro-claro').innerHTML = "dark_mode";
        document.documentElement.setAttribute('tema', 'alternativo');
    } else {
        document.getElementById('texto-oscuro-claro').innerHTML = "Modo claro";
        document.getElementById('simbolo-oscuro-claro').innerHTML = "light_mode";
        document.documentElement.setAttribute('tema', 'original');
    }
}