const qwerty= document.querySelector('#qwerty');
const phrase= document.querySelector('#phrase');
let missed= 0;

const startGame= document.querySelector('.btn__reset');
const overlay= document.querySelector('#overlay');

startGame.style.cursor ='pointer';

startGame.addEventListener('click', ()=>{
  overlay.style.display= 'none';
});
