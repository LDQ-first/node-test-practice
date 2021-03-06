const { num1, num2 } = require('../src/fn')
const Benchmark = require('benchmark')

/* const s1 = Date.now()
num1('123456')
const e1 = Date.now()

console.log(e1 - s1)

const s2 = Date.now()
num2('123456')
const e2 = Date.now()

console.log(e2- s2) */

const suite = new Benchmark.Suite

/* // add tests
suite.add('RegExp#test', function() {
    /o/.test('Hello World!')
  })
  .add('String#indexOf', function() {
    'Hello World!'.indexOf('o') > -1
  })
  .add('String#match', function() {
    !!'Hello World!'.match(/o/)
  })
  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target))
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  // run async
  .run({ 'async': true }) */

suite.add('parseInt', () => {
  num1('123456')
}).add('Number', () => {
  num2('123456')
}).on('cycle', (e) => {
  console.log(String(e.target))
}).on('complete', function() {
  console.log(`Fastest is ${this.filter('fastest').map('name')}`  )
  console.log(`Slowest is ${this.filter('slowest').map('name')}`  )
}).run({ async: true })