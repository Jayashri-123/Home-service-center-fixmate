import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Explore } from './Explore';
import { Link } from 'react-router-dom'; 
export const Service = () => {
  
  return (
    <>
    <center>
      <br></br>
    <div className="Container">
      <center><h3 style={{fontFamily:"sans-serif",fontWeight:"bold"}}>Explore Our Services</h3></center><br></br>
      <div className="row">
      <div className="col-sm-3 g-2">
        <div className='img-box'>
          <img src={'plumb.jpeg'}>
          </img>
          <h5 style={{fontWeight:"bold"}}>Plumbing service</h5>
          <span>Fix leaks with Plumbing professionals</span><br></br>
          <button type="button" style={{backgroundColor:"#22C55E"}}>
            <Link to='/Explore'  
            state={{scrollTo :"Plumbing"}}
            style={{textDecoration:"none",color:"white"}}>Explore</Link>
          </button>
        </div>
      </div>
{/* ............................. */}
      <div className="col-sm-3 g-2">
        <div className='img-box'>
          <img src={'houseclean.jpeg'}>
          </img>
          <h5 style={{fontWeight:"bold"}}>House Cleaning</h5>
          <span>Make your home shine with specialists</span><br></br>
          <button type="button" style={{background:"#22C55E"}}>
          <Link to='/Explore' state={{scrollTo:"Houseclean"}}
           style={{textDecoration:"none",color:"white"}}>Explore</Link>
          </button>
        </div>
      </div>
{/* ............................. */}
      <div className="col-sm-3 g-2">
        <div className='img-box'>
          <img src={'electric.jpeg'}>
          </img>
          <h5 style={{fontWeight:"bold"}}>Electrical Works</h5>
          <span>Get professional for safe electric work</span><br></br>
          <Link to="/Explore"
  state={{ scrollTo: "Electric" }}
  style={{ textDecoration: "none" }}>
  <button style={{ background: "#22C55E" }}>Explore</button>
</Link>
        </div>
      </div>
     {/* ............................................... */}
      <div className="col-sm-3 g-2">
        <div className='img-box'>
          <img src={'carpender.jpeg'}>
          </img>
          <h5 style={{fontWeight:"bold"}}>Carpentry Works</h5>
          <span>To get quality woodwork by carpenders</span><br></br>
          <Link to="/Explore"
  state={{ scrollTo: "Carpendary" }}
  style={{ textDecoration: "none" }}>
  <button style={{ background: "#22C55E" }}>Explore</button>
</Link>
        </div>
      </div>
       </div>
       {/* .................. */}
      <div className='row'>
      <div className="col-sm-3 g-2">
        <div className='img-box'>
          <img src={'gardenclean.jpeg'}>
          </img>
          <h5 style={{fontWeight:"bold"}}>Garden cleaning</h5>
          <span>Complete Garden care for a fresh look</span><br></br>
          <button type="button" style={{background:"#22C55E"}}>
          <Link to='/Explore' style={{textDecoration:"none",color:"white"}}>Explore</Link>
          </button>
        </div>
      </div>
      {/*  */}
      <div className="col-sm-3 g-2">
        <div className='img-box'>
          <img src={'surveilence.jpeg'}>
          </img>
          <h5 style={{fontWeight:"bold"}}>Serveillance Solutions</h5>
          <span>Protect your space with security experts</span><br></br>
          <Link to="/Explore"
          state={{ scrollTo: "S solution" }}
          style={{ textDecoration: "none" }}>
          <button style={{ background: "#22C55E" }}>Explore</button>
          </Link>
        </div>
      </div>
      <div className="col-sm-3 g-2">
        <div className='img-box'>
          <img src={'ac.jpeg'}>
          </img>
          <h5 style={{fontWeight:"bold"}}>AC Maintenance</h5>
          <span>Perfect cooling service by trained technicians</span><br></br>
          <Link to="/Explore"
          state={{ scrollTo: "ac" }}
          style={{ textDecoration: "none" }}>
          <button style={{ background: "#22C55E" }}>Explore</button>
          </Link>
        </div>
      </div>
      <div className="col-sm-3 g-2">
        <div className='img-box'>
          <img src={'paint.jpeg'}>
          </img>
          <h5 style={{fontWeight:"bold"}}>Painting Works</h5>
          <span>Archieve a flawless finish with experts painting</span><br></br>
         <Link to="/Explore"
          state={{ scrollTo: "paint" }}
          style={{ textDecoration: "none" }}>
          <button style={{ background: "#22C55E" }}>Explore</button>
          </Link>
        </div>
      </div>
    </div>
    </div>
    </center>
    </>
  )
}
