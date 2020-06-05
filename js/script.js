
// TIME SECTION - CAROUSEL

const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button--right');
const prevButton = document.querySelector('.carousel_button--left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
// console.Log(slideWidth)  ajuste das imagens

// Arranjar os slides próximos uns dos outros 
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';

};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide'); 
}
 
const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
}  

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.add('is-hidden');
  } else {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.remove('is-hidden');
  }

}

// Quando eu clico para a esquerda, mover o slide para a esquerda
prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);

});


// Quando eu clico para a direita, mover o slide para a direita
nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling; 
  const nextIndex = slides.findIndex(slide => slide === nextSlide);
  
  moveToSlide(track, currentSlide, nextSlide); 
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);

});

// Quando eu clico nav indicator, mover para o slide

dotsNav.addEventListener('click', e => {
  const targetDot = e.target.closest('button');
  
  if (!targetDot) return;

  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex]; 

  moveToSlide(track, currentSlide, targetSlide); 
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, prevButton, nextButton, targetIndex);

})

$(document).ready(function (){
  $('.contact-form-button').click(function (event) {
    console.log('clicked button')

    var name = $('contact-form-name').val()
    var email = $('contact-form-email').val()
    var phone = $('contact-form-phone').val()
    var text = $('contact-form-text').val()
    var statusElm = $('.status')
    statusElm.empty()

    if(email.length > 5 && email.includes('@') && email.includes('.')) {
      statusElm.append('<div> Email é válido </div>')
    } else {
      event.preventDefault()
      statusElm.append('<div> Email não é válido </div>')
    }  

    if(phone.length = 11) {
      statusElem.append('<div> Telefone é válido </div>')
    } else {
      event.preventDefault()
      statusElm.append('<div> Telefone não é válido </div>')    
    }  

    if(text.length >= 20) {
      statusElem.append('<div> Mensagem é válida </div>')
    } else {
      event.preventDefault()
      statusElm.append('<div> Mensagem não é válida </div>')    
    } 

  })
})