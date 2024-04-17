import { useState } from 'react';
import { PlanetData } from '../types/common'; 
import data from "../data.json"
import Header from "../components/Header"
import neptune from "../assets/planet-neptune.svg"
import neptuneInternal from "../assets/planet-neptune-internal.svg"
import neptuneGeology from "../assets/geology-neptune.png"

const Neptune: React.FC = () => {
  const [Button, SetButton] = useState("overView")

  const neptuneData = data.find((planet) => planet.name === "Neptune");

  if (!neptuneData) {
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
              <img src={neptune} alt="" className='NeptuneImg'/>
            </div>
            <div className="info">
              <h1>{neptuneData.name}</h1>
              <p>{neptuneData.overview.content}</p>
              <a href={neptuneData.overview.source}> <span>Source:</span> {neptuneData.overview.source}</a>
            </div>
          </div>

          <div className="mainInfoI">
            <div className="div1">
              <h3>ROTATION TIME</h3>
              <p>{neptuneData.rotation}</p>
            </div>
            <div className="div2">
              <h3>REVOLUTION TIME</h3>
              <p>{neptuneData.revolution}</p>
            </div>
            <div className="div3">
              <h3>RADIUS</h3>
              <p>{neptuneData.radius}</p>
            </div>
            <div className="div4">
              <h3>AVERAGE TEMP</h3>
              <p>{neptuneData.temperature}</p>
            </div>
          </div> 
        </>
      ) : Button === "internal" ? (
        <>
          <div className="internal">
            <div className="img">
              <img src={neptuneInternal} alt="" className='intNeptune' />
            </div>
            <div className="info">
              <h1>{neptuneData.name}</h1>
              <p>{neptuneData.structure.content}</p>
              <a href={neptuneData.overview.source}> <span>Source:</span> {neptuneData.overview.source}</a>
            </div>
          </div>

          <div className="mainInfoI">
            <div className="div1">
              <h3>ROTATION TIME</h3>
              <p>{neptuneData.rotation}</p>
            </div>
            <div className="div2">
              <h3>REVOLUTION TIME</h3>
              <p>{neptuneData.revolution}</p>
            </div>
            <div className="div3">
              <h3>RADIUS</h3>
              <p>{neptuneData.radius}</p>
            </div>
            <div className="div4">
              <h3>AVERAGE TEMP</h3>
              <p>{neptuneData.temperature}</p>
            </div>
          </div> 
        </>
      ) : (
        <>
          <div className="geology">
            <div className="img">
              <img src={neptune} alt="" className='intMercury'/>
              <img src={neptuneGeology} alt="" className='geology'/>
            </div>
            <div className="infoGeologyN">
              <h1>{neptuneData.name}</h1>
              <p>{neptuneData.geology.content}</p>
              <a href={neptuneData.overview.source}> <span>Source:</span> {neptuneData.overview.source}</a>
            </div>
          </div>

          <div className="mainInfo">
            <div className="div1">
              <h3>ROTATION TIME</h3>
              <p>{neptuneData.rotation}</p>
            </div>
            <div className="div2">
              <h3>REVOLUTION TIME</h3>
              <p>{neptuneData.revolution}</p>
            </div>
            <div className="div3">
              <h3>RADIUS</h3>
              <p>{neptuneData.radius}</p>
            </div>
            <div className="div4">
              <h3>AVERAGE TEMP</h3>
              <p>{neptuneData.temperature}</p>
            </div>
          </div>  
        </>
      )}
    </>
  );
};

export default Neptune;
