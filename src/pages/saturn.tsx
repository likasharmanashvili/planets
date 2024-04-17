import { useState } from 'react';
import { PlanetData } from '../types/common'; 
import data from "../data.json"
import Header from"../components/Header"
import saturn from "../assets/planet-saturn.svg"
import saturnInternal from "../assets/planet-saturn-internal.svg"
import saturnGeology from "../assets/geology-saturn.png"



interface saturnData {
  data: PlanetData[];
}

const SaturnData = data.find((planet) => planet.name === "Saturn");

const Saturn: React.FC<saturnData > = () => {



  const [Button, SetButton] = useState("overView")

  if (!SaturnData ) {
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
     <div className="external">
       <div className="img">
<img src={saturn } alt=""  className='saturnImg'/>
       </div>
<div className="infoStaurn">
<h1>{ SaturnData.name}</h1>
<p>{ SaturnData .overview.content}</p>
<a href={ SaturnData .overview.source}> <span>Source:</span> {SaturnData .overview.source}</a>
</div>
     </div>


     <div className="mainInfoI">
     <div className="div1">
      <h3>ROTATION TIME</h3>
      <p>{ SaturnData .rotation}</p>
     </div>
     <div className="div2">
      <h3>REVOLUTION TIME</h3>
      <p>{SaturnData .revolution}</p>
     </div>
     <div className="div3">
      <h3>RADIUS</h3>
      <p>{SaturnData.radius}</p>
     </div>
     <div className="div4">
      <h3>AVERAGE TEMP</h3>
      <p>{ SaturnData .radius}</p>
     </div>
    </div> 
    </>
  ) : Button === "internal" ? (
    <>
      <div className="internal">
       <div className="img">
       <img src= {saturnInternal} alt="" className='saturnImg' />
       </div>
<div className="infoStaurn">
<h1>{SaturnData .name}</h1>
<p>{ SaturnData .structure.content}</p>
<a href={ SaturnData.overview.source}> <span>Source:</span> { SaturnData .overview.source}</a>
</div>
     </div>

     <div className="mainInfoI">
     <div className="div1">
      <h3>ROTATION TIME</h3>
      <p>{ SaturnData.rotation}</p>
     </div>
     <div className="div2">
      <h3>REVOLUTION TIME</h3>
      <p>{ SaturnData .revolution}</p>
     </div>
     <div className="div3">
      <h3>RADIUS</h3>
      <p>{ SaturnData .radius}</p>
     </div>
     <div className="div4">
      <h3>AVERAGE TEMP</h3>
      <p>{ SaturnData.radius}</p>
     </div>
    </div> 
    </>
  ) : (
    <>
 <div className="geology">
       <div className="img">
    <img src={saturn } alt="" className='geologyImg' />
    <img src={saturnGeology} alt=""  className='geologyS'/>
       </div>
<div className="infoStaurnG">
<h1>{ SaturnData .name}</h1>
<p>{ SaturnData.geology.content}</p>
<a href={ SaturnData .overview.source}> <span>Source:</span> { SaturnData.overview.source}</a>
</div>
     </div>

  <div className="mainInfo">
     <div className="div1">
      <h3>ROTATION TIME</h3>
      <p>{SaturnData.rotation}</p>
     </div>
     <div className="div2">
      <h3>REVOLUTION TIME</h3>
      <p>{ SaturnData .revolution}</p>
     </div>
     <div className="div3">
      <h3>RADIUS</h3>
      <p>{SaturnData .radius}</p>
     </div>
     <div className="div4">
      <h3>AVERAGE TEMP</h3>
      <p>{ SaturnData.radius}</p>
     </div>
    </div>  


    </>
  )
}
      
    </>
  );
};
     


export default Saturn;
