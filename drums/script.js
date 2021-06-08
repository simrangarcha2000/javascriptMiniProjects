console.log('Drum Roll')

//Press keys and then get the info
window.addEventListener('keydown', function(e){
    console.log(e)
    //shows the number of the keys
    console.log(e.keyCode)

    //Whenever a key is selected checking if it is same as the data-key
    const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`)
    console.log(audio)

    if(!audio) return//Stop func from running
    
    //When we click multiple times then it finishes and then clicks again so we need to rewind it so it plays from start rather then finishing it .
    audio.currentTime = 0 // rewind to Start
    audio.play(); //Play audio

});