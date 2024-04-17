import { useState } from 'react';
import { PlanetData } from '../types/common'; 
import data from "../data.json"
import Header from"../components/Header"
import mercury from "../assets/planet-mercury.svg"
import mercuryInternal from "../assets/planet-mercury-internal.svg"
import mercuryGeology from "../assets/geology-mercury.png"



interface JUPITERData {
  data: PlanetData[];
}

const MercuryData = data.find((planet) => planet.name === "Mercury");

const Mercury: React.FC<JUPITERData > = () => {



  const [Button, SetButton] = useState("overView")

  if (! MercuryData) {
    return <div> Planet data not found</div>;
  }

  return (
    <>
        <Header />
     <div className="ButtonsM"> 
     <button onClick={() => SetButton("overView")} className='button'>OVERVIEW</button>       
  <button onClick={() => SetButton("internal")} className='button'>INTERNAL STRUCTURE</button>
  <button onClick={() => SetButton("geology")} className='button'>SURFACE GEOLOGY</button>
</div>
{
  Button === "overView" ? (
    <>
     <div className="externalM">
       <div className="img">
<img src={mercury} alt="" className='mercuryImg' />
       </div>
<div className="info">
<h1>{ MercuryData.name}</h1>
<p>{ MercuryData.overview.content}</p>
<a href={ MercuryData.overview.source}> <span>Source:</span> { MercuryData.overview.source}</a>
</div>
     </div>


     <div className="mainInfoMercury">
     <div className="div1">
      <h3>ROTATION TIME</h3>
      <p>{ MercuryData.rotation}</p>
     </div>
     <div className="div2">
      <h3>REVOLUTION TIME</h3>
      <p>{ MercuryData.revolution}</p>
     </div>
     <div className="div3">
      <h3>RADIUS</h3>
      <p>{MercuryData.radius}</p>
     </div>
     <div className="div4">
      <h3>AVERAGE TEMP</h3>
      <p>{ MercuryData.radius}</p>
     </div>
    </div> 
    </>
  ) : Button === "internal" ? (
    <>
      <div className="internalM">
       <div className="img">
       <img src= {mercuryInternal} alt=" " className='internalMercur' />
       </div>
<div className="info">
<h1>{ MercuryData.name}</h1>
<p>{ MercuryData.structure.content}</p>
<a href={ MercuryData.overview.source}> <span>Source:</span> { MercuryData.overview.source}</a>
</div>
     </div>

     <div className="mainInfoMercury">
     <div className="div1">
      <h3>ROTATION TIME</h3>
      <p>{ MercuryData.rotation}</p>
     </div>
     <div className="div2">
      <h3>REVOLUTION TIME</h3>
      <p>{ MercuryData.revolution}</p>
     </div>
     <div className="div3">
      <h3>RADIUS</h3>
      <p>{ MercuryData.radius}</p>
     </div>
     <div className="div4">
      <h3>AVERAGE TEMP</h3>
      <p>{ MercuryData.radius}</p>
     </div>
    </div> 
    </>
  ) : (
    <>
 <div className="geology">
       <div className="imgMercury">
    <img src={mercury} alt="" className='geoMercury'/>
    <img src={mercuryGeology} alt=""  className='geologyMercury'/>
       </div>
<div className="infoMer">
<h1>{ MercuryData.name}</h1>
<p>{ MercuryData.geology.content}</p>
<a href={ MercuryData.overview.source}> <span>Source:</span> { MercuryData.overview.source}</a>
</div>
     </div>

  <div className="mainInfo">
     <div className="div1">
      <h3>ROTATION TIME</h3>
      <p>{ MercuryData.rotation}</p>
     </div>
     <div className="div2">
      <h3>REVOLUTION TIME</h3>
      <p>{ MercuryData.revolution}</p>
     </div>
     <div className="div3">
      <h3>RADIUS</h3>
      <p>{ MercuryData.radius}</p>
     </div>
     <div className="div4">
      <h3>AVERAGE TEMP</h3>
      <p>{ MercuryData.radius}</p>
     </div>
    </div>  


    </>
  )
}
      
    </>
  );
};
     


export default Mercury;
