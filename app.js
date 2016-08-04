var bookA=require("./book.js")();
var bookB=require("./book.js")();
var http=require("http");
http.cr
bookA.rate(10);
bookB.rate(20);
console.log(bookA.getRate()+":::"+bookB.getRate());