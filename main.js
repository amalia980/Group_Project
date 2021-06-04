//get API, data is in objects

//info about the API. parameters are "artist" and "title". "lyrics" is the 
/*
function URL(artist, title) {
  return `https://api.lyrics.ovh/v1/${artist}/${title}`;
}

function showLyrics(artist, title) {
  const geturl = URL(artist, title);

  fetch(geturl).then(function(response){
      response.json().then(function(data) {

      });
  });
}
  
showLyrics();
*/

//HTML elements needed
//const form = document.getElementById("form");
const whenClicked = document.getElementById("button");//button
const showLyrics = document.getElementById("lyrics");//create textarea inside this
const errorMessage = document.getElementById("error");//show error message
const songTitle = document.getElementById("song");//inputfield song
const artistName = document.getElementById("artist");//inputfield artist

function getLyrics(artist, title) {
  fetch("https://api.lyrics.ovh/v1/")
  .then(response => response.json())
  .then(lyrics => {
    showLyrics.innerHTML = `<textarea ${lyrics.file}></textare>`
  });
}

getLyrics(artist.value, title.value);

//create textarea to display results(the lyrics) in
const textArea = document.createElement("textarea");
textArea.appendChild(lyrics); //<textarea> inside <div id="lyrics"</div>

//when button is clicked
whenClicked.addEventListener("click", function() {

  const artistValue = songTitle.value;
  const artistLength = artistValue.length;

  const songValue = artistName.value;
  const songLength = songValue;

  if(artistLength && songLength === showLyrics) {
    showLyrics.innerHTML;
  }
  else {
      errorMessage.innerText = "Please fill in correct information";
  }
});
