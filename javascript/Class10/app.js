// let sum = (a, b) => {
//     return a+b;
// }


// let sum = (a, b) => a+b ;

// console.log(sum(1, 2));
// function someTimeConsumingActivity()
// {
//     let sum = 0;
//     for(let i = 0; i < 1000; i++)
//     {
//         sum+=i;
//     }

//     console.log(sum);
// }
// console.log("hi there");

// setTimeout(someTimeConsumingActivity, 4000);

// console.log("Welcome to OpqTech");
// console.log("Welcome to OpqTech");
// console.log("Welcome to OpqTech");
// console.log("Welcome to OpqTech");
// console.log("Welcome to OpqTech");

// console.log("Welcome to OpqTech");
// console.log("Welcome to OpqTech");
// console.log("Welcome to OpqTech");
// console.log("Welcome to OpqTech");

// console.log("Welcome to OpqTech");
// console.log("Welcome to OpqTech");
// console.log("Welcome to OpqTech");
// console.log("Welcome to OpqTech");



// const  someTimeConsumingActivity = () =>
// {
//     let sum = 0;
//     for(let i = 0; i < 1000; i++)
//     {
//         sum+=i;
//     }

//     console.log(sum);
// }
// console.log("hi there");

// let id = setInterval(someTimeConsumingActivity, 1000);

// console.log("Welcome to OpqTech");
// //clearInterval(id);

// setTimeout(()=>{
//     clearInterval(id);
// }, 4000);



const student = {
    name: "Nithin",
    marks: 95,
    getName: function(){ // this is  created freshly and refers to the calling object
        console.log(this.name);
    },
    getMarks:()=>{        // this is not created freshly here, it inherits this from the surronding place where it has been created. 
        console.log(this)
        console.log(this.marks);
    },
    getInfo1: function(){  // this
        setTimeout(()=>{
            console.log(this); // current obj
        }, 4000);
    },
    getInfo2: function(){
        setTimeout(function(){
            console.log(this); // window obj
        }, 4000);
    }



};

// console.log(this)
// student.getName();
// student.getMarks();

student.getInfo2();

