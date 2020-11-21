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
btnreset.addEventListener('click', () => {
    overlay.style.display = 'none';

});
