
/////////////////VARIABLES////////////////

const qwerty= document.querySelector('#qwerty');
const phrase= document.querySelector('#phrase');

let missed= -1;
let hearts= document.querySelectorAll('img'); //specify .tries > img is better

let char= [];

const startGame= document.querySelector('.btn__reset');
const overlay= document.querySelector('#overlay');


const show=document.getElementsByClassName('show');
const letter= document.getElementsByClassName('letter');


/////////////////FUNCTIONS////////////////


function getRandomPhraseAsArray(arr){
  const rand = arr[Math.floor(Math.random() * arr.length)];

  char= rand.split('');
  return char;
}


function addPhraseToDisplay(arr){
  for(let i=0;i<char.length;i++){
    const li= document.createElement('li');
    const attach= document.querySelector('#phrase > ul');

      if(char[i]===" "){
        li.style.display= 'inline-block';//should add whitespace
        li.style.padding='10px';
      }else{
        li.className='letter';
        li.style.margin='10px 2px';
      }

    li.textContent=char[i];
    attach.appendChild(li);
  }
  console.log(arr)
}



function checkLetter(btn){


let inputLetter= document.querySelectorAll('.letter');
let match= null;

  for(let i=0;i<inputLetter.length;i++){
    if(inputLetter[i].textContent===btn.textContent){
      inputLetter[i].className+=' show';
     match= true;
    }
  }
  return match;
}



function checkWin(){

  if(show.length===letter.length){
    console.log('satan');
    overlay.style.display= 'flex';
    overlay.className='win';
    overlay.children[0].textContent='you won!';
    startGame.textContent='play again';//should reset the whole game

  }else if(missed===4){
    overlay.style.display= 'flex';
    overlay.className='lose';
    overlay.children[0].textContent='you lose!';
    startGame.textContent='play again';//should reset the whole game

  }
}

/////////////////EVENTS////////////////

startGame.style.cursor ='pointer';

startGame.addEventListener('click', ()=>{
  overlay.style.display= 'none';
});



qwerty.addEventListener('click',(e)=>{
  if(e.target && e.target.nodeName=='BUTTON'){
    e.target.className='chosen';
    e.target.setAttribute('disabled', '');
    let letterFound=checkLetter(e.target);

      if(letterFound===null){
        missed++;

        // let parent=document.querySelector('ol');
        // parent.children[missed].style.backgroundColor="red";

        for(let i=0;i<hearts.length;i++){
          hearts[i].setAttribute('id', 'count '+ i);
        }
        document.getElementById('count ' + missed).src='images/lostHeart.png';
       }
  }

  checkWin();


})

const phraseArr=getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArr);
