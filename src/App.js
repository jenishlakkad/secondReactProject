import "./App.css";
// import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import main from './component/Main';
import FunctionalComponent from "./component/FunctionalComponent";
import { FC2 } from "./component/FC2";
import { FC3 } from "./component/FC3";
// import { FC4 } from './component/FC4';
import FC4 from "./component/FC4";
import FC5 from "./component/FC5";
import img1 from "./asset/Image/AbdulKalam.jpg";
import img2 from "./asset/Image/CharlesDarwin.jpg";
import img3 from "./asset/Image/Issac-Newton.jpg";
import img4 from "./asset/Image/Tesla.jpeg";
import img5 from "./asset/Image/StephenHawking.jpg";
import king1 from "./asset/Image/MaharanaPratap.jpg";
import king2 from "./asset/Image/ShivajiMaharaj.jpeg";
import king3 from "./asset/Image/PrithvirajChauhan.jpg";
import king4 from "./asset/Image/AshokaTheGreat.jpeg";
import king5 from "./asset/Image/Vijayanagara.jpg";
import god1 from "./asset/Image/3-HanumanJi.jpg";
import god2 from "./asset/Image/3-LoardKrishna.jpg";
import god3 from "./asset/Image/3-GaneshJi.jpg";
import god4 from "./asset/Image/3-LoardRam.jpeg";
import god5 from "./asset/Image/3-lord-shiva.jpg";
import anime1 from "./asset/Image/4-Naruto.jpg";
import anime2 from "./asset/Image/4-Goku.jpg";
import anime3 from "./asset/Image/4-Saitama.jpg";
import anime4 from "./asset/Image/4-Luffy.jpg";
import anime5 from "./asset/Image/4-Baki.jpg";
import Word from "./component/Word";

function App() {
  return (
    <div>
      {/* ############    COMPONENT:= 1   ############# */}
      {/* <h1 className="text-center">List of Gods</h1>
      <div className="container-fluid App row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 g-1">
        <FC3 image={god1} kingName={"MaharanaPratap"} />
        <FC3 image={god2} kingName={"ShivajiMaharaj"} />
        <FC3 image={god3} kingName={"PrithvirajChauhan"} />
        <FC3 image={god4} kingName={"AshokaTheGreat"} />
        <FC3 image={god5} kingName={"Vijayanagara"} />
      </div> */}

      {/* ############    COMPONENT:= 2   ############# */}
      {/* <h1 className="text-center">List of Scientist</h1>
      <div className="container-fluid App row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 g-1">
        <FunctionalComponent
          details={
            "Indian scientist known for his role in the development of Indias defense arsenal"
          }
          name={"AbdulKalam"}
          image={img1}
        />
        <FunctionalComponent
          details={"one of the most influential figures in human history"}
          name={"CharlesDarwin"}
          image={img2}
        />
        <FunctionalComponent
          details={
            "Sir Isaac Newton FRS PRS (25 December 1643 – 20 March 1726/27) was an English physicist, mathematician and astronomer"
          }
          name={"Issac-Newton"}
          image={img3}
        />
        <FunctionalComponent
          details={
            "Serbian American inventor and engineer who discovered and patented the rotating magnetic"
          }
          name={"NicolaTesla"}
          image={img4}
        />
        <FunctionalComponent
          details={
            "Theory of exploding black holes drew upon both relativity theory and quantum mechanics"
          }
          name={"StephenHawking"}
          image={img5}
        />
      </div> */}

      {/* ############    COMPONENT:= 3   ############# */}
      {/* <h1 className="text-center">List of Kings</h1>
      <div className="container-fluid App row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 g-1 pt-3 pb-5">
        <FC2 image={king1} kingName={"MaharanaPratap"} />
        <FC2 image={king2} kingName={"ShivajiMaharaj"} />
        <FC2 image={king3} kingName={"PrithvirajChauhan"} />
        <FC2 image={king4} kingName={"AshokaTheGreat"} />
        <FC2 image={king5} kingName={"Vijayanagara"} />
      </div> */}

      {/* ############    COMPONENT:= 4   ############# */}
      {/* <h1 className="text-center">List of Anime</h1>
      <div className="container-fluid App row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 g-3 pt-3 pb-5">
        <FC4 image={anime1} name={"Naruto"} />
        <FC4 image={anime2} name={"Goku"} />
        <FC4 image={anime3} name={"Saitama"} />
        <FC4 image={anime4} name={"Luffy"} />
        <FC4 image={anime5} name={"Baki"} />
      </div> */}

      {/* ############    COMPONENT:= 4(Copy)   ############# */}
      {/* <h1 className="text-center">WELLCOME TO THE WORLD OF LAKKAD</h1>
      <div className=" container-fluid App row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 g-3 pt-3 pb-5 ">
        <FC4 image={anime1} name={"Naruto"} />
        <FC4 image={anime2} name={"Goku"} />
        <FC4 image={anime3} name={"Saitama"} />
        <FC4 image={anime4} name={"Luffy"} />
        <FC4 image={anime5} name={"Baki"} />
      </div> */}

      {/* ############    COMPONENT:= 5   ############# */}
      {/* <div className="container-fluid  bg">
        <h1 className="text-center">Naruto</h1>
        <div className="App row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 g-3 pt-3 pb-5 "></div>
      </div> */}
      <Word/>
    </div>

  );
}

export default App;
