// MENU HAMBURGUESA
const barsMenu = document.querySelector('.bars-menu');
const listMenu = document.querySelector('.list-menu');
const iconsMenu = document.querySelector('.icons');

barsMenu.addEventListener('click', () => {
  barsMenu.classList.toggle('open');  
  listMenu.classList.toggle('active'); 
  iconsMenu.classList.toggle('active'); 
});

document.querySelectorAll('.list-menu a').forEach(link => {
  link.addEventListener('click', () => {
    barsMenu.classList.remove('open');
    listMenu.classList.remove('active');
    iconsMenu.classList.remove('active');
  });
});
