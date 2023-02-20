// What is the function ...?/////=====>//
/////==> A function is block of code , or set of code
///==> which is use to perform Particular task when it has been called =>
// that  is design to perform particular task and executed with code Function
//   DECLERATION, Function EXPRESSION, ARROW function..///
////////////////////FUNCTION STATEMENT/////
// a();
// b();

// function sk() {
//   console.log("afaan is software engg");
// }
// sk();
//this way of creating a function is know as a function.//

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(7,5));

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(2, 3, 5,));

// function sum(a, b) {
//     let total = 0;
//   for (let value of arguments)
//   total += value;
//   return total;
// }
// console.log(sum(2, 3, 5., 7, 8, 9));

// function sum (x, y) {
//     let total = 0;
//     for (let value of arguments)
//     total += value;
//     return total;
// }
// console.log(sum(5,10,15,20));

// function sk(r, k) {
//     let total = 0;
//     for (let value of arguments)
//     total += value;
//     return total;
// }
// console.log(sk(5,5));

// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         const self = this;
//         this.tags.forEach(function(tag) {
//        console.log(self.title, tag);
//         });
//     }
// };
// video.showTags();

// function playVideo(a, b) {
//     console.log(this);

// }
// playVideo.call({name: 'Rafik'});
// playVideo.apply({name: 'shaikh'});
// playVideo.bind({ name:'rk'});

// playVideo();

// function srk(x,y) {
//   return  x *y
// }
// console.log(srk(5,5));

// ////////////////FUNCTION EXPRESSION//////
// var b = function (x,y) {
//     console.log(x+y)
// }
// b(20,30);

// const avg = function(a, b){
//     return (a + b);
// };

// const avg = function (a, b) {
//   return a + b;
// };
// let x = avg(8, 18);
// console.log(x);
///////////////////////////
// const rk = function (a, b) {
//   return a * b;
// };

// let sk = rk(8, 18);
// console.log(sk);

// let x = avg(5, 4);
// console.log(x);

// let a = 20;
// let b = 40;

// let totalṣ = sum (a, b);
// console.log(totals);
// totals = sum (1, 7);///argument
// console.log(totals);

// function sum(a, b) {
//   ///parameter
//   let sum = a + b;

//   return sum;
// }

// let totals = sum(9, 7);

// function sum(x,y)
// {
//   return x + y;
// }
// console.log(total);

// function fullName(fname, lname) {
//   var sk = "Hello" + " " +fname + " " + lname
//   return sk;
// }
// var rk = fullName("Mohmand", "Rafik");
// console.log(rk);

// function fullName( fname, lname) {
//     var a = "Hello- RK"  + fname + " " + lname + " welcome back";
//     return a;
// }
// var b = fullName("Rafik", "Khan");
// console.log(b);

// function sumMarks(hindi, eng, phys, chemi, math) {
//   var a = hindi + eng + phys + chemi + math;
//   return a;
// }
// var b = sumMarks(80, 78, 70, 70, 78);
// console.log("Marks Obtain - " + b);

// function percentage(total) {
//   var c = (total / 500) * 100;
//   return c;
// }
// var d = percentage(b);
// console.log("percentage" + " " + d + " % ");

// function sachin(){
//     console.log("Hello Rafik shaikh IT engginear");
//     console.log("you Can call me RK");
//     console.log(" Mechanical engginears moved on IT fileds");
//     console.log(" B.Tech ENGGINEAR ");
//     console.log("Software Devloper");

// };z
// sachin();

//////Function Declaration ////
// let s = 50;
// let k = 70;

// let total = sum(a,b);
// total= sum (1, 7)
// console.log(total);

// function sum(a, b) {
//     let sum = a+b;
//     return sum;
// }
//  let x = 10;
//  let y = 5;

//  let total = deVide(x, y)
//  console.log(total);

// function  deVide(x, y) {
//     let  deVide = (x * y);
//     return deVide;
// }
// deVide(5,5);
// function hello() {
//   console.log("srk here");
// }
// hello();

//////////////////////////Function Expression////
// const avg = function(a, b) {
//     return (a+b) ;
// }
// let x = avg(25, 75);
// console.log(x);

// let rafik = function(x, y){
//     return(x*y);
// }
// let  sachin = rafik(25, 12);
// console.log(sachin)


// const srk = function(x,y){
//     return (x-y);

// }
// let z = srk(111, 101);
// console.log(z);

// let hello = function () {
//   console.log("Hello rk");
// };
// hello();

//////////////////////Fat Arrow function//////
//  let hello = () => {
//     console.log("HELLOW");
//  }
//  hello();

////////////////CLOSURE FUNCTION////////////////
// the closure is the combination of js function the inner function  has  the access of outer function veriable

// function myName() {
//   var a = "Shoib";
//   function NewName() {
//     var a = "azhar";
//     console.log(a);
//   }
//   NewName();
// }
// myName();
// function sachin(){
//     var sachu ="sahin gaikwad";
//     function rk() {
//         var sk = "rafik khan";
//     }
//     console.log(sk)
//     rk()
// }
// sachin();

// function sum(a,b) {
//   var sk = (a+b)
//   console.log( sk + "this is rk");
//   function rk() {
//     var srk = "Shoib khan";
//     console.log(sk);
//   }
//   rk();

// }
// sum(15, 20);



// function multi(x, y){
//     let arr = x *y;
//     function sss(){
//         let arr2 = x+y;
//             console.log(arr)
//         }
//         sss()
        
//     }
//     multi(2,4)



/////////////////////////ARROW FUNCTION/////////////////////////////////////////////////
//ARROW FUNCTION is one of the features introduced in the ES6 version of JavaScript . it allows you to create  functions in a cleaner way compared to regular functions.//
// ///regular function //
// let x = function (x, y) {
//   return x * y;
// };
// console.log(x(5, 7));//35//

//CALL BACK FUNCTION///
// High Order Function : A function that accepts another function as an arguments
// callback Function: A function that is passed as an argument to another function.
// function getFullName(firstname, lastname) {
//     return `${firstname}` +  " " + `${lastname}`
// }
// console.log(getFullName("sachin", "rk"));


// var a = 10;
// function test() {
//     console.log(a);
//     var a = 20;
//     console.log(a);
// }
// test();

// var test = function () {
//   console.log(10);
// };

// function test() {
//   console.log(20);
// }
// test();
