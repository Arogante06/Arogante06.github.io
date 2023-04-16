



// Selecciona el elemento que quieres observar
const elementoObservado = document.querySelector('spam');

// Opciones de la observación
const opcionesObservacion = {
  root: null, // El viewport del navegador es el área de observación
  rootMargin: '0px',
  threshold: 0.5 // La función se ejecutará cuando el elemento sea visible en un 50%
}

// Crea la instancia del observador
const observador = new IntersectionObserver(function(entries, observer) {
  // Se ejecuta cuando el elemento observado intersecta con el área de observación
  if (entries[0].isIntersecting) {
    // Ejecuta la función deseada
    let exp = document.getElementById('exp'),
            products = document.getElementById('products');
            
        let cant1=0,cant2=0,tiem=25


        let tiempo1 = setInterval(() => {
            exp.textContent=cant1+=1
            if(cant1 === 22){
                clearInterval(tiempo1)
            }

        }, 500);
        let tiempo2 = setInterval(() => {
            products.textContent=cant2+=1
            if(cant2 === 890){
                clearInterval(tiempo2)
            }

        }, 20);
    
    // Deja de observar el elemento
    observer.unobserve(elementoObservado);
  }
}, opcionesObservacion);

// Comienza a observar el elemento
observador.observe(elementoObservado);





// (function ($) {
//     'use strict';

//     var $window = $(window);

//     // :: Preloader Active Code
//     $window.on('load', function () {
//         $('#preloader').fadeOut('slow', function () {
//             $(this).remove();
//         });
//     });

//     if ($.fn.counterUp) {
//             $('#exp').counterUp({
//                 delay: 10,
//                 time: 2000
//             });
//         }



// });
