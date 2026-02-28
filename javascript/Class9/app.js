// let sum = function(a, b){
//     return a+b;
// }

// console.log(sum(1, 20));



// // Higher order function

// function multipleGreet(func, n){
//     for(let i = 0; i < n; i++)
//     {
//         func();
//     }
// }

// let greet = function(){
//     console.log("Good Morning");
// }


// multipleGreet(greet, 2);


// function OddEvenTest(req)
// {
//     if(req=="odd")
//     {
//         return function(n){
//             return n%2 != 0;
//         }
//     }
//     else if(req=="even")
//     {
//         return function(n){
//             return n%2==0;
//         }
//     }
//     else
//     {
//         console.log("Unknown request");
//     }
// }

// let evenfunc = OddEvenTest("even");

// console.log( evenfunc(3) );

const calculator = {
    name: "casio",
    mfg: "2022/02/21",
    add: function(a, b)
    {
        return a+b;
    },
    sub(a,b)
    {
        return a-b;
    },

    mul: function(a,b)
    {
        return a*b;
    },
    printDetails(){
        console.log(`${this.name} and ${this.mfg}`)
    }
}

// console.log(calculator.sub(2, 3));
calculator.printDetails();

// let a = 10;
// console.log("hello");

// console.log("hello");

// console.log("hello");
// try{
//     console.log(a);
// }
// catch{
//     console.log("variable is not defined");
// }

// console.log("hello");

// console.log("hello");

// console.log("hello");


