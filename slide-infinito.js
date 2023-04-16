const slide = document.querySelector('#slide-proyects');
let itemSection = document.querySelectorAll('.item');
let itemSectionLast = itemSection[itemSection.length -1];

// const btnLeft1 = document.querySelector('#btn-left1');
// const btnRight1 = document.querySelector('#btn-right1');

slide.insertAdjacentElement('afterbegin', itemSectionLast);

function Next1() {
	let itemSectionFirst =document.querySelectorAll('.item')[0];
	slide.style.marginLeft = '-200%';
	slide.style.transition = 'all 0.5s';
	setTimeout(function(){
		slide.style.transition = 'none';
		slide.insertAdjacentElement('beforeend', itemSectionFirst);
		slide.style.marginLeft = '-100%';
	}, 500);
	
}

function Prev1(){
	let itemSection = document.querySelectorAll('.item');
	let itemSectionLast = itemSection[itemSection.length -1];
	slide.style.marginLeft = '0';
	slide.style.transition ='all 0.5s';
	setTimeout(function(){
		slide.style.transition ='none';
		slide.insertAdjacentElement('afterbegin', itemSectionLast);
		slide.style.marginLeft = '-100%';
	}, 500);
}

// btnRight1.addEventListener('click', function(){
// 	Next1();
// })
// btnLeft1.addEventListener('click', function(){
// 	Prev1();
// })

setInterval(function(){
	Next1();
},5000);

// const stop =()  =>{
//     clearInterval(intervalo);
// };

// slide.addEventListener('mouseover', () =>{
//     stop();
// })

// slide.addEventListener('mouseout', () =>{
//     start();
// })

// start();
