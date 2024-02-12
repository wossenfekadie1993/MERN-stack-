// express =require('express');
// app=express();

// const {obj,func} = require('./index')

// console.log(obj);
// console.log(func(3,5));
const fs =require('fs');
// fs.appendFileSync('first.txt',"welcome ");
console.log(fs.readFileSync('first.txt').toString);
