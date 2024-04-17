import { useState } from 'react';
import data from "../data.json"
import Header from "../components/Header"
import venus from "../assets/planet-venus.svg"
import venusInternal from "../assets/planet-venus-internal.svg"
import venusGeology from "../assets/geology-venus.png"

const Venus: React.FC = () => {
  const [Button, SetButton] = useState("overView")

  const venusData = data.find((planet) => planet.name === "Venus");

  if (!venusData) {
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
              <img src={venus} alt="" className='venus' />
            </div>
            <div className="info">
              <h1>{venusData.name}</h1>
              <p>{venusData.overview.content}</p>
              <a href={venusData.overview.source}> <span>Source:</span> {venusData.overview.source}</a>
            </div>
          </div>

          <div className="mainInfoI">
            <div className="div1">
              <h3>ROTATION TIME</h3>
              <p>{venusData.rotation}</p>
            </div>
            <div className="div2">
              <h3>REVOLUTION TIME</h3>
              <p>{venusData.revolution}</p>
            </div>
            <div className="div3">
              <h3>RADIUS</h3>
              <p>{venusData.radius}</p>
            </div>
            <div className="div4">
              <h3>AVERAGE TEMP</h3>
              <p>{venusData.temperature}</p>
            </div>
          </div> 
        </>
      ) : Button === "internal" ? (
        <>
          <div className="internal">
            <div className="img">
              <img src={venusInternal} alt="" className='venus' />
            </div>
            <div className="info">
              <h1>{venusData.name}</h1>
              <p>{venusData.structure.content}</p>
              <a href={venusData.overview.source}> <span>Source:</span> {venusData.overview.source}</a>
            </div>
          </div>

          <div className="mainInfoI">
            <div className="div1">
              <h3>ROTATION TIME</h3>
              <p>{venusData.rotation}</p>
            </div>
            <div className="div2">
              <h3>REVOLUTION TIME</h3>
              <p>{venusData.revolution}</p>
            </div>
            <div className="div3">
              <h3>RADIUS</h3>
              <p>{venusData.radius}</p>
            </div>
            <div className="div4">
              <h3>AVERAGE TEMP</h3>
              <p>{venusData.temperature}</p>
            </div>
          </div> 
        </>
      ) : (
        <>
          <div className="geology">
            <div className="img">
              <img src={venus} alt="" className='venus' />
              <img src={venusGeology} alt="" className='geology' />
            </div>
            <div className="info">
              <h1>{venusData.name}</h1>
              <p>{venusData.geology.content}</p>
              <a href={venusData.overview.source}> <span>Source:</span> {venusData.overview.source}</a>
            </div>
          </div>

          <div className="mainInfo">
            <div className="div1">
              <h3>ROTATION TIME</h3>
              <p>{venusData.rotation}</p>
            </div>
            <div className="div2">
              <h3>REVOLUTION TIME</h3>
              <p>{venusData.revolution}</p>
            </div>
            <div className="div3">
              <h3>RADIUS</h3>
              <p>{venusData.radius}</p>
            </div>
            <div className="div4">
              <h3>AVERAGE TEMP</h3>
              <p>{venusData.temperature}</p>
            </div>
          </div>  
        </>
      )}
    </>
  );
};

export default Venus;
