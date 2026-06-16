import React from 'react'
import {Home} from './Home';
import {Service} from './Service';
import {About} from './About';
import { Link } from 'react-router-dom';
import { JoinUs } from './JoinUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact } from './Contact';

const Navb = () => {
  return (
    <>
    <div className="top">      
        <ul> 
          <h4 style={{color:"blue"}}>🛠️FixMate</h4> 
          </ul>
             
          <div className='topnav'>
            <ul>
<li><Link to='/Home' style={{ textDecoration: "none", color: "blue" }}>Home</Link></li>
<li><Link to='/Service' style={{ textDecoration: "none", color: "blue" }}>Service</Link></li>
<li><Link to='/About' style={{ textDecoration: "none", color: "blue" }}>About</Link></li>
<li><Link to='/JoinUs' style={{ textDecoration: "none", color: "blue" }}>JoinUs</Link></li>

           
            </ul>
      </div>
      </div>
      <div>
       
      </div>

    </>
  );  
}
export default Navb;