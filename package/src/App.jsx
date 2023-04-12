import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import AddClient from './pages/AddClient';
import Addleads from './pages/Addleads';
import Mylead from './pages/Mylead';
import Myclient from './pages/Myclients';
import Transferlead from './pages/Transferlead';
import Allemployees from './pages/Allemployees';
import Tableclient from './pages/Tableclient';
import Myleadform from './components/Myleadform';
import Leadform from './pages/Leadform';
import Services from './pages/Services';
import Login from './pages/Login';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); 
  // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/addclient" element={<AddClient />} />
        <Route exact path="/addlead" element={<Addleads/>} />
        <Route exact path="/mylead" element={<Mylead />} />
        <Route exact path="/myclient" element={<Myclient />} />
        <Route exact path="/transferlead" element={<Transferlead />} />
        <Route exact path="/allemployee" element={<Allemployees />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/leadform" element={<Leadform />} />
        <Route exact path="/login" element={<Login />} />
        {/* <Route exact path="/leadform" element={<Myleadform/>} /> */}
      </Routes>
    </>
  );
}

export default App;
