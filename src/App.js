import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navb from './Navb';

import { Home } from './Home';
import { About } from './About';
import { Service } from './Service';
import { JoinUs } from './JoinUs';
import { Explore } from './Explore';
import { Contact } from './Contact';
import { Login } from './Login';

function App() {
  return (
    <>
      <Navb />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/JoinUs" element={<JoinUs />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
