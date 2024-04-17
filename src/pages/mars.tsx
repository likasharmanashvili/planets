import { useState } from 'react';
import { PlanetData } from '../types/common'; 
import data from "../data.json"
import Header from"../components/Header"
import mars from "../assets/planet-mars.svg"
import iMars from "../assets/planet-mars-internal.svg"
import marsGeology from "../assets/geology-mars.png"



interface JUPITERData {
  data: PlanetData[];
}

const MarsData = data.find((planet) => planet.name === "Mars");

const Mars: React.FC<JUPITERData > = () => {



  const [Button, SetButton] = useState("overView")

  if (!MarsData) {
    return <div> Planet data not found</div>;
  }

  return (
    <>
        <Header />
     <div className="Buttons"> 
     <button onClick={() => SetButton("overView")} className='button'>OVERVIEW</button>       
  <button onClick={() => SetButton("internal")} className='button'>INTERNAL STRUCTURE</button>
  <button onClick={() => SetButton("geology")} className='button'>SURFACE GEOLOGY</button>
</div>
{
  Button === "overView" ? (
    <>
     <div className="externalM">
       <div className="img">
<img src={mars } alt="" className='extmars' />
       </div>
<div className="info">
<h1>{MarsData.name}</h1>
<p>{MarsData.overview.content}</p>
<a href={MarsData.overview.source}> <span>Source:</span> {MarsData.overview.source}</a>
</div>
     </div>


     <div className="mainInfoM">
     <div className="div1">
      <h3>ROTATION TIME</h3>
      <p>{MarsData.rotation}</p>
     </div>
     <div className="div2">
      <h3>REVOLUTION TIME</h3>
      <p>{MarsData.revolution}</p>
     </div>
     <div className="div3">
      <h3>RADIUS</h3>
      <p>{MarsData.radius}</p>
     </div>
     <div className="div4">
      <h3>AVERAGE TEMP</h3>
      <p>{MarsData.radius}</p>
     </div>
    </div> 
    </>
  ) : Button === "internal" ? (
    <>
      <div className="internalM">
       <div className="img">
       <img src= {iMars} alt="" className='extmars' />
       </div>
<div className="info">
<h1>{MarsData.name}</h1>
<p>{MarsData.structure.content}</p>
<a href={MarsData.overview.source}> <span>Source:</span> {MarsData.overview.source}</a>
</div>
     </div>

     <div className="mainInfoM">
     <div className="div1">
      <h3>ROTATION TIME</h3>
      <p>{MarsData.rotation}</p>
     </div>
     <div className="div2">
      <h3>REVOLUTION TIME</h3>
      <p>{MarsData.revolution}</p>
     </div>
     <div className="div3">
      <h3>RADIUS</h3>
      <p>{MarsData.radius}</p>
     </div>
     <div className="div4">
      <h3>AVERAGE TEMP</h3>
      <p>{MarsData.radius}</p>
     </div>
    </div> 
    </>
  ) : (
    <>
 <div className="geology">
       <div className="img">
    <img src={mars} alt="" className='geologyMars' />
    <img src={marsGeology} alt="" className='geologyM' />
       </div>
<div className="infoM">
<h1>{MarsData.name}</h1>
<p>{MarsData.geology.content}</p>
<a href={MarsData.overview.source}> <span>Source:</span> {MarsData.overview.source}</a>
</div>
     </div>

  <div className="mainInfo">
     <div className="div1">
      <h3>ROTATION TIME</h3>
      <p>{MarsData.rotation}</p>
     </div>
     <div className="div2">
      <h3>REVOLUTION TIME</h3>
      <p>{MarsData.revolution}</p>
     </div>
     <div className="div3">
      <h3>RADIUS</h3>
      <p>{MarsData.radius}</p>
     </div>
     <div className="div4">
      <h3>AVERAGE TEMP</h3>
      <p>{MarsData.radius}</p>
     </div>
    </div>  


    </>
  )
}
      
    </>
  );
};

export default Mars;
