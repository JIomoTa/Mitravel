const swiper1 = document.querySelector('.slider-container'),
      swiper2 = document.querySelector('.swiper-container'),
      burger = document.querySelector('.burger'),
      close = document.querySelector('.menu__close'),
      menu = document.querySelector('.menu');
      playButtonsFirst = document.querySelectorAll('.main-slider__play');

const swiperSlider1 = new Swiper('.swiper', {
    // Optional parameters
    centeredSlides: true,
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 100,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  
    // effect: "fade",
  });

  const swiperSlider2 = new Swiper('.swiper2', {
    // Optional parameters
    centeredSlides: true,
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 100,
    effect: 'flip',
    flipEffect: {
      slideShadows: false,
    },
    navigation: {
      nextEl: '.btn-right',
      prevEl: '.btn-left',
    },
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  
    // effect: "fade",
  });

  swiperSlider2.on('transitionEnd', function () {
    let videos = document.querySelectorAll('.first__slider video');
    videos.forEach((el) => {
      el.pause();
      el.currentTime = 0;
    });
    playButtonsFirst.forEach((el) => {
      el.style.display = 'block';
    });
  });
  

  burger.addEventListener('click', () => {
    menu.classList.add('menu--visible');
  });
  
  close.addEventListener('click', () => {
    menu.classList.remove('menu--visible');
  });
  

  playButtonsFirst.forEach((el) => {
    el.addEventListener('click', (e) => {
      let video = e.currentTarget.closest('.main-slider__media').querySelector('video');
      video.play();
      e.currentTarget.style.display = 'none';
      setTimeout(() => {
        video.volume = 0.5;
      }, 1000);
    });
  });
  