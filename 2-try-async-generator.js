//This does not work

let most = require('most')

let {from,take,observe} = most;

async function* allTheIntegers(interval) {
    let i=0
    while(true) {
        let r = await delayPromise(1000, i++)
        return r
    }
}
 
const delayPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms))

async function run(){
    from(allTheIntegers())
        .take(100)
        .observe(async x => console.log(x))
}

run()
