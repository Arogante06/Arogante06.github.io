/* Cuando hago CLICK .button, .nav TOGGLE 'activo' */
const button = document.querySelector('.button')
const nav    = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
});

// const a = document.querySelector('.adicional')
// const prueba = document.querySelector('.prueba')
// a.addEventListener('click',()=>{
//     prueba.classList.toggle('cambio')
// })


/* jQuery : Enlazar jQuery*/
/* $('.button').on('click',()=>{
    $('.nav').toggleClass('activo')
}) */