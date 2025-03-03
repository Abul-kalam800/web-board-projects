


function btnStyle(id, button) {
    const btn = document.getElementById(button);
    const title = document.getElementById(id).innerText;
    const container = document.getElementById('container-task');
    // time 
    let  d = new Date();
    let n = d.toLocaleTimeString();

    const p = document.createElement('p');
    p.style.padding = "10px";
    p.style.backgroundColor = "#f7f7f7";
    p.style.marginTop = "14px";
   
    p.innerText = `You have completed task  ${title} at ${n}`;  

    container.appendChild(p);
    btn.style.opacity = "0.4";
    btn.disabled = true;
    return;

}

function scoreAndTask (){
    const task = document.getElementById('task').innerText;
    const convatedTask = parseInt(task);
    const score = document.getElementById('score').innerText;
    const scoreConvated =parseInt(score);
    document.getElementById('score').innerText= scoreConvated+1;
   if(convatedTask >0){
       let taskDone = convatedTask-1;
       document.getElementById('task').innerText =taskDone;   
   }


}

function successfullyUpdated(){

    const task = document.getElementById('task').innerText;
    const convatedTask = parseInt(task);
    if(convatedTask === 0){
        alert("You have successfully board updated");
    }
}


