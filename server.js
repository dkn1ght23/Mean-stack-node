const http = require('http');

const Uploader = require('./upload');
//const MailSender = require('./mailsender');
const eventHandlers = require('./eventhandlers');
const events = require('events');
const eventEmitter = new events.EventEmitter();


const port = 3000;
const hostName = 'localhost';

let mediaDirectory = __dirname + '/media/';
let fileUploader = new Uploader(mediaDirectory);


let requestListener = (req, res) => {

    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
    })

    if(req.url === '/promise-a'){
        setTimeout(() => {
            res.write('testing local host after 5s');
            res.end();
        }, 5000);
    }
    else if(req.url === '/promise-b'){
        setTimeout(() => {
            res.write('testing local host after 3s');
            res.end();
        }, 3000);
    }

    else if(req.url === '/file-upload' && req.method === 'POST'){
        fileUploader.upload(req, res);
    }

    else if(req.url === '/sendmail' && req.method === 'GET'){
        //let sender = new MailSender();

        let mailDetails = {
            subject: 'Account registration',
            body: 'Welcome onboard, Your code is 4a7s93',
            to: 'tanzilebad@gmail.com'
        }
        //sender.send(req, res, mailDetails);
        eventEmitter.emit('sendmail', mailDetails);
        res.write('sending mail');
        res.end();
    }

    else{
        res.write('testing localhost');
        res.end();
    }

}

let onServerRun = (res) => {
    eventHandlers(eventEmitter);
    console.log(`server is running on local host ${3000}`);
}

http.createServer(requestListener).listen(port, hostName, onServerRun );