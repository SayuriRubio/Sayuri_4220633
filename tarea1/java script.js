document.getElementById("formulario").addEventListener("submit", function(event) {
      
    // Obtener el valor del campo de entrada
    const contenido = document.getElementById("entrada").value + " " + document.getElementById("entrada2").value;

    // Crear un Blob con el contenido del campo de entrada
    const blob = new Blob([contenido], { type: "text/plain;charset=utf-8" });

    // Generar una URL temporal para el Blob
    const url = URL.createObjectURL(blob);

    // Crear un enlace para descargar el archivo
    const enlaceDescarga = document.createElement('a'); 
    enlaceDescarga.href = url;
    enlaceDescarga.download = 'Tus datos.txt';

    // Agregar el enlace al DOM, hacer clic en él, y luego removerlo
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();
    document.body.removeChild(enlaceDescarga);

    // Liberar la URL creada
    URL.revokeObjectURL(url);
});
