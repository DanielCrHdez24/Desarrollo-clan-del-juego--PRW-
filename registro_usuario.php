<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["usuario_nombre"];
    $email = $_POST["usuario_email"];
    $password = password_hash($_POST["usuario_password"], PASSWORD_DEFAULT); // Encriptar contraseña

    $sql = "INSERT INTO usuarios (nombre, email, password) VALUES ('$nombre', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "Registro exitoso";
    } else {
        echo "Error: " . $conn->error;
    }
}
$conn->close();
?>
