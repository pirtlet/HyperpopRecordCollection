/* If you're feeling fancy you can add interactivity
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

function togglePlay() {
  var myAudio = document.getElementById("PlanetClip");
  return myAudio.paused ? myAudio.play() : myAudio.pause();
};


