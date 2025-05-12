<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $apellido = htmlspecialchars($_POST['apellido']);
    $email = htmlspecialchars($_POST['email']);
    $telefono = htmlspecialchars($_POST['telefono']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    $destinatario = "repuestos@centrointegral.com.ar";
    $asunto = "Nueva consulta desde el formulario de CIAM";

    $cuerpo = "Nombre: $nombre $apellido\n";
    $cuerpo .= "Email: $email\n";
    $cuerpo .= "Teléfono: $telefono\n\n";
    $cuerpo .= "Mensaje:\n$mensaje\n";

    $headers = "From: $email";

    if (mail($destinatario, $asunto, $cuerpo, $headers)) {
        header("Location: gracias.html");
        exit();
    } else {
        echo "Error al enviar el mensaje. Intentá nuevamente más tarde.";
    }
} else {
    echo "Acceso no permitido.";
}
?>
