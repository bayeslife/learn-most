
let most = require('most')

let {from,take,observe} = most;

function* allTheIntegers() {
    let i=0
    while(true) {
        yield i++
    }
}
 
// Log the first 100 integers
from(allTheIntegers())
    .take(100)
    .observe(x => console.log(x))
