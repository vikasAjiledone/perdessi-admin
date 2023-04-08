import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

const Mylead = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">

    {/* Sidebar */}
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

    {/* Content area */}
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

      {/*  Site header */}
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
    </div>
  </div>
  )
}

export default Mylead