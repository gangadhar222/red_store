// Generators allow us to return multiple values with the help of special keyword that is yield

function* sayHiGenerator() {
    yield "Hey"
    return "Hi"
}

const result = sayHiGenerator();
console.log(result.next())
console.log(result.next())

//  we can use for of loop to extract all the return values from generator

// lets take an example

function* multipleGenerator() {
    yield "Hello"
    yield "Gangadhar"
    yield "How are you?"
    return "nothing"
}

const multipleReturns = multipleGenerator();
for (const iterator of multipleReturns) {
    console.log(iterator)
    // but last return value is ignored
}

// we actually control the flow of generator fumction from outside that is the beauty of generators

// lets take example for that also

function* controllableGenrator() {
    yield "Hello Gangadhar"
    yield "What is your profession"
    const profession = yield "tell your profession"
    yield profession
}

const controllable = controllableGenrator();

console.log(controllable.next());
console.log(controllable.next());
console.log(controllable.next());
console.log(controllable.next("Engineer who love to solve problems"));// here we need to send the info which can be used by generator

// output

// { value: 'Hello Gangadhar', done: false }
// { value: 'What is your profession', done: false }
// { value: 'tell your profession', done: false }
// { value: 'Engineer who love to solve problems', done: false }
// note: if generator dont find any return then done will be true even after it encounters last yield