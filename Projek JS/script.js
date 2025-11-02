// animasi masuk
document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll('.parent');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); 
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.1 
    });
  
    elementsToAnimate.forEach(el => {
      observer.observe(el);
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll('.backgrounds');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); 
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.1 
    });
  
    elementsToAnimate.forEach(el => {
      observer.observe(el);
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll('.main-info');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); 
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.1 
    });
  
    elementsToAnimate.forEach(el => {
      observer.observe(el);
    });
  });

//  sebagai pengaktif scroller
const swiper = new Swiper('.mySwiper', {
  
    effect: 'slide',

    grabCursor: true,
  
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });

