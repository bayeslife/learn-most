

let most = require('most')
var events = require('events');

let {from,fromEvent,take,observe} = most;

async function* allTheIntegers(interval) {
    let i=0
    while(true) {
        let r = await delayPromise(interval, i++)
        yield r
    }
}
 
const delayPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms))

async function allthedata(){
    var eventEmitter = new events.EventEmitter();

    async function generate(){
        for await(const v of allTheIntegers(1000)){
            eventEmitter.emit("message",v)
        }
    }
    return {
        generate,
        stream: most.fromEvent("message",eventEmitter)
    }
} 

async function run(){
    let {generate,stream} = await allthedata()
    stream.observe(x => console.log(x))
    generate()
}

run()
