const overlay = document.getElementById('overlay')
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnreset = document.querySelector('.btn__reset');
const missed = 0

const phrases = [
    'pull yourself together',
    'a blessing in disquise',
    'bite the bullet',
    'the best of both worlds',
    'by the skin of your teeth',
];

// Attach an eventlistener to the 'Start Game' buton to hid the start screen overlay
// listen for the start game button to be pressed
btnreset.addEventListener('click', () => { //add eventlistener to a variable btn_reset
    overlay.style.display = 'none'; //hide the overlay by changing its display property

});

// Create a getRandomPhraseAsArray function
const getrandomPhraseAsArray = arr => { // create a function 'stub' taken from the Examples in pdf file
const randomNum = Math.floor(Math.random() * phrases.length) //create a variable to store a random number
    return getrandomPhraseAsArray(randomNum); //return the array element at that index
}
getRandomPhraseAsArray(phrases) // After creating the getRandomPhraseAsArray, need to "call" it


