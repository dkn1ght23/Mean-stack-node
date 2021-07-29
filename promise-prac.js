function CoustomPromise(executor){

    this.resolveCallbacks = [];
    this.rejectedCallbacks = [];

    this.resolve = (result) => {
        this.resolveCallbacks.forEach(callback => callback(result));
    }

    this.resolve = (reason) => {
        this.rejectedCallbacks.forEach(callback => callback(reason));
    }

    setTimeout( () => {
        executor(this.resolve, this.reject);
    })

}

CoustomPromise.prototype.then = function (resolve) {
    if(typeof resolve !== 'function')
        throw 'resolve is not a function here';
    this.resolveCallbacks.push(resolve);
    return this;
}

CoustomPromise.prototype.catch = function (reject) {
    if(typeof reject !== 'function')
        throw 'reject is not a function here';
    this.rejectedCallbacks.push(reject);
    return this;
}

new CoustomPromise( (resolve, reject) => {
    resolve('hello resolved');
}).then( (value) => {
    console.log(value);
}).catch( (reason) =>{
    console.log(reason);
}).then( (value) => {
    console.log(value);
})

new Promise( (resolve, reject) => {
    reject('test');
}).then( (value) => {
    console.log(value);
}).catch( (reason) =>{
    console.log(reason);
}).finally( (value) => {
    console.log('finally here');
})

