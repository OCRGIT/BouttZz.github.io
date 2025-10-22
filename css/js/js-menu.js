const btn  = document.getElementById('menuBtn');
const menu = document.getElementById('dropMenu');

btn.addEventListener('click', () => {
  menu.classList.toggle('drop-hidden');
});

// cierra al hacer clic fuera
document.addEventListener('click', (e) => {
  if (!e.target.matches('#menuBtn')) menu.classList.add('drop-hidden');
});
