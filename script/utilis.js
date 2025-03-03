


function btnStyle(id, button) {
    const btn = document.getElementById(button);
    const title = document.getElementById(id).innerText;
    const container = document.getElementById('container-task');
    const time = new Date();
    const hours = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const realTime = `${hours}:${min}:${sec}`
    const p = document.createElement('p');
    p.innerText = `You have completed task  ${title} at ${realTime}`;
    p.style.padding = "10px";
    p.style.backgroundColor = "#f7f7f7";
    p.style.marginTop = "14px";

    container.appendChild(p);
    btn.style.opacity = "0.4";
    btn.disabled = true;
    return;

}