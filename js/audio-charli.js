/* If you're feeling fancy you can add interactivity
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

function togglePlay() {
  var myAudio = document.getElementById("ClawsClip");
  return myAudio.paused ? myAudio.play() : myAudio.pause();
};

// var AudioAll = document.getElementById("mute_all");
// AudioAll = document.getElementById("unmute_all");

// var ClawsBtn = document.getElementById('ClawsBtn'),
// ClawsClip = document.getElementById('ClawsClip'),

//   audios = document.querySelectorAll('audio');
// console.log(audios);


// ClawsBtn.addEventListener('click', function() {
//     ClawsClip.play();
// }, false);

// ClawsBtn.addEventListener('dblclick', function() {
//   ClawsClip.pause();
//   ClawsClip.currentTime = 0;
// }, false);


//THIS WORKS BUT ONLY FOR 2ND CLICK
// window.onload=function() {

//     var ClawsBtn = document.getElementById('ClawsBtn');
//     var clickCounter = 0;
//     ClawsBtn.onclick = function () {
//         clickCounter++;
//         if (clickCounter == 2) {
//             ClawsClip.pause();
//         }
//     };

// }

// var ClawsBtn = document.getElementById("ClawsBtn");
// var ClawsClip = false;

// function togglePlay() {
//   var myAudio = document.getElementById("ClawsClip");
//   return ClawsClip.paused ? ClawsClip.play() : ClawsClip.pause();
// };

// function togglePlay() {
//   isPlaying ? myAudio.pause() : myAudio.play();
// };

// ClawsClip.onplaying = function() {
//   isPlaying = true;
// };
// ClawsClip.onpause = function() {
//   isPlaying = false;
// };

// <audio id="myAudio" src="http://www.sousound.com/music/healing/healing_01.mp3" preload="auto">
// </audio>
// <a onClick="togglePlay()">Click here to hear.</a>

// function togglePlay() {
//   if (ClawsClip) {
//     ClawsBtn.pause()
//   } else {
//     ClawsBtn.play();
//   }
// };
// ClawsBtn.onplaying = function() {
//   ClawsClip = true;
// };
// ClawsBtn.onpause = function() {
//   ClawsClip = false;
// };


