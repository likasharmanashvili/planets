import { useState } from 'react';
import data from "../data.json"
import external from "../assets/planet-earth.svg"
import internal from "../assets/planet-earth-internal.svg"
import geology from "../assets/geology-earth.png"
import Header from "../components/Header"


const earthData = data.find((planet) => planet.name === "Earth");

const EarthD: React.FC = () => {
  const [Button, SetButton] = useState("overView")

  if (!earthData) {
    return <div>Earth data not found</div>;
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
              <img src={external} alt="" className='mainImg'/>
            </div>
            <div className="info">
              <h1>{earthData.name}</h1>
              <p>{earthData.overview.content}</p>
              <a href={earthData.overview.source}> <span>Source:</span> {earthData.overview.source}</a>
            </div>
          </div>

          <div className="mainInfoI">
            <div className="div1">
              <h3>ROTATION TIME</h3>
              <p>{earthData.rotation}</p>
            </div>
            <div className="div2">
              <h3>REVOLUTION TIME</h3>
              <p>{earthData.revolution}</p>
            </div>
            <div className="div3">
              <h3>RADIUS</h3>
              <p>{earthData.radius}</p>
            </div>
            <div className="div4">
              <h3>AVERAGE TEMP</h3>
              <p>{earthData.temperature}</p> 
            </div>
          </div> 
        </>
      ) : Button === "internal" ? (
        <>
          <div className="internal">
            <div className="img">
              <img src={internal} alt="" className='mainImg' />
            </div>
            <div className="info">
              <h1>{earthData.name}</h1>
              <p>{earthData.structure.content}</p>
              <a href={earthData.overview.source}> <span>Source:</span> {earthData.overview.source}</a>
            </div>
          </div>

          <div className="mainInfoI">
            <div className="div1">
              <h3>ROTATION TIME</h3>
              <p>{earthData.rotation}</p>
            </div>
            <div className="div2">
              <h3>REVOLUTION TIME</h3>
              <p>{earthData.revolution}</p>
            </div>
            <div className="div3">
              <h3>RADIUS</h3>
              <p>{earthData.radius}</p>
            </div>
            <div className="div4">
              <h3>AVERAGE TEMP</h3>
              <p>{earthData.temperature}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="geology">
            <div className="img">
              <img src={external} alt=""  className='geologymain'/>
              <img src={geology} alt=""  className='geologyE'/>
            </div>
            <div className="infoGeologyE">
              <h1>{earthData.name}</h1>
              <p>{earthData.geology.content}</p>
              <a href={earthData.overview.source}> <span>Source:</span> {earthData.overview.source}</a>
            </div>
          </div>

          <div className="mainInfo">
            <div className="div1">
              <h3>ROTATION TIME</h3>
              <p>{earthData.rotation}</p>
            </div>
            <div className="div2">
              <h3>REVOLUTION TIME</h3>
              <p>{earthData.revolution}</p>
            </div>
            <div className="div3">
              <h3>RADIUS</h3>
              <p>{earthData.radius}</p>
            </div>
            <div className="div4">
              <h3>AVERAGE TEMP</h3>
              <p>{earthData.temperature}</p> 
            </div>
          </div>  
        </>
      )}
    </>
  );
};

export default EarthD;
