const http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'html');
  fs.readdir('d:\\Web\\lenkahornacekova.sk\\git\\Lenka\\', (err, data) => {
    if (err)
    {
        console.log(err);
        throw err;
    } 
    console.log(data);
    data.forEach(file => { 
        console.log(file); 
        }) 
   
        console.log();
    //res.end(data);
  });
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});