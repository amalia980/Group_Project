const form = document.getElementById("form");
const artistName = document.getElementById("artist");//inputfield artist
const songTitle = document.getElementById("song");//inputfield song
const whenClicked = document.getElementById("button");//button
const showLyrics = document.getElementById("lyrics");//create textarea inside this
const errorMessage = document.getElementById("error");//show error message

//fetch data from api
const inputArtist = artistName.value;
const inputSong = songTitle.value;

//const artist = [];
//const song = [];

fetch(`https://api.lyrics.ovh/v1/${inputArtist}/${inputSong}`)
    .then(function(response) {
        response.json().then(function(data) {
            
            showResults(data.lyrics);
        });
    });

    //create Elements to display result
    function displayLyrics(theLyrics) {

        const textArea = document.createElement('textarea');

    }

//event listeners
form.addEventListener('submit', e => {
    e.preventDefault();

    //clears previous results
    showLyrics.innerHTML = '';

    if (inputArtist.value === "" || inputSong.value === "") {

    }
    else {
        //searchLyrics(inputArtist, inputSong);
    }
});


