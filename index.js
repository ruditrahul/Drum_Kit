window.addEventListener('keydown', playSound);

function playSound(e) {
    console.log(e.keyCode);
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.play();
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add("playing");
    setTimeout(() => {
        key.classList.remove("playing");

    }, 200)

}