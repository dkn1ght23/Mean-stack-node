const http = require('http');

const Uploader = require('./upload');


const port = 3000;
const hostName = 'localhost';

let mediaDirectory = __dirname + '/media/';
let fileUploader = new Uploader(mediaDirectory);


let requestListener = (req, res) => {
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
    })
    if(req.url === '/file-upload' && req.method === 'POST'){
        fileUploader.upload(req, res);
    }
    else if(req.url == 'sendmail')
    else{
        //console.log(req.headers);
        res.write('testing localhost');
        res.end();
    }

}

let onServerRun = (res) => {
    //console.log(res);
    console.log(`server is running on local host ${3000}`);
}

http.createServer(requestListener).listen(port, hostName, onServerRun );