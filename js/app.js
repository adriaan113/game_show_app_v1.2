const qwerty= document.querySelector('#qwerty');
const phrase= document.querySelector('#phrase');
let missed= 0;

const startGame= document.querySelector('.btn__reset');
const overlay= document.querySelector('#overlay');

const phrases=[
'you will never guess the right answer',
'you will fail this game',
'i will win everytime',
'i will win every game we will ever play',
'you will  lose every game we will ever play'
];


startGame.style.cursor ='pointer';

startGame.addEventListener('click', ()=>{
  overlay.style.display= 'none';
});
