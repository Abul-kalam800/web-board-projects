document.getElementById('btn').addEventListener('click',function(){
  // const btn = document.getElementById('btn');
 alert("Uptaded on the board")
 
scoreAndTask ();
btnStyle("title-1","btn");
successfullyUpdated()
})

// btn-02
document.getElementById('btn-2').addEventListener('click',function(){
   alert("Uptaded on the board")
   scoreAndTask ();
  btnStyle("title-2","btn-2");
  successfullyUpdated()
 })
 
// btn-03

document.getElementById('btn-3').addEventListener('click',function(){
 
   alert("Uptaded on the board")
   scoreAndTask ();
  btnStyle("title-3","btn-3");
  successfullyUpdated()
 })
 
// btn-04

document.getElementById('btn-4').addEventListener('click',function(){
  
   alert("Uptaded on the board") 
   scoreAndTask ();
  btnStyle("title-4","btn-4");
  successfullyUpdated()
  
 })
 
// btn-05
document.getElementById('btn-5').addEventListener('click',function(){
 
   alert("Uptaded on the board") 
   scoreAndTask ();
  btnStyle("title-5","btn-5");
  successfullyUpdated()
 })
 
// btn 06

document.getElementById('btn-6').addEventListener('click',function(){
 
  alert("Uptaded on the board")
  scoreAndTask ();
 
 btnStyle("title-6","btn-6");
//  const task = document.getElementById('task').innerText;
// const convatedTask = parseInt(task);
// if(convatedTask === 0){
//     alert("You have successfully board updated");
// }

successfullyUpdated()
})


// const task = document.getElementById('task').innerText;
// const convatedTask = parseInt(task);
// if(convatedTask === 0){
//     alert("You have successfully board updated");
// }

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
 window.location.href = "discover_index.html";
})

// theme btn 
document.getElementById('color-theme').addEventListener('click',function(){

    
    const body = document.getElementById('body');
    const x = Math.floor(Math.random()*256)
    const y = Math.floor(Math.random()*256)
    const z = Math.floor(Math.random()*256)
    const bgColor = "rgb("+x+","+y+","+z+")";
    body.style.backgroundColor = bgColor;
   
})

