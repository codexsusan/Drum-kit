// Plays Audio function

function AudioPlay(sound) {
    var audio = new Audio(sound);
    audio.play();
}

function playaudio(x) {
    switch (x) {
        case 'w':
            AudioPlay("sounds/tom-1.mp3");
            break;
        case 'a':
            AudioPlay("sounds/tom-2.mp3");
            break;
        case 's':
            AudioPlay("sounds/tom-3.mp3");
            break;
        case 'd':
            AudioPlay("sounds/tom-4.mp3");
            break;
        case 'j':
            AudioPlay("sounds/crash.mp3");
            break;
        case 'k':
            AudioPlay("sounds/kick-bass.mp3");
            break;
        case 'l':
            AudioPlay("sounds/snare.mp3");
            break;
        default:
            console.log(x);
    }
}

// Click / Button Press Action Handler

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", clickHandler);
}

function clickHandler() {

    var clicked = this.innerHTML;
    playaudio(clicked);
    buttonAnimation(clicked);
}

// Keyboard Action Listener 

document.addEventListener("keypress", keyHandler);

function keyHandler(character) {
    playaudio(character.key);
    buttonAnimation(character.key);
}

// Button Animation On Click

function buttonAnimation(currentKey) {
    var currentButton = document.querySelector("." + currentKey);
    currentButton.classList.toggle("pressed");

    setTimeout(function () {
        currentButton.classList.toggle("pressed");
    }, 300);

}