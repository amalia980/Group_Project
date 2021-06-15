const form = document.getElementById("form");
const artistName = document.getElementById("artist");//inputfield artist
const songTitle = document.getElementById("song");//inputfield song
const button = document.getElementById("button");//button
const showLyrics = document.getElementById("lyrics");//create textarea inside this
const errorMessage = document.getElementById("error");//show error message

  //have toLowerCase so users can be able to type in wit lowercase and still find results
  
/*
function URL(Artist, Song) {
  return `http://ianertson.com:3500/${Artist}/${Song}`;
}
*/
function searchLyrics(Artist, Song) {
  //const geturl = URL(Artist, Song);



  fetch(`http://ianertson.com:3500/${Artist}/${Song}`).then(function(res){
      res.json().then(function(data) {
        const lyrics = data[0].lyrics/*.replace(/(\r\n|\r|\r|\n)/g, '<br />')*/; // [] = will get only the first result
        console.log(data.lyrics);

        const textArea = document.createElement('textarea');
        showLyrics.appendChild(textArea);
        textArea.innerText = lyrics
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

      // if BOTH inputs are filled
      if (inputArtist.length > 0 && inputSong.length > 0) {
        button.removeAttribute("disabled");
        button.style.marginTop = "0";
        button.style.color = "white";
        button.style.backgroundColor = "#1E0A37";
        button.style.cursor = "pointer";
        button.style.transition = "0.5s";
        button.style.borderStyle = "none";
        
        errorMessage.innerText = "";      
        
        button.addEventListener("click", e => {
          e.preventDefault();
          searchLyrics(inputArtist, inputSong);
        });
      }

      // if both inputs are NOT filled
        else if (!inputArtist.length && !inputSong.length) {
          button.setAttribute('disabled', 'disabled');

          button.style.color = null;
          button.style.backgroundColor = null;
          button.style.cursor = null;

          button.style.margin = 0;
          errorMessage.innerHTML = "";
                
      }

      // if only ONE input is filled
      //else if(!(inputArtist.length && inputSong.length)) {
        else if(inputArtist.length > 0 || inputSong.length > 0) {
          button.setAttribute('disabled', 'disabled');
  
          button.style.color = null;
          button.style.backgroundColor = null;
          button.style.cursor = null;
  
          button.style.marginTop = "1rem";
          errorMessage.style.transition = "0.5s";
          errorMessage.style.marginTop = "1rem";
          errorMessage.innerText = "Please fill all with correct information";     
        }
  });

/*
- inputArtist < 0 && inputSong < 0 - doesnt work
- !inputArtist && !inputSong
- inputArtist === "" && inputSong === "" - doesnt work
- inputArtist === 0 && inputSong === 0
*/
