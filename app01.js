// var http=require('http');
// http.createServer(function(request, response)
// {
//     response.writeHead(200,{'Content-Type':'text/plain'});
//     response.end('Hello World\n');
// }).listen(8081);
// console.log('Server running at http://127.0.0.1:8081/'); //port 8081 แทน localhost


//console.log(__filename);
//console.log(__dirname);
// function helloWorld(){
//     console.log("Hello World")
// }
// var t=setTimeout(helloWorld,3000)
//clearTimeout(t)


// var i =0;
// var t = setInterval(counter,2000);
// function counter(){
//     i++;
//     console.log(i);
// }
// setTimeout(function(){
//     clearInterval(t);
// },10000);


// var circle = require('./circle.js'); // . คือ current path
// console.log(circle.area(50));
// console.log(circle.add(1,2));
// console.log(circle.pi);

// var util = require('util');
// var fs = require('fs');

// function readFile(str, callback){
//     var lines =[];
//     fs.readFile(str, function (err, data) {
//         if (err) throw err; 
//         lines.push(data); 
//         console.log(data.toString());
//     });
//    callback(lines);
// }


// var a, b;
// readFile('./20.txt', function(data){
//     a= data;
// }); 


// readFile('./10.txt',function(data){
//     b= data;
// }); 
// util.log("a -- "+a);
// util.log("b -- " +b);


// var assert = require('assert');
// function add(a, b) {
// return a+b;
// }
// var expected = add(1,2);
// assert( expected=== 4,'one plus two is four');


// buf = new Buffer(10);
// buf.write("abcdefghj","ascii");
// console.log(buf.toString('base64'));
// buf = buf.slice(0,5);
// console.log(buf.toString('utf8'));


// var buf = new Buffer('Hello World')
// var json = buf.toJSON(buf)
// console.log(json)


// var crypto=require('crypto');
// var fs=require('fs');
// var shasum = crypto.createHash('sha1');
// var s = fs.ReadStream('file.txt');
// s.on('data',function(d) {
// shasum.update(d);
// });
// s.on('end',function() {
// var d = shasum.digest('hex');
// console.log(d+' -- file.txt');
// });


// var dns = require('dns');
// dns.lookup('www.google.com', function
// onLookup(err,addresses, family) {
// console.log('addresses:', addresses);
// });


// var fs=require('fs');
// fs.writeFile('message.txt','Hello Node',
// function(err) {
//     if(err) throw err;
//     console.log('It\'s saved!');});

var crypto=require('crypto');
var fs=require('fs');
var shasum = crypto.createHash('sha1');
var readMe = fs.readFileSync('./user.txt','utf8')
var x = readMe.split("\n");
console.log(x)


buf = new Buffer(x[0]);
buf1 = new Buffer(x[1]);
shasum.update(buf1);
var buf2 = shasum.digest('hex');



fs.mkdir('data', function(){
    fs.writeFileSync('./data/output.txt',buf+'\n'+buf1+'\n'+buf.toString('base64')+'\n'+buf2)
})
