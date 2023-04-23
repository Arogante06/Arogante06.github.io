

if (window.innerWidth <= 768) {
	// código a ejecutar si la pantalla es de 768 píxeles o menos de ancho
	const slider = document.querySelector('#slider');
	let sliderSection = document.querySelectorAll('.slider__section');
	let sliderSectionLast = sliderSection[sliderSection.length -1];
	
	const btnLeft = document.querySelector('#btn-left');
	const btnRight = document.querySelector('#btn-right');
	
	slider.insertAdjacentElement('afterbegin', sliderSectionLast);
	
	function Next() {
		let sliderSectionFirst =document.querySelectorAll('.slider__section')[0];
		slider.style.marginLeft = '-200%';
		slider.style.transition = 'all 0.5s';
		setTimeout(function(){
			slider.style.transition = 'none';
			slider.insertAdjacentElement('beforeend', sliderSectionFirst);
			slider.style.marginLeft = '-100%';
		}, 500);
		
	}
	
	function Prev(){
		let sliderSection = document.querySelectorAll('.slider__section');
		let sliderSectionLast = sliderSection[sliderSection.length -1];
		slider.style.marginLeft = '0';
		slider.style.transition ='all 0.5s';
		setTimeout(function(){
			slider.style.transition ='none';
			slider.insertAdjacentElement('afterbegin', sliderSectionLast);
			slider.style.marginLeft = '-100%';
		}, 500);
	}
	
	btnRight.addEventListener('click', function(){
		Next();
	})
	btnLeft.addEventListener('click', function(){
		Prev();
	})
	setInterval(function(){
		Next();
	},10000)

	console.log("La pantalla es pequeña");
  } else {
	// código a ejecutar si la pantalla es mayor a 768 píxeles de ancho
	console.log("La pantalla es grande");
  }


  