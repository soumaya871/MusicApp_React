import Player from "./composants/Player";
import { useState,useEffect } from "react"; 
function App() {
const [songs]= useState([
  {
  title:"Enti Chamsi",
  artist :"Lotfi Bouchnak",
  img_src:"./images/Lotfi.jpg",
  src:"./Songs/Enti chamsi enti.mp3",
},
{
  title:"Take You Dancing",
  artist :"Jason Derulo ",
  img_src:"./images/JasonDerulo-TakeYouDancing.jpg",
  src:"./Songs/JasonDerulo-TakeYouDancing.mp3",
},
{
title:"Trampoline ",
artist :"SHAED x ZAYN ",
img_src:"./images/s.jpg",
src:"./Songs/Trampoline (Lyrics).mp3",
}
]);
const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);
  return (
    <div className="App">
     
      <Player 
      currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
        />
          
      
    </div>
  );
}

export default App;
