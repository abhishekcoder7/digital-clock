let time = document.querySelector('#time');

setInterval(() => {
    let samay = new Date().toLocaleTimeString();
    time.innerHTML=`${samay}`;
}, 1000);