const slide = document.querySelector('.slide-items');

let maxScrollLeft = slide.scrollWidth - slide.clientWidth;
let intervalo = null;
let step = 1;

const start =() =>{
    intervalo = setInterval(function(){
        slide.scrollLeft = slide.scrollLeft + step;
        if(slide.scrollLeft === maxScrollLeft){
            step = step * -1;
        } else if(slide.scrollLeft === 0){
            step = step* -1;
        }
    }, 10)
};

const stop =()  =>{
    clearInterval(intervalo);
};

slide.addEventListener('mouseover', () =>{
    stop();
})

slide.addEventListener('mouseout', () =>{
    start();
})

start();


