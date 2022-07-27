let screen = window.matchMedia('(max-width: 767px)');

window.addEventListener('resize', () => {
   if (screen.matches) {
      let newSwiper = new Swiper('.swiper',{
         Loop: true,
         pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
         },
         slidesPerView: 'auto',
         slidesOffsetBefore: 30,
         spaceBetween: 16,
      });
   } else {
      swiper.destroy();
   }
   
});

let showMoreButton = document.querySelector('.content__button');
let list = document.querySelector('.swiper');

showMoreButton.addEventListener('click', ()=>{
   list.classList.toggle('hidden');
   showMoreButton.classList.toggle('opened');
   showMoreButton.textContent = !list.classList.contains('hidden')?'Скрыть':'Показать еще';
});
