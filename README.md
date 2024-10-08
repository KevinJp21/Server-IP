# Server IP

Este proyecto es una aplicación de servidor simple que devuelve la dirección IP del cliente que realiza la solicitud. Está construido con Node.js y Express.

## Requisitos

- Node.js
- npm

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/KevinJp21/Server-IP.git
   cd Server-IP
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso

1. Crea un archivo `.env` en la raíz del proyecto y define las variables de entorno necesarias (si las hay).

2. Inicia el servidor:
   ```bash
   npm start
   ```

3. El servidor estará corriendo en `http://localhost:3000` (o en el puerto definido en la variable de entorno `PORT`).

## Endpoints

### GET /

Devuelve la dirección IP del cliente.

#### Ejemplo de respuesta

```json
{
  "ip": "127.0.0.1"
}
```
## Dependencias

- express
- cors
- compression
- dotenv
- helmet

## Estructura del Proyecto

```plaintext
.
├── index.js
├── package.json
├── src
│   └── api.js
└── vercel.json
```
