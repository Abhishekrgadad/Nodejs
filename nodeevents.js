const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('waterfull', ()=>{
    console.log("Please turn off the tap");
    setTimeout(() => {
        console.log("Please turn off the motor its an gentle remainder");
    }, 3000);
});