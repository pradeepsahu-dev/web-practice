// let smallImages = document.getElementsByClassName("oldImg");
   
// for(let i=0; i<smallImages.length; i++){
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`value of image no. ${i} is changed`);
// }

//  console.dir(document.querySelector('div a'));]

// let firstpara = document.querySelector("h1");

// console.dir(firstpara);
// document.querySelector("h1").innerText = "laude";

// let acchor = document.querySelectorAll("a");
//  acchor.style.backgroundColor = "black"
  
   
// for(let i=0; i<acchor.length; i++){
//      acchor[i].style.color = "yellow"
// }
 
//  let paragraph = document.createElement("p");
//    paragraph.innerText = "hey i'am red";
   
//    document.querySelector(`body`).prepend(paragraph);
//    paragraph.classList.add("red");

//    let head3 = document.createElement("h3");
//     head3.innerText ="I'am a blue he!";
//     document.querySelector(`body`).prepend(head3);
//     head3.classList.add("blue");
  
//     let div = document.createElement("div");
//      document.querySelector(`body`).prepend(div);
//      div.classList.add("box");

//      let h1 = document.createElement("h1");
//      h1.innerText = "I'am in div";
//      div.append(h1);

//       let para2 = document.createElement("p");
//       para2.innerText = "Me TOO";
//       div.append(para2);
  
//       document.querySelector(`body`).prepend(div);



      // let body = document.querySelector("body");
      // let btn = document.createElement("button");
      // let input = document.createElement("input");
      // btn.innerText = "click me";
      // body.append(input);
      // body.append(btn);


      // btn.setAttribute("id", "btn");
      // input.setAttribute("placeholder", "username");

      // let btn1 = document.querySelector("#btn");
      //  btn1.classList.add("btnStyle");

      //  let h1 = document.createElement("h1");
      //  h1.innerText = "DOM Practice";
      //  h1.classList.add("h1color");
      //  body.append(h1);

      //  let p = document.createElement("p");
      //  p.innerHTML = "Apna College <b> Delta </b> Practice";
      //  body.append(p);



//    let btns = document.querySelectorAll("button");
//     for(btn of btns){
//       // btn.onclick = sayHello;
//       // btn.onmouseenter = function (){
            
//       // btn.addEventListener("click", sayHello);
//       // btn.addEventListener("click", sayName);
//       btn.addEventListener("dblclick", function(){
//             console.log("you double cliked me");
//       });


     
//     }
   
//   function sayHello(){
//       alert("liked bro ");
//   }
  
//   function sayName(){
//       alert("Apna college");
//   }

////// random color

//    let btn = document.querySelector("button");

//    btn.addEventListener("click", function () {
//      let h3 = document.querySelector("h3");
//      let randomColor = getRandomColor();

//      h3.innerText = randomColor;

//      let div = document.querySelector("div");
//      div.style.backgroundColor = randomColor;

//      console.log("color updated");
//    });

//    function getRandomColor(){
//       let red = Math.floor(Math.random()* 255);
//       let green = Math.floor(Math.random()* 255);
//       let blue = Math.floor(Math.random()* 255);
       
//       let color = ` rgb(${red}, ${green}, ${blue})`;
//       return color;


//    }


// let btn  = document.querySelector("button");

// btn.addEventListener("click", function(event){

//       console.log(event);
//       console.log("clicked button ")
// })

// let inp = document.querySelector("input");

//   inp.addEventListener("keyup", function(event){
//       if(event.key == "Enter"){
//         event.preventDefault();
//         console.log("Enter is locked");
//       }
      
//   });


// inp.addEventListener("blur", function(event){
//     event.preventDefault();
//      console.log("Input unfocused");
   
// })

// let btn = document.querySelector("button");
// let inp = document.querySelector("input");

// inp.addEventListener("keypress", function(event){
//       console.log("your key " ,event.key);
// });


//  let btn = document.createElement("button");
 
//  btn.innerText = "submit";
// document.body.append(btn);
// btn.addEventListener("click", function(){
//       btn.style.backgroundColor = "green";
//       console.log("color changed");
// })

// let inp = document.querySelector("input");
// let h1 = document.querySelector("h1");

// inp.addEventListener("input", function(){
//       let value = inp.value

