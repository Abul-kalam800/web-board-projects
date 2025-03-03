const btn = document.getElementById('btn');
btn.addEventListener('click',function(){
 alert("Uptaded on the board")
 const container = document.getElementById('container-task');
 const task = document.getElementById('task').innerText;
 const convatedTask = parseInt(task);
 const score = document.getElementById('score').innerText;
 const scoreConvated =parseInt(score);
 document.getElementById('score').innerText= scoreConvated+1;
if(convatedTask >0){
    let taskDone = convatedTask-1;
    document.getElementById('task').innerText =taskDone;
    
}

const title = document.getElementById('title-1').innerText;
  const time = new Date();
  const hours = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  const realTime = `${hours}:${min}:${sec}`

  
  
 const p = document.createElement('p');
 p.innerText = `You have completed task  ${title} ${realTime}`;
 p.style.padding ="10px";
 p.style.backgroundColor ="#f7f7f7";
 p.style.marginTop ="14px";
 
 container.appendChild(p);
 btn.style.opacity="0.4";
 btn.disabled= true;
})

// btn-02
document.getElementById('btn-2').addEventListener('click',function(){
  const btn2 = document.getElementById('btn-2')
   alert("Uptaded on the board")
   const container = document.getElementById('container-task');
   const task = document.getElementById('task').innerText;
   const convatedTask = parseInt(task);
   const score = document.getElementById('score').innerText;
   const scoreConvated =parseInt(score);
   document.getElementById('score').innerText= scoreConvated+1;
  if(convatedTask >0){
      let taskDone = convatedTask-1;
      document.getElementById('task').innerText =taskDone;
      
  }
  
  const title = document.getElementById('title-2').innerText;
    const time = new Date();
    const hours = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const realTime = `${hours}:${min}:${sec}`
  
    
    
   const p = document.createElement('p');
   p.innerText = `You have completed the task  ${title} ${realTime}`;
   p.style.padding ="10px";
   p.style.backgroundColor ="#f7f7f7";
   p.style.marginTop ="14px";
   
   container.appendChild(p);
   btn2.style.opacity="0.4";
   btn2.disabled= true;
 })
 

// btn-03

document.getElementById('btn-3').addEventListener('click',function(){
  const btn3 = document.getElementById('btn-3')
   alert("Uptaded on the board")
   const container = document.getElementById('container-task');
   const task = document.getElementById('task').innerText;
   const convatedTask = parseInt(task);
   const score = document.getElementById('score').innerText;
   const scoreConvated =parseInt(score);
   document.getElementById('score').innerText= scoreConvated+1;
  if(convatedTask >0){
      let taskDone = convatedTask-1;
      document.getElementById('task').innerText =taskDone;
      
  }
  
  const title = document.getElementById('title-3').innerText;
    const time = new Date();
    const hours = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const realTime = `${hours}:${min}:${sec}`
  
    
    
   const p = document.createElement('p');
   p.innerText = `You have completed the task  ${title} ${realTime}`;
   p.style.padding ="10px";
   p.style.backgroundColor ="#f7f7f7";
   p.style.marginTop ="14px";
   
   container.appendChild(p);
   btn3.style.opacity="0.4";
   btn3.disabled= true;
 })
 
// btn-04

document.getElementById('btn-4').addEventListener('click',function(){
  const btn4 = document.getElementById('btn-4')
   alert("Uptaded on the board")
   const container = document.getElementById('container-task');
   const task = document.getElementById('task').innerText;
   const convatedTask = parseInt(task);
   const score = document.getElementById('score').innerText;
   const scoreConvated =parseInt(score);
   document.getElementById('score').innerText= scoreConvated+1;
  if(convatedTask >0){
      let taskDone = convatedTask-1;
      document.getElementById('task').innerText =taskDone;
      
  }
  
  const title = document.getElementById('title-4').innerText;
    const time = new Date();
    const hours = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const realTime = `${hours}:${min}:${sec}`
  
    
    
   const p = document.createElement('p');
   p.innerText = `You have completed the task  ${title} ${realTime}`;
   p.style.padding ="10px";
   p.style.backgroundColor ="#f7f7f7";
   p.style.marginTop ="14px";
   
   container.appendChild(p);
   btn4.style.opacity="0.4";
   btn4.disabled= true;
 })
 

// btn-05
document.getElementById('btn-5').addEventListener('click',function(){
  const btn5 = document.getElementById('btn-5')
   alert("Uptaded on the board")
   const container = document.getElementById('container-task');
   const task = document.getElementById('task').innerText;
   const convatedTask = parseInt(task);
   const score = document.getElementById('score').innerText;
   const scoreConvated =parseInt(score);
   document.getElementById('score').innerText= scoreConvated+1;
  if(convatedTask >0){
      let taskDone = convatedTask-1;
      document.getElementById('task').innerText =taskDone;
      
  }
  
  const title = document.getElementById('title-5').innerText;
    const time = new Date();
    const hours = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const realTime = `${hours}:${min}:${sec}`
  
    
    
   const p = document.createElement('p');
   p.innerText = `You have completed the task  ${title} ${realTime}`;
   p.style.padding ="10px";
   p.style.backgroundColor ="#f7f7f7";
   p.style.marginTop ="14px";
   
   container.appendChild(p);
   btn5.style.opacity="0.4";
   btn5.disabled= true;
 })
 

// btn 06

document.getElementById('btn-6').addEventListener('click',function(){
 const btn6 = document.getElementById('btn-6')
  alert("Uptaded on the board")
  const container = document.getElementById('container-task');
  const task = document.getElementById('task').innerText;
  const convatedTask = parseInt(task);
  const score = document.getElementById('score').innerText;
  const scoreConvated =parseInt(score);
  document.getElementById('score').innerText= scoreConvated+1;
 if(convatedTask >0){
     let taskDone = convatedTask-1;
     document.getElementById('task').innerText =taskDone;
     
 }
 
 const title = document.getElementById('title-6').innerText;
   const time = new Date();
   const hours = time.getHours();
   const min = time.getMinutes();
   const sec = time.getSeconds();
   const realTime = `${hours}:${min}:${sec}`
 
   
   
  const p = document.createElement('p');
  p.innerText = `You have completed the task  ${title} ${realTime}`;
  p.style.padding ="10px";
  p.style.backgroundColor ="#f7f7f7";
  p.style.marginTop ="14px";
  
  container.appendChild(p);
  btn6.style.opacity="0.4";
  btn6.disabled= true;
})
