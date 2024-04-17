import { useState } from 'react';
import { PlanetData } from '../types/common'; 
import data from "../data.json"
import Header from"../components/Header"
import venus from "../assets/planet-jupiter.svg"
import venusInternal from "../assets/planet-jupiter-internal.svg"
import venusGeology from "../assets/geology-jupiter.png"



interface JUPITERData {
  data: PlanetData[];
}

const JUPITERData = data.find((planet) => planet.name === "Venus");

const Venus: React.FC<JUPITERData > = () => {



  const [Button, SetButton] = useState("overView")

  if (!JUPITERData) {
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
<img src={venus} alt="" className='venus' />
       </div>
<div className="info">
<h1>{JUPITERData.name}</h1>
<p>{JUPITERData.overview.content}</p>
<a href={JUPITERData.overview.source}> <span>Source:</span> {JUPITERData.overview.source}</a>
</div>
     </div>


     <div className="mainInfoI">
     <div className="div1">
      <h3>ROTATION TIME</h3>
      <p>{JUPITERData.rotation}</p>
     </div>
     <div className="div2">
      <h3>REVOLUTION TIME</h3>
      <p>{JUPITERData.revolution}</p>
     </div>
     <div className="div3">
      <h3>RADIUS</h3>
      <p>{JUPITERData.radius}</p>
     </div>
     <div className="div4">
      <h3>AVERAGE TEMP</h3>
      <p>{JUPITERData.radius}</p>
     </div>
    </div> 
    </>
  ) : Button === "internal" ? (
    <>
      <div className="internal">
       <div className="img">
       <img src= {venusInternal } alt="" className='venus' />
       </div>
<div className="info">
<h1>{JUPITERData.name}</h1>
<p>{JUPITERData.structure.content}</p>
<a href={JUPITERData.overview.source}> <span>Source:</span> {JUPITERData.overview.source}</a>
</div>
     </div>

     <div className="mainInfoI">
     <div className="div1">
      <h3>ROTATION TIME</h3>
      <p>{JUPITERData.rotation}</p>
     </div>
     <div className="div2">
      <h3>REVOLUTION TIME</h3>
      <p>{JUPITERData.revolution}</p>
     </div>
     <div className="div3">
      <h3>RADIUS</h3>
      <p>{JUPITERData.radius}</p>
     </div>
     <div className="div4">
      <h3>AVERAGE TEMP</h3>
      <p>{JUPITERData.radius}</p>
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
<div className="infoVenus">
<h1>{JUPITERData.name}</h1>
<p>{JUPITERData.geology.content}</p>
<a href={JUPITERData.overview.source}> <span>Source:</span> {JUPITERData.overview.source}</a>
</div>
     </div>

  <div className="mainInfo">
     <div className="div1">
      <h3>ROTATION TIME</h3>
      <p>{JUPITERData.rotation}</p>
     </div>
     <div className="div2">
      <h3>REVOLUTION TIME</h3>
      <p>{JUPITERData.revolution}</p>
     </div>
     <div className="div3">
      <h3>RADIUS</h3>
      <p>{JUPITERData.radius}</p>
     </div>
     <div className="div4">
      <h3>AVERAGE TEMP</h3>
      <p>{JUPITERData.radius}</p>
     </div>
    </div>  


    </>
  )
}
      
    </>
  );
};
     


export default Venus;
