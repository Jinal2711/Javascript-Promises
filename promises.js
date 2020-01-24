function printStirng(string){
  setTimeout(() => {
    console.log(string);
  },
  Math.floor(Math.random()*100)+1
  );
}

function printAll(){
  printStirng('A');
  printStirng('B');
  printStirng('C');
}
printAll();

// above code run in asynchronous way it will print a b c with its own settimeout 
// they wont wait for the last function to finish before start.
// fix that using callback.

function printStirng(string,callback){
setTimeout(() => {
  console.log(string);
  callback();
}, Math.floor(Math.random()*100)+1);
}

function printAll(){
  printStirng("A",() =>{
    printStirng("B",()=>{
      printStirng("C",()=>{

      })
    })
  })
}

printAll();
// problem with the callback is it creates something called callback hell
// you start nesting function within funtion nd its really hard to read.
// Promises try to fix this problem

function printStirng(string){
  return new Promise((resolve,reject) =>{
    setTimeout(() => {
      console.log(string);
      resolve()
    }, Math.floor(Math.random()*100)+1);
  })
}

function printAll(){
  printStirng('A')
  .then(() => printStirng('B')
  )
  .then(() => printStirng('C')
  )
}

printAll()

// still looks messy 
// async await is syntatically suger for promises.

async function printAll(){
await printStirng('A');
await printStirng('B');
await printStirng('C');
}
 printAll()


 // What if you want to take output of the first function, do soemthing with second function and 
 //then pass this to the third fuction

 function addString(prev,curr,callback){
   setTimeout(() => {
     callback(prev+''+curr)
   }, Math.floor(Math.random()*100)+1);
 }

 function addAll(){
   addString('','A', res=>{
     addString(res,'C',res=>{
       console.log(res);
     })
   })
 }

 addAll();