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

let todo = [];
let req = prompt("Enter Your Request:");
while(true){
    if(req == "quit"){
        console.log("User quitting the app");
        break;
    }else if(req == "list"){
        console.log("_________________");
        for(let i=0; i<todo.length; i++){
            console.log(todo[i]);
        }
        console.log("________________");

    } else if(req == "add"){
       let task = prompt("enter your Task");
        todo.push(task);
        console.log("task Added");
    } else if(req == "delete"){
        let idx = prompt("enter index of, you want to delete");
        todo.slice(idx,1);
        console.log("Task Deleted, From your Dairy");
    }else{
        console.log("Wrong Request");

    }
    req = prompt("Enter your request");
}