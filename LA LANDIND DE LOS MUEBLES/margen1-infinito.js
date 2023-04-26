if (window.innerWidth <= 768) {
const slide2 = document.querySelector('#container2');
let itemSection2 = document.querySelectorAll('.item2');
let itemSection2Last = itemSection2[itemSection2.length -1];

// const btnLeft1 = document.querySelector('#btn-left1');
// const btnRight1 = document.querySelector('#btn-right1');

slide2.insertAdjacentElement('afterbegin', itemSection2Last);

function Next1() {
	let itemSection2First =document.querySelectorAll('.item2')[0];
	slide2.style.marginLeft = '-200%';
	slide2.style.transition = 'all 0.5s';
	setTimeout(function(){
		slide2.style.transition = 'none';
		slide2.insertAdjacentElement('beforeend', itemSection2First);
		slide2.style.marginLeft = '-100%';
	}, 500);
	
}

function Prev1(){
	let itemSection2 = document.querySelectorAll('.item2');
	let itemSection2Last = itemSection2[itemSection2.length -1];
	slide2.style.marginLeft = '0';
	slide2.style.transition ='all 0.5s';
	setTimeout(function(){
		slide2.style.transition ='none';
		slide2.insertAdjacentElement('afterbegin', itemSection2Last);
		slide2.style.marginLeft = '-100%';
	}, 500);
}

// btnRight1.addEventListener('click', function(){
// 	Next1();
// })
// btnLeft1.addEventListener('click', function(){
// 	Prev1();
// })
  const intervalo = setInterval(function (){
	Next1();
},2000);





// PARA EL PRIMER SLIDE DE PUERTAS

const slide3= document.querySelector('#slide3');
let itemSection3 = document.querySelectorAll('.slider__section3');
let itemSection3Last = itemSection3[itemSection3.length -1];

const btnLeft3 = document.querySelector('#btn-left3');
const btnRight3 = document.querySelector('#btn-right3');

slide3.insertAdjacentElement('afterbegin', itemSection3Last);

function Next3() {
	let itemSection3First =document.querySelectorAll('.slider__section3')[0];
	slide3.style.marginLeft = '-200%';
	slide3.style.transition = 'all 0.5s';
	setTimeout(function(){
		slide3.style.transition = 'none';
		slide3.insertAdjacentElement('beforeend', itemSection3First);
		slide3.style.marginLeft = '-100%';
	}, 500);

}

function Prev3(){
	let itemSection3 = document.querySelectorAll('.slider__section3');
	let itemSection3Last = itemSection3[itemSection3.length -1];
	slide3.style.marginLeft = '0';
	slide3.style.transition ='all 0.5s';
	setTimeout(function(){
		slide3.style.transition ='none';
		slide3.insertAdjacentElement('afterbegin', itemSection3Last);
		slide3.style.marginLeft = '-100%';
	}, 500);
}

btnRight3.addEventListener('click', function(){
	Next3();
})
btnLeft3.addEventListener('click', function(){
	Prev3();
})
  const intervalo1 = setInterval(function (){
	Next3();
},2000);

// const stop =()  =>{
//     clearInterval(intervalo);
// };

slide3.addEventListener('mouseover', () =>{
    clearInterval(intervalo1)
})

// slide2.addEventListener('mouseout', () =>{

// })

// start();



                    // PARA EL SLIDE DE LAS COCINAS
const slide4= document.querySelector('#slide4');
let itemSection4 = document.querySelectorAll('.slider__section4');
let itemSection4Last = itemSection4[itemSection4.length -1];

const btnLeft4 = document.querySelector('#btn-left4');
const btnRight4 = document.querySelector('#btn-right4');

slide4.insertAdjacentElement('afterbegin', itemSection4Last);

function Next4() {
	let itemSection4First =document.querySelectorAll('.slider__section4')[0];
	slide4.style.marginLeft = '-200%';
	slide4.style.transition = 'all 0.5s';
	setTimeout(function(){
		slide4.style.transition = 'none';
		slide4.insertAdjacentElement('beforeend', itemSection4First);
		slide4.style.marginLeft = '-100%';
	}, 500);

}

function Prev4(){
	let itemSection4 = document.querySelectorAll('.slider__section4');
	let itemSection4Last = itemSection4[itemSection4.length -1];
	slide4.style.marginLeft = '0';
	slide4.style.transition ='all 0.5s';
	setTimeout(function(){
		slide4.style.transition ='none';
		slide4.insertAdjacentElement('afterbegin', itemSection4Last);
		slide4.style.marginLeft = '-100%';
	}, 500);
}

btnRight4.addEventListener('click', function(){
	Next4();
})
btnLeft4.addEventListener('click', function(){
	Prev4();
})
  const intervalo2 = setInterval(function (){
	Next4();
},2000);

// const stop =()  =>{
//     clearInterval(intervalo);
// };

slide4.addEventListener('mouseover', () =>{
    clearInterval(intervalo2)
})

                    // PARA EL SLIDE DE MUEBLES DE BAÑO
const slide5= document.querySelector('#slide5');
let itemSection5 = document.querySelectorAll('.slider__section5');
let itemSection5Last = itemSection5[itemSection5.length -1];

const btnLeft5 = document.querySelector('#btn-left5');
const btnRight5 = document.querySelector('#btn-right5');

slide5.insertAdjacentElement('afterbegin', itemSection5Last);

function Next5() {
	let itemSection5First =document.querySelectorAll('.slider__section5')[0];
	slide5.style.marginLeft = '-200%';
	slide5.style.transition = 'all 0.5s';
	setTimeout(function(){
		slide5.style.transition = 'none';
		slide5.insertAdjacentElement('beforeend', itemSection5First);
		slide5.style.marginLeft = '-100%';
	}, 500);

}

function Prev5(){
	let itemSection5 = document.querySelectorAll('.slider__section5');
	let itemSection5Last = itemSection5[itemSection5.length -1];
	slide5.style.marginLeft = '0';
	slide5.style.transition ='all 0.5s';
	setTimeout(function(){
		slide5.style.transition ='none';
		slide5.insertAdjacentElement('afterbegin', itemSection5Last);
		slide5.style.marginLeft = '-100%';
	}, 500);
}

btnRight5.addEventListener('click', function(){
	Next5();
})
btnLeft5.addEventListener('click', function(){
	Prev5();
})
  const intervalo3 = setInterval(function (){
	Next5();
},2000);

// const stop =()  =>{
//     clearInterval(intervalo);
// };

slide5.addEventListener('mouseover', () =>{
    clearInterval(intervalo3)
})


                    // PARA LA MUEBLERIA EN CLOSETS
const slide6= document.querySelector('#slide6');
let itemSection6 = document.querySelectorAll('.slider__section6');
let itemSection6Last = itemSection6[itemSection6.length -1];

const btnLeft6 = document.querySelector('#btn-left6');
const btnRight6 = document.querySelector('#btn-right6');

slide6.insertAdjacentElement('afterbegin', itemSection6Last);

function Next6() {
	let itemSection6First =document.querySelectorAll('.slider__section6')[0];
	slide6.style.marginLeft = '-200%';
	slide6.style.transition = 'all 0.5s';
	setTimeout(function(){
		slide6.style.transition = 'none';
		slide6.insertAdjacentElement('beforeend', itemSection6First);
		slide6.style.marginLeft = '-100%';
	}, 500);

}

function Prev6(){
	let itemSection6 = document.querySelectorAll('.slider__section6');
	let itemSection6Last = itemSection6[itemSection6.length -1];
	slide6.style.marginLeft = '0';
	slide6.style.transition ='all 0.5s';
	setTimeout(function(){
		slide6.style.transition ='none';
		slide6.insertAdjacentElement('afterbegin', itemSection6Last);
		slide6.style.marginLeft = '-100%';
	}, 500);
}

btnRight6.addEventListener('click', function(){
	Next6();
})
btnLeft6.addEventListener('click', function(){
	Prev6();
})
  const intervalo4 = setInterval(function (){
	Next6();
},2000);

// const stop =()  =>{
//     clearInterval(intervalo);
// };

slide6.addEventListener('mouseover', () =>{
    clearInterval(intervalo4)
})
}
