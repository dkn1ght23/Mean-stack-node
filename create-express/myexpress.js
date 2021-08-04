const http = require('http');

function MyExpress()
{
    this.routes = [];

    this.requestlistener = (req, res) => {
        let url = req.url;
        let method= req.method;
        let _routes = this.routes.filter(route => {
            return route.path === url && route.method === method;
        })

        if(_routes.length > 0){
            let route = _routes[0];
            let callback = route.callback;
            if(typeof callback == 'function'){
                callback(req, res);
            }
            else{
                res.write(`can not get ${method} ${url}`);
                res.end();
            }
        }
        else{
            res.write(`can not get ${method} ${url}`);
            res.end();
        }
    }
}

MyExpress.prototype.listen = function (port, hostname = null, callback = null) {
    if(hostname !== null && typeof hostname === 'function'){
        callback = hostname;
    }
    http.createServer(this.requestlistener).listen(port, hostname, callback)
}

MyExpress.prototype.get = function (route, callback) {
    this.routes.push({
        path: route,
        callback: callback,
        method: 'GET'
    })
}

MyExpress.prototype.post = function (route, callback) {
    this.routes.push({
        path: route,
        callback: callback,
        method: 'post'
    })
}

module.exports = MyExpress;