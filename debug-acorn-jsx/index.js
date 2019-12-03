var acorn = require("acorn");
var jsx = require("acorn-jsx");

const data = `<div class="a">Hello, world</div>`;
const result = acorn.Parser.extend(jsx()).parse(data);

console.log(JSON.stringify(result));
