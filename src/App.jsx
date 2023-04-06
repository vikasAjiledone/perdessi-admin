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

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

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
      </Routes>
    </>
  );
}

export default App;
