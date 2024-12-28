document.addEventListener('DOMContentLoaded', function () {
    

const phrases = [
    "eya, you're doing amazing",
    "my love, don't forget to smile today?",
    "you're beautiful, inside and out",
    "you make life bearable, thank you",
    "always think positively, you'll get it",
    "when times are hard, come snuggle in my arms",
    "i love you more than anything",
    "gorgeous",
    "my angel",
    "please don't forget to drink water",
    "take care of yourself, yeah?",
    "don't get sick!",
    "i love you more than anything on this earth",
    "my mj <3"

];

const addButton = document.getElementById('add-note');


addButton.addEventListener('click', function () {
    console.log('Button Clicked!')
    createStickyNote();
});

function createStickyNote() {
console.log("Creating a Sticky Note...");   


const stickyNote = document.createElement('div');
stickyNote.classList.add ('sticky-note'); 


const randomIndex = Math.floor(Math.random() * phrases.length);
const para  = document.createElement('p');
para.textContent  = phrases[randomIndex];
stickyNote.appendChild(para);


const closeButton = document.createElement('button');
closeButton.textContent = 'X'; 
closeButton.classList.add ('close-btn');
closeButton.addEventListener('click', function( ) {
    console.log("Sticky note closed.")
    stickyNote.remove();
});
stickyNote.appendChild(closeButton);

const stickyNoteWidth = 220;
const stickyNoteHeight = 220;


const centerX = (window.innerWidth - stickyNoteWidth) / 2;
const centerY = (window.innerHeight - stickyNoteHeight) / 2;

stickyNote.style.left = `${centerX}px`;
stickyNote.style.top = `${centerY}px`;


document.body.appendChild(stickyNote);
}});





