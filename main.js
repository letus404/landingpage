document.addEventListener('DOMContentLoaded', function () {
    // Espera a que el DOM esté completamente cargado

    // Obtenemos una referencia al botón del formulario
    const submitButton = document.getElementById('infoButton1');
    // Agregamos un evento de clic al botón
    submitButton.addEventListener('click', function () {
       // Obtenemos los valores de los inputs
       const name = document.getElementById('name').value;
       const apellido = document.getElementById('apellido').value;
       const email = document.getElementById('email').value;
       const phone = document.getElementById('phone').value;
       const intencionEstudiar = document.getElementById('intencionEstudiar').value;
       const inicioCurso = document.getElementById('inicioCurso').value;
       const estadoActual = document.getElementById('estadoActual').value;

        alert('¡Gracias por expresar interés en el curso de DJ en StudioPlanet! Un asesor se pondrá en contacto contigo a la brevedad.');
    });
});