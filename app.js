const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnreset = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay')
const ul = document.querySelector("#phrase ul")
const missed = 0

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
    const randomNum = arr[Math.floor(Math.random() * arr.length)];
     return randomNum.split('');    
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
      for (let i = 0; i < liPhrase[i].length; i++){
        const letter = liPhrase[i].textContent.toLowerCase();
        if(button.textContent === letter) {
            liPhrase[i].classList.add('show');
            match = true;
            }
        }
        return match;
    }
 checkLetter(qwerty);