//       h1.innerText = value;
// })

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function(){
//        console.log("div was clicked");
// });

// ul.addEventListener("click", function(event){
//       event.stopPropagation();
//        console.log("ul was clicked");
// });


// for(li of lis){ 
//       li.addEventListener("click", function(event){
//       event.stopPropagation();

//             console.log("li was clicked");
//       });
// }


// function hello(){
//       console.log("hey bro what's up ");

// }

// function one(){
      
//       console.log("jekehf uhwfkljdf ufwefj ");
// }

// one();

// function one(){
//       return 1;
// }

// function two(){
//       return one() + one();
// }

// function three(){
//       let ans = two() + one();
//       console.log(ans);
// }

// three();


// setTimeout(()=>{
//       console.log("apna collage");
// },2000);

// setTimeout(()=>{
//       console.log("heelo brohkssdjs");
// },2000);

// console.log("how are you");

// function database(data, success, failure){
//       let dataSpeed = Math.floor(Math.random()*10)+1;
//       if(dataSpeed > 4){
//             success();
//       }else{
//             failure();
//       }
// }

// database(
//       "apna college",
//       () =>{
//             console.log("data=one your data was saved :" );
//              database("hey i am radeep",  () =>{
//              console.log(" data=2 :your data was saved :" );

//             database("i am fine ", ()=>{
//                   console.log("data=3 was save")
//             },
//                 ()=>{
//                   console.log("weak connection for 3")
//                 })

//       }, 
//           ()=>{
//              console.log("data 2 weak connection" );
//       },);

//        },

//       () => {
//             console.log("weak connnection");
//       }
// );

// function saveTodb(data){
//       return new Promise((resolve, reject) =>{
//             let dataSpeed = Math.floor(Math.random()*10)+1;

//             setTimeout(() =>{
//                    if(dataSpeed > 4){
//                   resolve("success: data was saved");
//             }else{
//                   reject("connection eror");
//             }

//             },2000);
           
//       });
// } 

// async function demo() {
//   try {
//     let results = await Promise.all([
//       saveTodb("helloworld"),
//       saveTodb("jabalpur"),
//       saveTodb("munna bhai")
//     ]);

//     console.log("all data saved 😎");
//     console.log(results);

//   } catch {
//     console.log("promise was rejected ❌");
//   }
// }

// async function demo() {
//    try{ 

   
//       await saveTodb("helloworld")
//       console.log("data1 : was saved");


      
//       await  saveTodb("jabalpur")
//       console.log("data 2 : was saved");

           
//       await saveTodb("munna bhai");
//       console.log("data3 : was saved");
   
//    }catch{
//           console.log("promise was rejected");
//    }
     
// }
    

// }



// let h1 = document.querySelector("h1");
// console.dir(h1)

// function changeColor(color,delay){
//      return new Promise((resolve, reject)=>{
//             setTimeout(() =>{
//             h1.style.color = color; 
//             resolve("color changed")

//             }, delay);
 
//       })
      
// }

// async function demo() {
//     await  changeColor("red", 1000)
//       await changeColor("yellow", 1000)
//     await  changeColor("white", 1000)
//      await changeColor("brown", 1000)
//      await changeColor("purple", 1000)
//      await changeColor("green", 1000)
//      await changeColor("red", 1000)
//      await changeColor("pink", 1000)
//      await changeColor("black", 1000)
//      await changeColor("blue", 1000)
      
// }

// changeColor("red", 1000)
// .then(()=>{
//       console.log("red color was changed");
//       return changeColor("yellow", 1000)
// })
// .then(()=>{
//       console.log("yellow color was changed")
//       return changeColor("brown", 1000)
// })
// .then(()=>{
//       console.log("brown color was changed");
//       return changeColor("brown", 1000)
// })
// .then(()=>{
//       console.log("brown color was changed")
//       return changeColor("green", 1000)
// })
// .then(()=>{
//       console.log("green color was changed");
//       return changeColor("purple", 1000)
// })
// .then(()=>{
//       console.log("puple color was changed")
//       return changeColor("orange", 1000)
// })
// .then(()=>{
//       console.log("orange color was changed");
    
// })



// async function greet(){
//       throw "some error";
//       return " hello bro";
// }
// greet();

// let demo = async () =>{
//       return 5;
// };

// function getnum(){
//       return new Promise((resolve,reject) =>{
//             setTimeout(() =>{
//                   let num = Math.floor(Math.random() *10)+1;
//                   console.log(num);
//                   resolve();
//             },2000);
//       });
// }

// async function demo(){
     
//       await getnum();
//       await getnum();
//       getnum();
//       getnum();
// }


// let str = {name: "pradeep", age: 21 };

// let obj = JSON.stringify(str);
// console.log(obj)


// btn.addEventListener("click", async ()=>{
//     let fact = await getFacts();  
//     console.log(fact);

//     let p = document.querySelector("#output");

//     p.innerText = fact;
// })
// // let btn = document.querySelector("button");
// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";
// btn.addEventListener("click", async ()=>{
   
// let link = await getImage();
// let img = document.querySelector("img");
// img.setAttribute("src", link);
// });


// async function getImage(){
//       try{
//             let res = await axios.get(url2);
//             return res.data.message;
//       }catch(e){
//             console.log("error  -",e)
//             return "no fact found";
//       }
// }
//   async function getFacts(){
//       try{
//       let res = await fetch(url);
//       let data = await res.json();

//       console.log(data);

//       }catch(e){
//             console.log("error",e);
//       }
//      console.log("byee");
//   }


// let btn = document.querySelector("button");

// btn.addEventListener("click", async() =>{
//       let country = document.querySelector("input").value;
//       console.log(country);
      
// })


// async function getcolleges(country){
//       try{
//           let res =  await axios.get(url + country);
//           console.log(res.data);
//       }catch(e){
//             console.log("error");
//       }
// }

let url = "http://universities.hipolabs.com/search?country=india";

let btn = document.querySelector("button");

 btn.addEventListener("click", async() =>{
      let userinp = document.querySelector("input").value;
      console.log(userinp);

     let colArr = await getCollege(userinp);
     showcol(colArr)
 });      

 function showcol(colArr){

      let list = document.querySelector("#list");
      list.innerText = "";
      for (col of colArr){
            console.log(col.name);
            let li = document.createElement("li");
            li.innerText = col.name;
            list.appendChild(li);
      }

 }

 async function getCollege(userinp){
  try{
    let result = await axios.get(url);

    let filtered = result.data.filter(college => 
      college.name.toLowerCase().includes(userinp.toLowerCase())
    );

    return filtered;

  }catch(e){
    console.log("no data found");
    return [];
  }
}

// async function getCollege(userinp){
//       try{
//             let result = await axios.get(url+userinp);

//             let filteredbystate = result.data.filter(college => 
//                   college["state-province"] &&
//                   college["state-province"].toLowerCase().includes(userinp.toLowerCase())
//             );
//             return filteredbystate;

//       }catch(e){
//             console.log("no data found");
//       }
// }
// getCollege();