import { useState } from 'react';
import { PlanetData } from '../types/common'; 
import data from "../data.json"
import Header from "../components/Header"
import uranus from "../assets/planet-uranus.svg"
import uranusInternal from "../assets/planet-uranus-internal.svg"
import uranusGeology from "../assets/geology-uranus.png"

const Uranus: React.FC = () => {
  const [Button, SetButton] = useState("overView")

  const uranusData = data.find((planet) => planet.name === "Uranus");

  if (!uranusData) {
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
              <img src={uranus} alt="" className='uranusImg' />
            </div>
            <div className="info">
              <h1>{uranusData.name}</h1>
              <p>{uranusData.overview.content}</p>
              <a href={uranusData.overview.source}> <span>Source:</span> {uranusData.overview.source}</a>
            </div>
          </div>

          <div className="mainInfoI">
            <div className="div1">
              <h3>ROTATION TIME</h3>
              <p>{uranusData.rotation}</p>
            </div>
            <div className="div2">
              <h3>REVOLUTION TIME</h3>
              <p>{uranusData.revolution}</p>
            </div>
            <div className="div3">
              <h3>RADIUS</h3>
              <p>{uranusData.radius}</p>
            </div>
            <div className="div4">
              <h3>AVERAGE TEMP</h3>
              <p>{uranusData.temperature}</p>
            </div>
          </div> 
        </>
      ) : Button === "internal" ? (
        <>
          <div className="internal">
            <div className="img">
              <img src={uranusInternal} alt="" className='uranusImg'/>
            </div>
            <div className="info">
              <h1>{uranusData.name}</h1>
              <p>{uranusData.structure.content}</p>
              <a href={uranusData.overview.source}> <span>Source:</span> {uranusData.overview.source}</a>
            </div>
          </div>

          <div className="mainInfoI">
            <div className="div1">
              <h3>ROTATION TIME</h3>
              <p>{uranusData.rotation}</p>
            </div>
            <div className="div2">
              <h3>REVOLUTION TIME</h3>
              <p>{uranusData.revolution}</p>
            </div>
            <div className="div3">
              <h3>RADIUS</h3>
              <p>{uranusData.radius}</p>
            </div>
            <div className="div4">
              <h3>AVERAGE TEMP</h3>
              <p>{uranusData.temperature}</p>
            </div>
          </div> 
        </>
      ) : (
        <>
          <div className="geology">
            <div className="img">
              <img src={uranus} alt="" className='GeoUranus'/>
              <img src={uranusGeology} alt="" className='geology'/>
            </div>
            <div className="infoU">
              <h1>{uranusData.name}</h1>
              <p>{uranusData.geology.content}</p>
              <a href={uranusData.overview.source}> <span>Source:</span> {uranusData.overview.source}</a>
            </div>
          </div>

          <div className="mainInfo">
            <div className="div1">
              <h3>ROTATION TIME</h3>
              <p>{uranusData.rotation}</p>
            </div>
            <div className="div2">
              <h3>REVOLUTION TIME</h3>
              <p>{uranusData.revolution}</p>
            </div>
            <div className="div3">
              <h3>RADIUS</h3>
              <p>{uranusData.radius}</p>
            </div>
            <div className="div4">
              <h3>AVERAGE TEMP</h3>
              <p>{uranusData.temperature}</p>
            </div>
          </div>  
        </>
      )}
    </>
  );
};

export default Uranus;
