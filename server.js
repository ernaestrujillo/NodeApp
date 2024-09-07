const http = require('http');
const os = require('os');

// Función que maneja las solicitudes y responde con el nombre del servidor
const serverNameHandler = (req, res) => {
  const serverName = os.hostname();
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`v2.3 - NodeJs Nombre del Servidor: ${serverName}\n`);
};

// Especifica el puerto en el que el servidor escuchará
const port = 1683;

const server = http.createServer(serverNameHandler);

server.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
