<?php
// Recoge los datos del formulario
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$indirizzo = $_POST['indirizzo'];
$immagine_aerea_edificio = $_POST['immagine_aerea_edificio'];
$consumo_kWh_annuo_spesa_mensile_energia_opzionale = $_POST['consumo_kWh_annuo_spesa_mensile_energia_opzionale'];

// Construye el mensaje de correo electrónico
$email_message = "
Name: ".$name."\n
Email: ".$email."\n
Phone: ".$phone."\n
Indirizzo: ".$indirizzo."\n
Immagine Aerea Edificio (Opzionale): ".$immagine_aerea_edificio."\n
Consumo kWh/annuo/ Spesa Mensile Energia (Opzionale): ".$consumo_kWh_annuo_spesa_mensile_energia_opzionale."\n
";

// Sanitiza la dirección de correo electrónico
$cleaned_email = filter_var($email, FILTER_SANITIZE_EMAIL);

// Verifica si la dirección de correo electrónico es válida
if (filter_var($cleaned_email, FILTER_VALIDATE_EMAIL)) {
    // Envía el correo electrónico
    if (mail("info@lc-energia.it", "New Message", $email_message)) {
        header("location: ../mail-success.html");
        exit();
    } else {
        echo "Error al enviar el correo electrónico.";
    }
} else {
    echo "Dirección de correo electrónico no válida.";
}
?>





