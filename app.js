//  GLOBAL    - NO WINDOW

// __dirname  - path ot current directory
// __filename - file name
// require    - function ot use modules (commonJs)
// module     - info about current module (file)
//process     - info about env where the program is being executed

// commonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// npm --global command comew with node
// npm --version

// local Dependency - use it only in this particular project
// npm i <packageName>

// global Dependency - use it in any project
// npm i -g <packageName>

// package.json - manifest files (store important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, presss enter to skip)
// npm init -y (everything default)



// const { john, peter } = require("./names");
// const sayHi = require("./utils");
// const data = require("./alternate");
// require('./number')
// console.log(data);
// console.log(names)

// sayHi('susan')
// sayHi(john)
// sayHi(peter)

// ============= Built-In Modules =============
// require('./os-module')
// require('./path-module')
// require('./fs-module')
// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write(`<h1>Welocme to our HomePage</h1>`);
//     res.end();
//   }else if(req.url === '/about'){
//     res.write(`
//     <h1>About</h1>
//     <p>“Lorem ipsum” dummy text is used by many web-developers to test how their HTML templates will look with real data. Often, developers use third-party services to generate “Lorem ipsum” text, but now you can do that right in your editor. Just expand lorem or lipsum abbreviations to get the following snippet:</p>
//     `)
//     res.end()
//   }else{
//     res.end(`<h1>oops !</h1>
//     <p>We can't seem to find the page your are looking for</p>
//     <a href='/'>Back to Homepage</a>
//     `)}
  

// });

// const port = process.env.PORT || 3000;
// server.listen(port);

const _ = require('lodash')

const items = [1,[2,[3,[4,[5]]]]]
const obj = {a:{b:{c:{d:{f:{}}}}}}
const newItem = _.flattenDeep(items)
const newObj = _.flattenDeep(obj)
console.log(newObj)
console.log(newItem)