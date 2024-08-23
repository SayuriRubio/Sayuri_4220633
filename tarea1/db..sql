-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS registro_nombres;

-- Usar la base de datos
USE registro_nombres;

-- Crear la tabla `nombres`
CREATE TABLE IF NOT EXISTS nombres (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);
