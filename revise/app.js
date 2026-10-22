// let arr = [7,9,0,-2]
// console.log(arr.slice(0,3));
// console.log(arr);
// let str = "";
// if(str === ''){
//     console.log("yes this is empty str:")

// }else{
//     console.log("not empty");
// }
// let str = "PradEep";

// if(str[4] === str[4].toLowerCase()){
//     console.log("yes")
// }else{
//     console.log("no");
// }
//  To Do App practice

// let todo = [];
// let req = prompt("Enter Your Request:");
// while(true){
//     if(req == "quit"){
//         console.log("User quitting the app");
//         break;
//     }else if(req == "list"){
//         console.log("_________________");
//         for(let i=0; i<todo.length; i++){
//             console.log(todo[i]);
//         }
//         console.log("________________");

//     } else if(req == "add"){
//        let task = prompt("enter your Task");
//         todo.push(task);
//         console.log("task Added");
//     } else if(req == "delete"){
//         let idx = prompt("enter index of, you want to delete");
//         todo.slice(idx,1);
//         console.log("Task Deleted, From your Dairy");
//     }else{
//         console.log("Wrong Request");

//     }
//     req = prompt("Enter your request");
// }

//  practice for loops

// let arr = [1,2,2,3,5,2];
// let num = 2;
// for(let i=0; i<=arr.length-1; i++){
//     if(arr[i] == num){
//         arr.splice (i,1);
//         i--;
//     }

// }
//  console.log(arr);


// let dgt = 287152;
//  console.log(dgt.length);

// let num = Math.random();
// let step1 = num*10;
// let step3 =Math.floor(step1);

// let step4 = step3+1;
// console.log(step4);
// let num = Math.floor(Math.random()*10)+1;
// console.log(num);

// let num = Math.floor(Math.random()*100)+1;
//  console.log(num);

// let max = (prompt("Enter your maximum number:"));
// let randNum = Math.floor(Math.random()*max)+1;
// let guess = (prompt("guess the number"));
// while(true){
//    if(guess == "quit"){
//     console.log("user quit app");
//     break;
//    }
//    if(guess == randNum){
//     console.log("you are right");
//     break;
//    }else{
//     guess = (prompt("wrong guess"));
//    }

// }

// higher order function

// function multipleGreet(fun,count){
//    for(let i=0; i<=count; i++){
//       fun();

//    }
// }

//  function greet (){
//    return "hello";
// }

// multipleGreet(greet,3);

// function greet(name){
//    return "hello";
// }
// function processUser(callback){
//    console.log(callback("pradeep"));
// }
// processUser(greet);

// let arr = [3,2,7,6,5,8,9,4,5];
// let num = 3;
// function larger(arr,num){
//    for(let i=0; i<arr.length; i++){
//       if(arr[i]>num){
//          console.log(arr[i]);
//       }
//    }
// }
// larger();

// let start = 100;
// let end = 200;
// function randomNum(start,end){
//    return Math.floor(Math.random()*end-start+1)+start;
// }
// console.log(randomNum(start,end));

// let str = "abkjfkfmnjnfmggs";
// function getUnique(str){
//    let result = "";
//    for(let i=0; i<str.length; i++){
//       let char = str[i];
//       if(!result.includes(char)){
//          result += char;
//       }
//    }
//    return result
// }
// console.log(getUnique(str));
