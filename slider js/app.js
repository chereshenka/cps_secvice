let showMoreButton = document.querySelector('.content__button');
let list = document.querySelector('.content__list');

showMoreButton.addEventListener('click', ()=>{
   list.classList.toggle('hidden');
   showMoreButton.classList.toggle('opened');
   showMoreButton.textContent = !list.classList.contains('hidden')?'Скрыть':'Показать еще';
});