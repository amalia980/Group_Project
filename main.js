//Elements needed
const form = document.getElementById("form");
const whenClicked = document.getElementById("button");
const showLyrics = document.getElementById("lyrics");
const errorMessage = document.getElementById("error");

whenClicked.addEventListener("click", function() {

  const songTitle = document.getElementById("song");
  const stringValueTitle = songTitle.value;
  const stringLengthTitle = stringValueTitle.length;

  const artistName = document.getElementById("artist");
  const stringValueSong = artistName.value;
  const stringLengthSong = stringValueSong;

  if(stringLengthTitle && stringLengthSong === ) {
    showLyrics.innerHTML;
  }
  else {
      errorMessage.innerText = "Please fill in correct information";
  }

}

/*
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
*/
});

  
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
          errorMessage.innerText = "Please fill in correct information";
      }

  }

  const found = (search);
  
  console.log(found);
*/