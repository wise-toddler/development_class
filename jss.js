// const fs = require('fs');
// const path = './file.txt'; 
// const newContent = 'class is going on\n'; 

// // readFileSync
// // readFile 
// // appendFile
// // writeFileSync
// // mkdir 
// // rmdir
// // fs.rename(oldPath, newPath, callback)
// // move // use remane for moveing also
// // fs.unlink( // to delete a file

// //brotli compression


const http = require('http')
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/') {
        res.write('<html><head><title>Node.js Class</title></head><body>');
        res.write('<h1>Hello login</h1>');
        res.write('</body></html>');
        res.end();
    }
    else {
        res.write('<html><head><title>Node.js Class</title></head><body>');
        res.write('<h1>Hello World</h1>');
        res.write('</body></html>');
        res.end();
    }
})
const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log('Server is running at http://${host}:${port}')
});

