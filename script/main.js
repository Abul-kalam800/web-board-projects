document.getElementById('btn').addEventListener('click',function(){
  // const btn = document.getElementById('btn');
 alert("Uptaded on the board")
 
 const task = document.getElementById('task').innerText;
 const convatedTask = parseInt(task);
 const score = document.getElementById('score').innerText;
 const scoreConvated =parseInt(score);
 document.getElementById('score').innerText= scoreConvated+1;
if(convatedTask >0){
    let taskDone = convatedTask-1;
    document.getElementById('task').innerText =taskDone;   
}

btnStyle("title-1","btn");
})

// btn-02
document.getElementById('btn-2').addEventListener('click',function(){
   alert("Uptaded on the board")
   
   const task = document.getElementById('task').innerText;
   const convatedTask = parseInt(task);
   const score = document.getElementById('score').innerText;
   const scoreConvated =parseInt(score);
   document.getElementById('score').innerText= scoreConvated+1;
  if(convatedTask >0){
      let taskDone = convatedTask-1;
      document.getElementById('task').innerText =taskDone;
      
  }  
  btnStyle("title-2","btn-2");
 })
 
// btn-03

document.getElementById('btn-3').addEventListener('click',function(){
  const btn3 = document.getElementById('btn-3')
   alert("Uptaded on the board")
   
   const task = document.getElementById('task').innerText;
   const convatedTask = parseInt(task);
   const score = document.getElementById('score').innerText;
   const scoreConvated =parseInt(score);
   document.getElementById('score').innerText= scoreConvated+1;
  if(convatedTask >0){
      let taskDone = convatedTask-1;
      document.getElementById('task').innerText =taskDone;
      
  } 
  btnStyle("title-3","btn-3");
 })
 
// btn-04

document.getElementById('btn-4').addEventListener('click',function(){
  
   alert("Uptaded on the board")
   
   const task = document.getElementById('task').innerText;
   const convatedTask = parseInt(task);
   const score = document.getElementById('score').innerText;
   const scoreConvated =parseInt(score);
   document.getElementById('score').innerText= scoreConvated+1;
  if(convatedTask >0){
      let taskDone = convatedTask-1;
      document.getElementById('task').innerText =taskDone;
      
  }
  btnStyle("title-4","btn-4");
  
 })
 
// btn-05
document.getElementById('btn-5').addEventListener('click',function(){
 
   alert("Uptaded on the board")
   
   const task = document.getElementById('task').innerText;
   const convatedTask = parseInt(task);
   const score = document.getElementById('score').innerText;
   const scoreConvated =parseInt(score);
   document.getElementById('score').innerText= scoreConvated+1;
  if(convatedTask >0){
      let taskDone = convatedTask-1;
      document.getElementById('task').innerText =taskDone;
      
  } 
  btnStyle("title-5","btn-5");
 })
 
// btn 06

document.getElementById('btn-6').addEventListener('click',function(){
 
  alert("Uptaded on the board")
  
  const task = document.getElementById('task').innerText;
  const convatedTask = parseInt(task);
  const score = document.getElementById('score').innerText;
  const scoreConvated =parseInt(score);
  document.getElementById('score').innerText= scoreConvated+1;
 if(convatedTask >0){
     let taskDone = convatedTask-1;
     document.getElementById('task').innerText =taskDone;
     
 }
 
 btnStyle("title-6","btn-6");
})

// clear btn here 
document.getElementById('clear-btn').addEventListener('click',function(){
  const container = document.getElementById('container-task');
  container.innerText=" ";

})

// real time date here 

const date = document.getElementById('date');
const month =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
const d = new Date();
const nameDay = day[d.getDay()]
const nameMonth = month[d.getMonth()]
const year = d.getFullYear()
const getdate = d.getDate();
date.innerText = `${nameDay}, ${nameMonth} ${getdate} ${year}`

// discover page here 

document.getElementById('discover-btn').addEventListener('click',function(){
 window.location.href = "../html/index.html";
})


