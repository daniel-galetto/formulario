const opciones = document.getElementById('opciones');
const mostrar = document.getElementById('mostrar');

opciones.addEventListener('change', (evento) => {
    console.log(evento.target.value)
    mostrar.innerHTML = evento.target.value;
})