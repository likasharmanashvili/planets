import { useState } from 'react';
import { PlanetData } from '../types/common'; 
import data from "../data.json"
import Header from "../components/Header"
import jupiter from "../assets/planet-jupiter.svg"
import iJupiter from "../assets/planet-jupiter-internal.svg"
import jgeology from "../assets/geology-jupiter.png"

interface JupiterData {
  data: PlanetData[];
}

const jupiterData = data.find((planet) => planet.name === "Jupiter");

const Jupiter: React.FC = () => {
  const [Button, SetButton] = useState("overView")

  if (!jupiterData) {
    return <div>Planet data not found</div>;
  }

  return (
    <>
      <Header />
      <div className="Buttons"> 
        <button onClick={() => SetButton("overView")} className='button'>OVERVIEW</button>       
        <button onClick={() => SetButton("internal")} className='button'>INTERNAL STRUCTURE</button>
        <button onClick={() => SetButton("geology")} className='button'>SURFACE GEOLOGY</button>
      </div>
      {Button === "overView" ? (
        <>
          <div className="external">
            <div className="img">
              <img src={jupiter} alt="" className='JUPITEiMG'/>
            </div>
            <div className="infoJ">
              <h1>{jupiterData.name}</h1>
              <p>{jupiterData.overview.content}</p>
              <a href={jupiterData.overview.source}> <span>Source:</span> {jupiterData.overview.source}</a>
            </div>
          </div>

          <div className="mainInfoI">
            <div className="div1">
              <h3>ROTATION TIME</h3>
              <p>{jupiterData.rotation}</p>
            </div>
            <div className="div2">
              <h3>REVOLUTION TIME</h3>
              <p>{jupiterData.revolution}</p>
            </div>
            <div className="div3">
              <h3>RADIUS</h3>
              <p>{jupiterData.radius}</p>
            </div>
            <div className="div4">
              <h3>AVERAGE TEMP</h3>
              <p>{jupiterData.temperature}</p>
            </div>
          </div> 
        </>
      ) : Button === "internal" ? (
        <>
          <div className="internal">
            <div className="img">
              <img src={iJupiter} alt="" className='JUPITEiMG'/>
            </div>
            <div className="infoJ">
              <h1>{jupiterData.name}</h1>
              <p>{jupiterData.structure.content}</p>
              <a href={jupiterData.overview.source}> <span>Source:</span> {jupiterData.overview.source}</a>
            </div>
          </div>

          <div className="mainInfoI">
            <div className="div1">
              <h3>ROTATION TIME</h3>
              <p>{jupiterData.rotation}</p>
            </div>
            <div className="div2">
              <h3>REVOLUTION TIME</h3>
              <p>{jupiterData.revolution}</p>
            </div>
            <div className="div3">
              <h3>RADIUS</h3>
              <p>{jupiterData.radius}</p>
            </div>
            <div className="div4">
              <h3>AVERAGE TEMP</h3>
              <p>{jupiterData.temperature}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="geology">
            <div className="img">
              <img src={jupiter} alt="" className='geologyJ'/>
              <img src={jgeology} alt="" className='geology' />
            </div>
            <div className="infoGeology">
              <h1>{jupiterData.name}</h1>
              <p>{jupiterData.geology.content}</p>
              <a href={jupiterData.overview.source}> <span>Source:</span> {jupiterData.overview.source}</a>
            </div>
          </div>

          <div className="mainInfo">
            <div className="div1">
              <h3>ROTATION TIME</h3>
              <p>{jupiterData.rotation}</p>
            </div>
            <div className="div2">
              <h3>REVOLUTION TIME</h3>
              <p>{jupiterData.revolution}</p>
            </div>
            <div className="div3">
              <h3>RADIUS</h3>
              <p>{jupiterData.radius}</p>
            </div>
            <div className="div4">
              <h3>AVERAGE TEMP</h3>
              <p>{jupiterData.temperature}</p>
            </div>
          </div>  
        </>
      )}
    </>
  );
};

export default Jupiter;
