const form = document.getElementById("form");
const artistName = document.getElementById("artist");//inputfield artist
const songTitle = document.getElementById("song");//inputfield song
const button = document.getElementById("button");//button
const showLyrics = document.getElementById("lyrics");//create textarea inside this
const errorMessage = document.getElementById("error");//show error message

  //have toLowerCase so users can be able to type in wit lowercase and still find results
  

function URL(Artist, Song) {
  return `https://api.lyrics.ovh/v1/${Artist}/${Song}`;
}

function searchLyrics(Artist, Song) {
  const geturl = URL(Artist, Song);

  fetch(geturl).then(function(res){
      res.json().then(function(data) {

        console.log(data.lyrics);


        const textArea = document.createElement('textarea');
        showLyrics.appendChild(textArea);
        textArea.innerText = data.lyrics;
      })
  });
}

//event listeners
form.addEventListener('input', (e) => {
  e.preventDefault();

  const inputArtist = artistName.value;
  const inputSong = songTitle.value;

  //clears previous results
  showLyrics.innerHTML = "";

  if (inputArtist.length > 0 && inputSong.length > 0) {
    button.removeAttribute("disabled");
    errorMessage.innerText = "";
    button.addEventListener("click", e => {
      e.preventDefault();
      searchLyrics(inputArtist, inputSong);
    });
  }
  else if (!inputArtist || !inputSong) {
    errorMessage.innerText = "Please fill all with correct information";
    button.setAttribute('disabled', 'disabled');
  }
  else if (!inputArtist && !inputSong){
    errorMessage.innerText = "";
  }
});