

/**
 * how to create function
 * 1:Function
 * 2: literals
 * 3 ES 6 Class
 * 
 * class=data+method
 */

function Employee() {
    this.id = 1;
    this.name = 'pp';
}
var emp = new Employee();
console.log(emp);

class Greeter {
    constructor() {
        this.messgage = 'something'
    }
    hello=()=>{
        return "hello"
    }
}