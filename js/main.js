const collapses = document.querySelectorAll('#header .collapse');
document.querySelector('#header .toggle-button').addEventListener('click', () => {
    collapses.forEach(collapse => collapse.classList.toggle('opened'));
});

// with masonry
new Masonry('#posts .grid', {
    itemSelector:'.grid-item',
    gutter:20
});

// with swiper
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView:5,
    autoplay: {
        delay:3000
    },
    // responsive breakpoints
    breakpoints: {
        '@0': {
            slidesPerView:2
        },
        '@1.00': {
            slidesPerView:3
        },
        '@1.25': {
            slidesPerView:4
        },
        '@1.50': {
            slidesPerView:5
        }
    }
  
  });
  

// Sticky Navigation

// get the current value
const navbar =document.getElementById('header');

// get the navbar position
const sticky = navbar.offsetTop;

const myStickyNavbar = _ => {
    if(window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

window.onscroll = _ => {
    myStickyNavbar();
}