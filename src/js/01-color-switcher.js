function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

const dataStart = document.querySelector('button[data-start]');
const dataStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body')
let startInterval = null;

dataStart.addEventListener('click', onStart);
dataStop.addEventListener('click', onStop);

function onStart (e){
    startInterval = setInterval(changeColor,1000)
    dataStart.disabled = 'true';
    dataStop.removeAttribute('disabled');
    };

function onStop (e){
    clearInterval(startInterval);
    dataStop.disabled = 'true';
    dataStart.removeAttribute('disabled');
};

function changeColor (){
    body.style.backgroundColor = getRandomHexColor();
}