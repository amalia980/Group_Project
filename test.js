const form = document.getElementById("form");
const artistName = document.getElementById("artist");//inputfield artist
const songTitle = document.getElementById("song");//inputfield song
const whenClicked = document.getElementById("button");//button
const showLyrics = document.getElementById("lyrics");//create textarea inside this
const errorMessage = document.getElementById("error");//show error message
/*
const URL = 'https://api.lyrics.ovh';

//search by song and artist

function searchLyrics(artist, title) {
  fetch(`${URL}/suggest/${artist}/${title}`)
  .then(res => res.json())
  .then(data => console.log(data.lyrics));
}
*/

function URL(artistValue, titleValue) {
  return `https://api.lyrics.ovh/v1/${artistValue}/${titleValue}`;
}

function searchLyrics(artistValue, titleValue) {
  const geturl = URL(artistValue, titleValue);

  fetch(geturl).then(function(res){
      res.json().then(function(data) {
        console.log(data.lyrics);

        //showResults(data.lyrics);

      });
  });
}

//display results

function showLResults(data) {
/*
   const textArea = document.createElement('textarea');
   textArea.innerText = result;

   showLyrics.appendChild(textArea);
   console.log(textArea);*/

   let output = "";

   data.data.forEach(song => {
     output += `<textare>`;
   });
}

/*
function showData(data) {
 let output = "";

 data.data.forEach(song => {
   output += 
  ``});
}
*/
//event listerners
form.addEventListener('submit', e => {
  e.preventDefault();

  const userArtist = artistName.value;
  const userSong = songTitle.value;

  //if no input is entered show error message
  if (userArtist && userSong) {
    searchLyrics(userArtist, userSong);

  }
  else if (!searchArtist || !searchSong) {
    errorMessage.innerText = "Please fill all with correct information";
  }

});


/*
  const search = artist.value + title.value;
  */