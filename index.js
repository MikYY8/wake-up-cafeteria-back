import  { createServer } from 'http';

const httpServer = createServer((req, res) => {
  console.log('Este mensaje se va a mostrar por consola');
  res.end('Este mensaje se va a mostrar en el navegador')
});

httpServer.listen(3000);