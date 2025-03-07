<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $contenido = $_POST["publicacion_contenido"];
    $usuario = "Anonimo"; // Puedes cambiar esto cuando tengas un sistema de sesiones

    $sql = "INSERT INTO publicaciones (usuario, contenido) VALUES ('$usuario', '$contenido')";

    if ($conn->query($sql) === TRUE) {
        echo "Publicación añadida";
    } else {
        echo "Error: " . $conn->error;
    }
}
$conn->close();
?>
