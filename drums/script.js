console.log('Drum Roll')

//Press keys and then get the info
window.addEventListener('keydown', playSound);

//Play Sound
function playSound(e){
    console.log(e)
    //shows the number of the keys
    console.log(e.keyCode)

    //Whenever a key is selected checking if it is same as the data-key
    const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`)
    console.log(audio)

    //Selecting div with class key
    const key = document.querySelector(`.key[data-key= "${e.keyCode}"]`)
    console.log(key)

    if(!audio) return//Stop func from running
    
    //When we click multiple times then it finishes and then clicks again so we need to rewind it so it plays from start rather then finishing it .
    audio.currentTime = 0 // rewind to Start
    audio.play(); //Play audio

    //Adding the class to create animation to the keys when clicked
    key.classList.add('playing')



}

    //Transition end event
    function removeTransition(e){
        //Shows all transition
        console.log(e)
        if(e.propertyName !== 'transform') return; //Skip if not transform
        console.log(e.propertyName)
        //to find what this is
        console.log(this);
        this.classList.remove("playing")

    }

//Adding all keys on the page
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));