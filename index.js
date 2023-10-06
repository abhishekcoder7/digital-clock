let time = document.querySelector('#time');
let temp = new Date().toLocaleTimeString();
time.innerHTML=`${temp}`;
setInterval(() => {
    let samay = new Date().toLocaleTimeString();
    time.innerHTML=`${samay}`;
}, 1000);