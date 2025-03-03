


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


