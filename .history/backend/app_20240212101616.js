express =require('express');
app=express();

const {obj,func} = require('./index')

console.log(obj);
console.log(func(3))