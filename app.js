const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnreset = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay')
const ul = document.querySelector("#phrase ul")
let missed = 0

const phrases = [
    'hello world',
    'treehouse techdegree',
    'javascript',
    'programming language',
    'frontend developer'
];

// Attach an eventlistener to the 'Start Game' buton to hid the start screen overlay

// listen for the start game button to be pressed
btnreset.addEventListener('click', () => { 
    overlay.style.display = 'none'; 

});

//Create a getRandomPhraseAsArray function
const getRandomPhraseAsArray = arr => { 
    const randomNum = Math.floor(Math.random() * arr.length);
    const randomPhrase =  arr[randomNum].split('');    
    return randomPhrase;
}
getRandomPhraseAsArray(phrases);


// Create an addPhraseToDisplay function
const addPhraseToDisplay = arr => {
    for( let i = 0; i < arr.length; i++ ){
        const li = document.createElement('li');       
        li.textContent = arr[i];        
        ul.appendChild(li);
        if(arr[i] !== ' '){
            li.classList.add('letter');
        } else {
            li.classList.add('space')
        } 
    }  
}    
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

// check is a letter is in the phrase
const checkLetter = button => {
    let liPhrase = ul.children;
    let match = null;
      for (let i = 0; i < liPhrase.length; i++){
        const letter = liPhrase[i].textContent.toLowerCase();
        if(button.textContent === letter) {
            liPhrase[i].classList.add('show');
            match = true;
            }
        }
        return match;
    }
checkLetter(qwerty);

//Add an event listener to the keyboard
qwerty.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON') {        
        e.target.classList.add('chosen');
        e.target.setAttribute('disabled', true);        
        const match = checkLetter(e.target);
        if(!match) {
            const tries = document.querySelectorAll('.tries')
            tries[missed].style.display = 'none';
            missed++;
        }
        if(e.target) {
            return checkWin(e.target);
        }
    }
});


const checkWin = (e) => {   
    let letterPhrase = ul.getElementsByClassName('letter');
    let showPhrase = ul.getElementsByClassName('show');
    if(letterPhrase.length === showPhrase.length) {
        overlay.classList.add('win');
        overlay.querySelector('h2').textContent = "Congratulations! You've won!";
        overlay.style.display = 'flex';
        overlay.querySelector('a').textContent = 'Play Again!';
        resetGame();

    }
    // Check if the missed counter is greater than 4. If they are, display the lose overlay
    if(missed > 4) {
        overlay.classList.add('lose');
        overlay.querySelector('h2').textContent = "Sorry, You've lost";
        overlay.style.display = 'flex';
        overlay.querySelector('a').textContent = 'Play Again!';
        resetGame();       
    }
}

function resetGame() {
    let kybrdBtn = document.querySelectorAll('.keyrow button');
    for (let i = 0; i < kybrdBtn.length; i++) {
        kybrdBtn[i].className = '';
        kybrdBtn[i].disabled = false;
    }    
    ul.innerHTML = '';
    
    addPhraseToDisplay(getRandomPhraseAsArray(phrases));    
    const liveHeart = document.getElementsByTagName('img');
    for (let i = 0; i < liveHeart.length; i++) {
        let tries = document.querySelectorAll('.tries');
        tries[i].style.display = 'inline'; 
    }
    missed = 0;
    
}
