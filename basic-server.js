const http = require('http');

let requestListener = (req, res) => {

    if(req.url == '/hello'){

        let data = {FirstName: 'Mujammal', LastName: 'Ahmed', Age: 23, Country: 'Bangladesh'};
        res.end(JSON.stringify(data));
        //res.end('<html><body><p>welcome to nodeJS server from hello</p><body></html>');

    }
    else if (req.url == '/'){

        res.end('<html><body><p>welcome to nodeJS server</p><body></html>');

    }
    else{

        res.end('<html><body><p>404! page not found</p><body></html>');

    }


}

http.createServer(requestListener).listen(3000,() => {
    console.log(`server is running on port ${3000}`);
});