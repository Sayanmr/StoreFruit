let botones = document.querySelectorAll('.boton');

botones.forEach((boton) => {
    boton.addEventListener('click', mostrarTexto);
});

function mostrarTexto(event) {
    let boton = event.currentTarget;
    let hideinfo = boton.previousElementSibling.querySelector('p').innerText;

    Swal.fire({
        title: 'Información del Producto',
        text: hideinfo,
        confirmButtonText: 'Cerrar',
        customClass: {
            confirmButton: 'swal2-confirm swal2-styled',
        },
        backdrop: true,
    });
}