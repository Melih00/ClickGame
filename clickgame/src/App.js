import "./App.css";
import { useState, useEffect } from "react";
import { Button } from "./Buttons";

function App() {
  const [zorluk, setZorluk] = useState(null);
  const [show, setShow] = useState(true);

  const zorlukSec = (el) => {
    if (el === "s") {
      Array.from(document.getElementsByClassName("zorlukButon")).forEach(
        (element) => {
          element.style.opacity = 1;
          element.style.visibility = "visible";
          element.style.display = "inline";
        }
      );
      document.getElementById("zorlukSecH2").innerText = "Zorluk Seç";
    } else if (el === "k") {
      Array.from(document.getElementsByClassName("zorlukButon")).forEach(
        (element) => {
          element.style.opacity = 0;
          element.style.visibility = "hidden";
          element.style.display = "none";
          setShow(true);
        }
      );
      setZorluk("kolay");

      document.getElementById("zorlukSecH2").innerText = "Zorluk: Kolay";
    } else if (el === "n") {
      Array.from(document.getElementsByClassName("zorlukButon")).forEach(
        (element) => {
          element.style.opacity = 0;
          element.style.visibility = "hidden";
          element.style.display = "none";
          element.style.display = "none";
          setShow(true);
        }
      );
      setZorluk("normal");

      document.getElementById("zorlukSecH2").innerText = "Zorluk: Normal";
    } else if (el === "z") {
      Array.from(document.getElementsByClassName("zorlukButon")).forEach(
        (element) => {
          element.style.opacity = 0;
          element.style.visibility = "hidden";
          element.style.display = "none";
          setShow(true);
        }
      );
      setZorluk("zor");

      document.getElementById("zorlukSecH2").innerText = "Zorluk: Zor";
    }
  };
    const changeInner = () => {

        if(document.getElementById("nasilOynanir").innerText === 'Nasıl Oynanır?'){
          document.getElementById("nasilOynanir").style.fontSize = '22px'
          document.getElementById("nasilOynanir").innerText =
          "Başlangıçta 100 puan olan sayaç 1000 puan olduğunda kazanırsınız.Her tıklamada 50 puan kazanır, zorluğa göre; kolayda 6, normalde 4, zorda 1 milisaniyede bir 1 puan kaybedersiniz. İyi eğlenceler :)";
        }else{
          document.getElementById("nasilOynanir").style.fontSize = '2.3rem'
          document.getElementById("nasilOynanir").innerText = 'Nasıl Oynanır?';
        }
         
    }


  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 0);
  }, []);

  return (
    <div className="App">
      <a href='https://github.com/Melih00/ClickGame/tree/main/clickgame' rel="noreferrer" target='_blank'><img title='GITHUB' alt='github' src='git-img.png' id='gitimg'/></a>
      <h1>Click Game'e Hoş Geldin!</h1>
      <div className="zorlukSec">
        <h2
          onClick={() => {
            zorlukSec("s");
          }}
          id="zorlukSecH2"
        >
          Zorluk Seç
        </h2>
        <button
          onClick={() => {
            zorlukSec("k");
          }}
          className="zorlukButon"
        >
          Kolay
        </button>
        <button
          onClick={() => {
            zorlukSec("n");
          }}
          className="zorlukButon"
        >
          Normal
        </button>
        <button
          onClick={() => {
            zorlukSec("z");
          }}
          className="zorlukButon"
        >
          Zor
        </button>
      </div>
      <div className="nasilOynanirDiv">
        <h2 onClick={changeInner} id="nasilOynanir">Nasıl Oynanır?</h2>
        {/* <p>Başlangıçta 100 puan olan sayaç 1000 puan olduğunda kazanırsınız.Her tıklamada 5 puan kazanır, zorluğa göre; kolayda 6, normalde 4, zorda 1 milisaniyede bir 1 puan kaybedersiniz. İyi eğlenceler :)</p> */}
      </div>
      {show && <Button el={zorluk} />}
    </div>
  );
}

export default App;
