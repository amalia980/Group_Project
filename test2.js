const form = document.getElementById("form");
const artistName = document.getElementById("artist");//inputfield artist
const songTitle = document.getElementById("song");//inputfield song
const button = document.getElementById("button");//button
const showLyrics = document.getElementById("lyrics");//create textarea inside this
const errorMessage = document.getElementById("error");//show error message
let textArea = null; //will remove previous results
  
/*
function URL(Artist, Song) {
  return `http://ianertson.com:3500/${Artist}/${Song}`;
}
*/
function searchLyrics(Artist, Song) {
  //const geturl = URL(Artist, Song);

  fetch(`http://ianertson.com:3500/${Artist}/${Song}`).then(function(res){
      res.json().then(function(data) {
        const LYRICS = data[0].lyrics.replace(/s(\n\r|\nExplain\nRequest\n \n\n\n\u00d7\n\n\n \n\n\n\n\n)/g, data[0], '<br>'); // [] = will get only the first result
        console.log(LYRICS);

        
        if (textArea) { // clears previous results through removing the tag <textarea>
          textArea.parentNode.removeChild(textArea);
        }


        textArea = document.createElement('textarea');
        showLyrics.appendChild(textArea);                       //<textarea> inside ShowLyrics <div> 
        textArea.className = "textarea";
        
        textArea.innerHTML = LYRICS
        
        
        const length = data[0].lyrics.length;
        
        if (length > 133) { // will set height to textarea according to length of content with 40rem as max
          textArea.style.height = "40rem";
          console.log(length);
        }
      });
  });
}

//event listeners
form.addEventListener('input', (e) => {
  e.preventDefault();

  const inputArtist = artistName.value;
  const inputSong = songTitle.value;

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
