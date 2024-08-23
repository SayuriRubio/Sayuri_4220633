<?php
// Datos de conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registro_nombres";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener el nombre desde el formulario
$nombre = $_POST['entrada'];

// Insertar el nombre en la base de datos
$stmt = $conn->prepare("INSERT INTO nombres (nombre) VALUES (?)");
$stmt->bind_param("s", $nombre);
$stmt->execute();

// Contar cuántas veces se ha guardado ese nombre
$stmt = $conn->prepare("SELECT COUNT(*) as total FROM nombres WHERE nombre = ?");
$stmt->bind_param("s", $nombre);
$stmt->execute();
$result = $stmt->get_result();
$row = $result->fetch_assoc();
$total = $row['total'];

// Cerrar la conexión
$stmt->close();
$conn->close();

// Redirigir a la página principal con el resultado
header("Location: index.html?nombre=$nombre&total=$total");
exit();
?>
