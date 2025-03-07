<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST["login_usuario"];
    $password = $_POST["login_password"];

    // Buscar el usuario en la base de datos
    $sql = "SELECT * FROM usuarios WHERE nombre = '$usuario'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row["password"])) {
            echo "Inicio de sesión exitoso";
        } else {
            echo "Contraseña incorrecta";
        }
    } else {
        echo "Usuario no encontrado";
    }
}
$conn->close();
?>
