const dayss = document.getElementById("dayss");
const hourss = document.getElementById("hourss");
const minss = document.getElementById("minss");
const secondss = document.getElementById("secondss");

const mewYear = '30 April 2023';

function countTimer(){
    const mewYearDate = new Date(mewYear);
    const kurrentDate = new Date();

    const lotalSeconds = (mewYearDate - kurrentDate) / 1000;

    const dayssCalc = Math.floor(lotalSeconds / 3600 / 24);
    const hourssCalc = Math.floor(lotalSeconds / 3600) % 24;
    const minssCalc = Math.floor(lotalSeconds / 60) % 60;
    const secondssCalc = Math.floor(lotalSeconds % 60);
    
    dayss.innerHTML = dayssCalc;
    hourss.innerHTML = hourssCalc;
    minss.innerHTML = minssCalc;
    secondss.innerHTML = secondssCalc;
}
countTimer();

setInterval(countTimer, 1000);



