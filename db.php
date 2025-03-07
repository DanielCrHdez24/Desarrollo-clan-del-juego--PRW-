<?php
$host = "localhost";
$user = "root"; // Usuario de MySQL por defecto
$pass = "Danito16"; // Sin contraseña por defecto en WAMP
$dbname = "clan_juego"; // Nombre de tu base de datos

$conn = new mysqli($host, $user, $pass, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>
