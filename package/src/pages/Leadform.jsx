import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Myleadform from '../components/Myleadform';

const Leadform = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
      <div className="flex h-screen overflow-hidden">
  
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
  
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
  
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <Myleadform/>
      </div>
    </div>
    )
}

export default Leadform