// App.tsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './App.css';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  const toggleSidebar = (): void => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app-container">
      <Header toggleSidebar={toggleSidebar} />
      <div className="app-body">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <main className={`main-content ${sidebarOpen ? 'expanded' : 'collapsed'}`}>
          <Outlet /> {/* Outlet onde o conteúdo da página será renderizado */}
        </main>
      </div>
    </div>
  );
};

export default App;
