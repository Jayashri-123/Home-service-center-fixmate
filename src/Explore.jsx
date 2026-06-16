import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


export const Explore = () => {
  const [current,update]=useState(" ");
  const [current2,update2]=useState(" ");
  const [current3,update3]=useState(" ");
  const [current4,update4]=useState(" ");
  const [current5,update5]=useState(" ");
  const [current6,update6]=useState(" ");

  const [current7,update7]=useState(" ");
  const [current8,update8]=useState(" ");
  const [current9,update9]=useState(" ");
  const [current10,update10]=useState(" ");
  const [current11,update11]=useState(" ");
  const [current12,update12]=useState(" ");

  const [current13,update13]=useState(" ");
  const [current14,update14]=useState(" ");
  const [current15,update15]=useState(" ");
  const [current16,update16]=useState(" ");
  const [current17,update17]=useState(" ");
  const [current18,update18]=useState(" ");

  const [current19,update19]=useState(" ");
  const [current20,update20]=useState(" ");
  const [current21,update21]=useState(" ");
  const [current22,update22]=useState(" ");
  const [current23,update23]=useState(" ");
  const [current24,update24]=useState(" ");

  const [current25,update25]=useState(" ");
  const [current26,update26]=useState(" ");
  const [current27,update27]=useState(" ");
  const [current28,update28]=useState(" ");

  const [current29,update29]=useState(" ");
  const [current30,update30]=useState(" ");


 const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <>
<div id="Plumbing">
<h4><strong>Plumbing Services</strong></h4>
<div className="container mt-3">
<div className="row g-3">
<div className="col-sm-6">
<div className="img-boxs d-flex">
<img src={"motor.jpeg"} alt=""></img>
<div className="ms-3">
    <h5 className="fw-bold">Motor Repair & Setup</h5>
    <p><strong>Duration:</strong> 1 Hour</p>
    <p><strong>Cost:</strong>₹1349</p>
    <p>Resolve motor issues quickly with trained and certified technicians.</p>
    <p style={{color:"red",fontWeight:"bold"}}>{current}</p>
    <button onClick={()=>update('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
</div>
</div>   
</div>
<div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"shower.jpeg"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Shower Installation</h5>
                    <p><strong>Duration:</strong> 45 mins</p>
                    <p><strong>Cost:</strong> ₹349</p>
                    <p>Leak fixing, shower head cleaning, and replacement for smooth water flow.</p> 
                    <p style={{color:"red",fontWeight:"bold"}}>{current2}</p>
    <button onClick={()=>update2('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
</div>
</div>
</div>
</div>
</div>
<br></br>
<div className="container mt-3">
<div className="row g-3">
<div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"irrigation.jpeg"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Irrigation setup</h5>
                    <p><strong>Duration:</strong>Baesd on sq ft</p>
                    <p><strong>Cost:</strong>500m-₹49</p>
                    <p> Professional installation of irrigation pipelines, 
                water flow control setup</p>
                <p style={{color:"red",fontWeight:"bold"}}>{current3}</p>
    <button onClick={()=>update3('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
                </div>
                </div>
                </div>
                <div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"heater.jpeg"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Heater Installation / Repair</h5>
                    <p><strong>Duration:</strong>40-60 mins</p>
                    <p><strong>Cost:</strong>₹700-₹1349</p>
                    <p> Safe installation and repair of all types of heaters with leak-free fittings</p>
                      <p style={{color:"red",fontWeight:"bold"}}>{current4}</p>
    <button onClick={()=>update4('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
                    </div>
            </div>
            </div>  
            </div>
            </div>
            <br></br>

<div className="container mt-3">
<div className="row g-3">
<div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"tap.jpeg"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Wash basin installation </h5>
                    <p><strong>Duration:</strong>1 Hour</p>
                    <p><strong>Cost:</strong>₹399</p>
                    <p> Professional installation of washbasin pipelines and 
                water flow control setup</p>
    <p style={{color:"red",fontWeight:"bold"}}>{current5}</p>
    <button onClick={()=>update5('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
                </div>
                </div>
                </div>
                <div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"watertank.jpeg"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Overhead tank Installation upto 1000L</h5>
                    <p><strong>Duration:</strong>1 Hour 30 mins</p>
                    <p><strong>Cost:</strong>₹999</p>
                    <p>Installation of plastic water tank or flat loft tanks</p>
                      <p style={{color:"red",fontWeight:"bold"}}>{current6}</p>
    <button onClick={()=>update6('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
                    </div>
            </div>
            </div>  
            </div>
            </div>
            <br></br>           
</div>         
{/* ................................................... */}


<div id="Electric">
<h4><strong>Electric Works</strong></h4>
<div className="container mt-3">
<div className="row g-3">
<div className="col-sm-6">
<div className="img-boxs d-flex">
<img src={"wiring.jpg"} alt=""></img>
<div className="ms-3">
    <h5 className="fw-bold">Electrical consultation</h5>
    <p><strong>Duration:</strong>Depends on work</p>
    <p><strong>Cost:</strong> ₹199</p>
    <p>Instant electrical expertise at your doorstep.</p>
    <p style={{color:"red",fontWeight:"bold"}}>{current7}</p>
    <button onClick={()=>update7('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
</div>
</div>   
</div>
        <div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"tv.jpg"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">TV Installation upto 55 inches</h5>
                    <p><strong>Duration:</strong> 1 Hour</p>
                    <p><strong>Cost:</strong> ₹499</p>
                    <p>Installation of 1 TV only with secure mounting and proper setup.</p> 
                    <p style={{color:"red",fontWeight:"bold"}}>{current8}</p>
    <button onClick={()=>update8('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
</div>
</div>
</div>

<br></br>
<div className="container mt-3">
<div className="row g-3">
<div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"ups.jpg"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Home & Office UPS Installation</h5>
                    <p><strong>Duration:</strong>1 Hour</p>
                    <p><strong>Cost:</strong>₹199</p>
                    <p> Home & Office UPS Installation
Expert setup for dependable power</p>
                <p style={{color:"red",fontWeight:"bold"}}>{current9}</p>
    <button onClick={()=>update9('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
                </div>
                </div>
                </div>
                <div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"bell.jpg"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Door bell installation</h5>
                    <p><strong>Duration:</strong>1 Hour</p>
                    <p><strong>Cost:</strong>₹199</p>
                    <p>Fast and neat door bell installation service,
Proper fitting with clear sound output.</p>
                      <p style={{color:"red",fontWeight:"bold"}}>{current10}</p>
    <button onClick={()=>update10('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
                    </div>
            </div>
            </div>  
            </div>
            </div>
            </div>
</div>
<br></br>


<div className="container mt-3">
<div className="row g-3">
<div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"fan.jpg"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Ceiling and wall fan Installation</h5>
                    <p><strong>Duration:</strong>30 mins</p>
                    <p><strong>Cost:</strong>₹149</p>
                    <p> Hassle-free fan installation by technicians,
Comfort and safety guaranteed.</p>
    <p style={{color:"red",fontWeight:"bold"}}>{current11}</p>
    <button onClick={()=>update11('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
                </div>
                </div>
                </div>
                <div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"ev.jpg"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">2 wheeler charger installation</h5>
                    <p><strong>Duration:</strong>2 Hours</p>
                    <p><strong>Cost:</strong>₹799</p>
                    <p>Installation of one charging station with switch box for safe and reliable charging.</p>
                      <p style={{color:"red",fontWeight:"bold"}}>{current12}</p>
    <button onClick={()=>update12('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
                    </div>
            </div>
            </div>  
            </div>
            </div>
        <br></br>
</div>
{/* Houseclean --------'-------*/}
<div id="Houseclean">
<h4><strong>House Cleaning</strong></h4>
<div className="container mt-3">
<div className="row g-3">
<div className="col-sm-6">
<div className="img-boxs d-flex">
<img src={"kictchen.jfif"} alt=""></img>
<div className="ms-3">
    <h5 className="fw-bold">Kitchen Cleaning</h5>
    <p><strong>Duration:</strong> 2 Hours</p>
    <p><strong>Cost:</strong> ₹699</p>
    <p>Spotless Kitchens,we Clean Deep, So You Cook with Confidence.</p>
    <p style={{color:"red",fontWeight:"bold"}}>{current13}</p>
    <button onClick={()=>update13('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
</div>
</div>   
</div>
        <div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"bathroom.jfif"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Bathroom Cleaning</h5>
                    <p><strong>Duration:</strong> 1 Hour</p>
                    <p><strong>Cost:</strong> ₹400-699 per bathroom</p>
                    <p>Deep cleaning for tiles, floors, and fittings,
Ensures hygienic and sanitary areas.</p> 
                    <p style={{color:"red",fontWeight:"bold"}}>{current14}</p>
    <button onClick={()=>update14('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
</div>
</div>
</div>

<br></br>
<div className="container mt-3">
<div className="row g-3">
<div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"bedroom.jfif"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Bedroom Cleaning</h5>
                    <p><strong>Duration:</strong>1 Hour</p>
                    <p><strong>Cost:</strong>₹999</p>
                    <p>Complete bedroom cleaning for a clean and healthy environment,
Includes surface cleaning.</p>
                <p style={{color:"red",fontWeight:"bold"}}>{current15}</p>
    <button onClick={()=>update15('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
                </div>
                </div>
                </div>
                <div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"carpet.jfif"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Carpet Cleaning</h5>
                    <p><strong>Duration:</strong>Minimum 1 Hour</p>
                    <p><strong>Cost:</strong>Small-size ₹399-599 ,Large-size ₹799-999</p>
                    <p>Deep cleaning to remove stains, and odors leaving your carpet fresh and hygienic.</p>
                      <p style={{color:"red",fontWeight:"bold"}}>{current16}</p>
    <button onClick={()=>update16('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
                    </div>
            </div>
            </div>  
            </div>
            </div>
            </div>
</div>
            <br></br>


<div className="container mt-3">
<div className="row g-3">
<div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"doorandwindow.jfif"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Door and Window Cleaning</h5>
                    <p><strong>Duration:</strong>Depends on doors and window</p>
                    <p><strong>Cost:</strong>Per Door ₹100-130,Per Window ₹60-100</p>
                    <p> We provide safe door and window cleaning,
Ensuring spotless glass and frames.</p>
    <p style={{color:"red",fontWeight:"bold"}}>{current17}</p>
    <button onClick={()=>update17('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
                </div>
                </div>
                </div>
                <div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"sofa.jfif"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Sofa Shampooing</h5>
                    <p><strong>Duration:</strong>2 Hours</p>
                    <p><strong>Cost:</strong>₹599-per seat</p>
                    <p>We offer safe cleaning for all types of sofas, handled by experienced professionals reliably.</p>
                      <p style={{color:"red",fontWeight:"bold"}}>{current18}</p>
    <button onClick={()=>update18('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
                    </div>
            </div>
            </div>  
            </div>
            </div>
        <br></br>
</div>
{/* Carpendary works      -----------------------------------------*/}
<div id="Carpendary">
<h4><strong>Carpendary Works</strong></h4>
<div className="container mt-3">
<div className="row g-3">
<div className="col-sm-6">
<div className="img-boxs d-flex">
<img src={"cupboard.jfif"} alt=""></img>
<div className="ms-3">
    <h5 className="fw-bold">Cupboard Installation</h5>
    <p><strong>Duration:</strong>Depends on work</p>
    <p><strong>Cost:</strong> ₹600/sqft</p>
    <p>Expert cupboard installation for a perfect fit, style, and lasting durability.</p>
    <p style={{color:"red",fontWeight:"bold"}}>{current19}</p>
    <button onClick={()=>update19('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
</div>
</div>   
</div>
        <div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"varnish.jfif"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Wood Polishing</h5>
                    <p><strong>Duration:</strong>Depends on work</p>
                    <p><strong>Cost:</strong> ₹299/sqft</p>
                    <p>Professional wood polishing to restore shine and enhance your furniture.</p> 
                    <p style={{color:"red",fontWeight:"bold"}}>{current20}</p>
    <button onClick={()=>update20('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
</div>
</div>
</div>

<br></br>
<div className="container mt-3">
<div className="row g-3">
<div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"woodinterior.jfif"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Wooden Interior works</h5>
                    <p><strong>Duration:</strong>Depends on works</p>
                    <p><strong>Cost:</strong>₹950/sqft</p>
                    <p>Expert craftsmanship in wooden interiors, including panels, furniture, and décors.</p>
                <p style={{color:"red",fontWeight:"bold"}}>{current21}</p>
    <button onClick={()=>update21('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
                </div>
                </div>
                </div>
                <div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"pvc.jfif"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Interior PVC wooden works</h5>
                    <p><strong>Duration:</strong>Depends on work</p>
                    <p><strong>Cost:</strong>₹500/sqft</p>
                    <p>We provide PVC solutions for interiors, including panels,ceilings,and partitions.</p>
                      <p style={{color:"red",fontWeight:"bold"}}>{current22}</p>
    <button onClick={()=>update22('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
                    </div>
            </div>
            </div>  
            </div>
            </div>
            </div>
</div>
            <br></br>


<div className="container mt-3">
<div className="row g-3">
<div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"doorandwindow.jfif"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Window & Door fitting</h5>
                    <p><strong>Duration:</strong>Depends on work</p>
                    <p><strong>Cost:</strong>Starts at ₹1500</p>
                    <p> Precise fitting for doors and windows, ensuring security, smooth operation, and lasting durability.</p>
    <p style={{color:"red",fontWeight:"bold"}}>{current23}</p>
    <button onClick={()=>update23('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
                </div>
                </div>
                </div>
                <div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"maintence.jfif"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Carpendary Maintenance Service</h5>
                    <p><strong>Duration:</strong>Depends on work</p>
                    <p><strong>Cost:</strong>1 Hour-₹500</p>
                    <p>Expert carpentry solutions for repairs and
quality workmanship for homes and offices.</p>
                      <p style={{color:"red",fontWeight:"bold"}}>{current24}</p>
    <button onClick={()=>update24('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
                    </div>
            </div>
            </div>  
            </div>
            </div>
        <br></br>
</div>
{/* garden cleaning */}
<div id="Garden">
<h4><strong>Garden Cleaning</strong></h4>
<div className="container mt-3">
<div className="row g-3">
<div className="col-sm-6">
<div className="img-boxs d-flex">
<img src={"grasstrim.jfif"} alt=""></img>
<div className="ms-3">
    <h5 className="fw-bold">Grass Cutting & Lawn Maintenance</h5>
    <p><strong>Duration:</strong>500sqft-30mins</p>
    <p><strong>Cost:</strong> 500/sqft-₹300</p>
    <p>Quick and precise mowing to keep your lawn tidy, lush, and well-groomed.</p>
    <p style={{color:"red",fontWeight:"bold"}}>{current25}</p>
    <button onClick={()=>update25('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
</div>
</div>   
</div>
        <div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"treecut.jfif"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Tree & Shrub Pruning</h5>
                    <p><strong>Duration:</strong>Small shrubs/trees:30–60 minutes</p>
                    <p><strong>Cost:</strong>Depends upon tress</p>
                    <p>Expert trimming and shaping to keep trees and shrubs healthy and visually appealing.</p> 
                    <p style={{color:"red",fontWeight:"bold"}}>{current26}</p>
    <button onClick={()=>update26('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
</div>
</div>
</div>

<br></br>
<div className="container mt-3">
<div className="row g-3">
<div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"sweep.jfif"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Sweeping & Garden Cleaning</h5>
                    <p><strong>Duration:</strong>Depends on area</p>
                    <p><strong>Cost:</strong>500/sqft-₹499</p>
                    <p>Quickly remove the dust, dirt, leaves, and debris to keep your garden clean and fresh.</p>
                <p style={{color:"red",fontWeight:"bold"}}>{current27}</p>
    <button onClick={()=>update27('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
                </div>
                </div>
                </div>
                <div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"clean.jfif"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Pathway & Driveway Cleaning</h5>
                    <p><strong>Duration:</strong>500/sqft-30-40mins</p>
                    <p><strong>Cost:</strong>500/sqft-₹300</p>
                    <p>Thorough washing and scrubbing to remove dirt,stains and debris from pathways.</p>
                      <p style={{color:"red",fontWeight:"bold"}}>{current28}</p>
    <button onClick={()=>update28('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
                    </div>
            </div>
            </div>  
            </div>
            </div>
            </div>
</div>
     <br></br>
</div>
{/* ---------Suveilence solution */}
<div id="S solution">
<h4><strong>Serveillance Solutions</strong></h4>
<div className="container mt-3">
<div className="row g-3">
<div className="col-sm-6">
<div className="img-boxs d-flex">
<img src={"camerainstall.jfif"} alt=""></img>
<div className="ms-3">
    <h5 className="fw-bold">CCTV Camera Installation(Indoor & Outdoor)</h5>
    <p><strong>Duration:</strong>30–60 mins</p>
    <p><strong>Cost:</strong>₹800–₹1,500 per camera</p>
    <p>Professional installation of indoor & outdoor cameras for complete security coverage.</p>
    <p style={{color:"red",fontWeight:"bold"}}>{current25}</p>
    <button onClick={()=>update25('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
</div>
</div>   
</div>
        <div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"ipcamera.jfif"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Analog & IP Camera Setup</h5>
                    <p><strong>Duration:</strong>30–60 minutes</p>
                    <p><strong>Cost:</strong>₹1,000–₹2,000 per camera</p>
                    <p>Complete setup and configuration of analog and IP cameras for clear and stable surveillance efficiently.</p> 
                    <p style={{color:"red",fontWeight:"bold"}}>{current26}</p>
    <button onClick={()=>update26('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
</div>
</div>  
</div>

<br></br>
<div className="container mt-3">
<div className="row g-3">
<div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"cctvrepair.jfif"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Camera Repair & Maintenance –</h5>
                    <p><strong>Duration:</strong>30–90 minutes (depending on issue)</p>
                    <p><strong>Cost:</strong>₹500–₹2,000 (spare parts extra, if required)</p>
                    <p>Troubleshooting and repair of CCTV cameras to restore clear and continuous monitoring.</p>
                <p style={{color:"red",fontWeight:"bold"}}>{current27}</p>
    <button onClick={()=>update27('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
                </div>
                </div>
                </div>
                <div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"motioncamera.jfif"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Motion Detection Camera</h5>
                    <p><strong>Duration:</strong>45–90 minutes per camera</p>
                    <p><strong>Cost:</strong>₹2,200–₹3,500 per camera(spare parts extra, if required)</p>
                    <p>Our smart cameras notice movement and start recording automatically—keeping your home safe, dependable, fast, and precise.</p>
                      <p style={{color:"red",fontWeight:"bold"}}>{current28}</p>
    <button onClick={()=>update28('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
                    </div>
            </div>
            </div>  
            </div>
            </div>
            </div>
</div>
     <br></br>
</div>
{/* ac service*/}
<div id="ac">
<h4><strong>AC Maintenance</strong></h4>
<div className="container mt-3">
<div className="row g-3">
<div className="col-sm-6">
<div className="img-boxs d-flex">
<img src={"filter.jfif"} alt=""></img>
<div className="ms-3">
    <h5 className="fw-bold">Cleaning AC Filters</h5>
    <p><strong>Duration:</strong>15–30 mins</p>
    <p><strong>Cost:</strong>₹150–₹300</p>
    <p>Removes dust and improves airflow for efficient cooling,quick and essential for clean, fresh air.</p>
    <p style={{color:"red",fontWeight:"bold"}}>{current25}</p>
    <button onClick={()=>update25('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
</div>
</div>   
</div>
        <div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"coilclean.jfif"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Coil Cleaning (Evaporator & Condenser)</h5>
                    <p><strong>Duration:</strong>30–60 minutes</p>
                    <p><strong>Cost:</strong>₹400–₹800</p>
                    <p>Cleans evaporator and condenser coils to enhance AC performance and cooling efficiency.</p> 
                    <p style={{color:"red",fontWeight:"bold"}}>{current26}</p>
    <button onClick={()=>update26('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
</div>
</div>  
</div>

<br></br>
<div className="container mt-3">
<div className="row g-3">
<div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"ac drain.jfif"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Drain Pipe Cleaning & Unclogging</h5>
                    <p><strong>Duration:</strong>20–40 mins</p>
                    <p><strong>Cost:</strong>₹200–₹500</p>
                    <p>Clears blocked drain pipes to prevent water leakage and mold formation.</p>
                <p style={{color:"red",fontWeight:"bold"}}>{current27}</p>
    <button onClick={()=>update27('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
                </div>
                </div>
                </div>
                <div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"ac gas fill.jfif"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Gas Refilling / Top-up</h5>
                    <p><strong>Duration:</strong>30–60 mins</p>
                    <p><strong>Cost:</strong>₹800–₹2,000 (depends on AC type)</p>
                    <p>We refill your AC refrigerant accurately,
Feel the difference with efficient, reliable cooling all year.</p>
                      <p style={{color:"red",fontWeight:"bold"}}>{current28}</p>
    <button onClick={()=>update28('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
                    </div>
            </div>
            </div>  
            </div>
            </div>
            </div>
</div>
     <br></br>
</div>
{/* paint---------------------------------------- */}
<div id="paint">
<h4><strong>Painting Works</strong></h4>
<div className="container mt-3">
<div className="row g-3">
<div className="col-sm-6">
<div className="img-boxs d-flex">
<img src={"interior.jfif"} alt=""></img>
<div className="ms-3">
    <h5 className="fw-bold">Interior Wall Painting</h5>
    <p><strong>Duration:</strong>1–2 days (per room)</p>
    <p><strong>Cost:</strong>₹10–₹25 per sq.ft</p>
    <p>Smooth and professional interior painting to refresh and beautify your living spaces.</p>
    <p style={{color:"red",fontWeight:"bold"}}>{current25}</p>
    <button onClick={()=>update25('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
</div>
</div>   
</div>
        <div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"exterior.jfif"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Exterior Wall Painting</h5>
                    <p><strong>Duration:</strong>3–7 days</p>
                    <p><strong>Cost:</strong>₹15–₹35 per sq.ft</p>
                    <p>Weather-resistant exterior painting to protect and enhance your home’s outer walls.</p> 
                    <p style={{color:"red",fontWeight:"bold"}}>{current26}</p>
    <button onClick={()=>update26('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
</div>
</div>  
</div>

<br></br>
<div className="container mt-3">
<div className="row g-3">
<div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"patty_paint.jfif"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Putty & Primer Application</h5>
                    <p><strong>Duration:</strong>1–2 days</p>
                    <p><strong>Cost:</strong>₹5–₹10 per sq.ft</p>
                    <p>Surface preparation with wall putty and primer for a smooth and even paint finish thoroughly</p>
                <p style={{color:"red",fontWeight:"bold"}}>{current27}</p>
    <button onClick={()=>update27('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
                </div>
                </div>
                </div>
                <div className="col-sm-6">
            <div className="img-boxs d-flex">  
                <img src={"crack_fix.jfif"} alt=""></img>
                <div className="ms-3">
                    <h5 className="fw-bold">Wall Crack Filling & Repair</h5>
                    <p><strong>Duration:</strong>2–6 hours</p>
                    <p><strong>Cost:</strong>₹500–₹2,000 (depending on damage)</p>
                    <p>Repairs wall cracks and damages before painting,
Prevents further damage.</p>
                      <p style={{color:"red",fontWeight:"bold"}}>{current28}</p>
    <button onClick={()=>update28('Successfully added')} style={{backgroundColor:"#22C55E"}}>Add to Cart</button>
                    </div>
            </div>
            </div>  
            </div>
            </div>
            </div>
</div>
     <br></br>
</div>


</>
)
}