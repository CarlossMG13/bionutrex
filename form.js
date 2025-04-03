document.getElementById("enviarWhatsApp").addEventListener("click", function(event) {
    event.preventDefault(); // Evita la navegación del enlace dentro del botón

    // Obtener los valores del formulario
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("mail").value;
    let celular = document.getElementById("celular").value;

    // Número de WhatsApp al que quieres enviar el mensaje
    let numeroWhatsApp = "522295251975"; // Reemplaza con el número de destino

    // Crear el mensaje con emojis
    let mensaje = `👋 Hola, mi nombre es ${nombre} ${apellido}. 📧 Mi correo es ${email}. 📞 Mi número de teléfono es ${celular}. Estoy interesado en contactarlos.`;

    // Codificar el mensaje para URL
    let mensajeCodificado = encodeURIComponent(mensaje);

    // Crear la URL de WhatsApp
    let url = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

    // Redirigir a la URL de WhatsApp
    window.location.href = url;
});