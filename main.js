//Elements needed
const a = document.getElementById("form");
const songTitle = document.getElementById("song");
const artistName = document.getElementById("artist");
const whenClicked = document.getElementById("button");

//Fetch


  /*77777777777777777777777777777 */

  function URL(artist, song) {
      return `https://api.lyrics.ovh/v1/${artist}/${song}`;
  }

  function showLyrics(artist, song) {
      const geturl = URL(artist, song);

      fetch(geturl).then(function(response){
          response.json().then(function(data) {
              console.log(data.lyrics);
          });
      });
  }
  
/*
  const results = [ {
    artist: "",
    song: ""
    },

    {
    artist: "",
    song: ""
    },
];
*/
  //Array with the data

  

  //Function for searching lyrics
/*
  function search() => results.filter {
      if() {

      }
      else {
          alert("Please fill in the correct");
      }

  }

  const found = (search);
  
  console.log(found);
*/