# Proyecto Docker: Frontend y Backend en Docker

Este proyecto contiene una **aplicación web** compuesta por dos partes:
1. **Frontend**: Una aplicación estática en HTML, CSS y JavaScript servida por Nginx.
2. **Backend**: Un servidor PHP simple, utilizando Apache, que devuelve una respuesta en JSON.

Ambos se ejecutan en contenedores Docker y están conectados entre sí a través de una red interna.

## Requisitos

- [Docker](https://www.docker.com/products/docker-desktop) instalado en tu máquina.
- [Docker Compose](https://docs.docker.com/compose/) (generalmente incluido con Docker Desktop).
- Un **subdominio** en Hostinger o cualquier servicio de hosting para el despliegue en línea.

## Estructura del Proyecto

ProyectoDocker/
│
├── backend/
│   ├── Dockerfile
│   └── index.php
│
├── frontend/
│   ├── Dockerfile
│   └── index.html
│
└── docker-compose.yml

### Descripción de Archivos

1. **docker-compose.yml**:
   - Define los servicios `frontend` y `backend`.
   - Conecta ambos servicios a través de una red interna llamada `app-network`.
   - Expone los puertos para el frontend (`3000`) y el backend (`8080`).

2. **backend/Dockerfile**:
   - Usa la imagen oficial de `php:8.2-apache` para ejecutar el servidor PHP.
   - Copia los archivos del backend al contenedor y expone el puerto 80.

3. **backend/index.php**:
   - Devuelve un mensaje JSON indicando que el servidor backend está funcionando.

4. **frontend/Dockerfile**:
   - Usa la imagen oficial de `nginx:latest` para servir los archivos estáticos del frontend.
   - Copia los archivos del frontend al contenedor y expone el puerto 80.

5. **frontend/index.html**:
   - Página simple que interactúa con el backend y muestra el mensaje JSON.

---

## Instrucciones para el Despliegue Local

**1\. Clona el Proyecto

```bash
git clone https://github.com/gaabrielagranda/ProyectoDocker.git
cd ProyectoDocker

**2\. Construye y Levanta los Contenedores**

Construye los contenedores utilizando Docker Compose:

docker-compose up --build -d

Esto construirá las imágenes de los contenedores (frontend y backend) y los iniciará en segundo plano.

**3\. Accede a la Aplicación**

-  **Frontend**: Accede a la aplicación en http://localhost:3000.

-  **Backend**: Accede al backend en http://localhost:8080.

Si todo está funcionando correctamente, deberías ver el mensaje de éxito tanto en el frontend como en el backend.

**4\. Detén los Contenedores**

Para detener los contenedores, usa el siguiente comando:

docker-compose down

Este comando detendrá y eliminará los contenedores, pero los datos en las imágenes no se perderán.