const qwerty= document.querySelector('#qwerty');
const phrase= document.querySelector('#phrase');
let missed= 0;

let char= [];

const startGame= document.querySelector('.btn__reset');
const overlay= document.querySelector('#overlay');

const phrases=[
'you will never guess the right answer',
'you will fail this game',
'i will win everytime',
'i will win every game we will ever play',
'you will  lose every game we will ever play'
];


function getRandomPhraseAsArray(arr){
  const rand = arr[Math.floor(Math.random() * arr.length)];

  char= rand.split('');
  return char;
}


function addPhraseToDisplay(arr){
  for(let i=0;i<char.length;i++){
    const li= document.createElement('li');
    const attach= document.querySelector('#phrase > ul');
    li.textContent=char[i];

    if(li===''){
      li.style.display= 'none';
    }else{
      li.className='letter';
      attach.appendChild(li);
    }



  }


  console.log(arr)
}





startGame.style.cursor ='pointer';

startGame.addEventListener('click', ()=>{
  overlay.style.display= 'none';
});






const test=getRandomPhraseAsArray(phrases);
addPhraseToDisplay(test);
