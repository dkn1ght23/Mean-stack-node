/*let events = {};

function test()
{
    console.log("hello");
}

events['testFunction'] = test;

events.testFunction();*/


let EventManager = function (){
    //console.log(this);

    this.events = {}

    this.addEventListener = (key, callback) => {
        if(typeof callback !== "function"){
            throw 'call back needs to be a funcation';
        }
        if(this.events[key]){
            this.events[key].push(callback);
        }
        else{
            this.events[key] = [callback];
        }
    }

    //we want to emmit a event which is send feedback

    this.eventEmit = (key) =>{
        if(this.events[key]){
            let callbacks = this.events[key];
            callbacks.forEach(callback => callback());
        }
        else{
            console.log(`No event lister registered for event named ${key}`)
        }
    }

}

let eventManager = new EventManager();

//creating events
eventManager.addEventListener('click', () => {
    console.log('click event genarated');
})

eventManager.addEventListener('click', () => {
    console.log('click event genarated 2');
})

//checking if event exists or not
eventManager.eventEmit('click');
eventManager.eventEmit('welcome');


//built in event listeners and emitter

const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('click', () => {
    console.log('click event');
})

eventEmitter.emit('click');