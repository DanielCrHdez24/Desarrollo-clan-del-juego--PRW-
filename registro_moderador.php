<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["mod_nombre"];
    $email = $_POST["mod_email"];
    $password = password_hash($_POST["mod_password"], PASSWORD_DEFAULT); // Encriptar contraseña

    $sql = "INSERT INTO moderadores (nombre, email, password) VALUES ('$nombre', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "Moderador registrado exitosamente";
    } else {
        echo "Error: " . $conn->error;
    }
}
$conn->close();
?>
