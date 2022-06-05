

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", clickHandler);
}

function AudioPlay(sound) {
    var audio = new Audio(sound);
    audio.play();
}

function clickHandler() {

    switch (this.innerHTML) {
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

    }
    // console.log(this.innerHTML);

    // this.style.color = "white";


}