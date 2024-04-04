<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos del formulario
    $nombre = $_POST["name"];
    $email = $_POST["email"];
    $telefono = $_POST["phone"];
    $indirizzo = $_POST["indirizzo"];
    $immagine_aerea = $_POST["immagine_aerea_edificio"];
    $consumo_energia = $_POST["consumo_energia"];

    // Configurar los detalles del correo electrónico
    $destinatario = "info@lc-energia.it"; // Cambia esto al correo electrónico al que deseas enviar el formulario
    $asunto = "Nuevo mensaje de formulario";

    // Construir el cuerpo del mensaje
    $mensaje = "Nombre: $nombre\n";
    $mensaje .= "Email: $email\n";
    $mensaje .= "Teléfono: $telefono\n";
    $mensaje .= "Indirizzo: $indirizzo\n";
    $mensaje .= "Immagine aerea edificio (opzionale): $immagine_aerea\n";
    $mensaje .= "Consumo kWh/annuo/ spesa mensile energia (opzionale): $consumo_energia\n";

    // Enviar el correo electrónico
    if (mail($destinatario, $asunto, $mensaje)) {
        echo "El formulario ha sido enviado correctamente.";
    } else {
        echo "Hubo un error al enviar el formulario.";
    }
} else {
    echo "Error: Método no permitido.";
}
?>



