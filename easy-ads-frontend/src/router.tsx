import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CampaignCreation from './pages/CampaignCreation';
import CreativeManagement from './pages/CreativeManagement';
import CreativeRequest from './pages/CreativeRequest';
import NotFound from './pages/NotFound';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} /> {/* Página inicial */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="campaign-creation" element={<CampaignCreation />} />
          <Route path="creative-management" element={<CreativeManagement />} />
          <Route path="creative-request" element={<CreativeRequest />} />
          <Route path="*" element={<NotFound />} /> {/* Qualquer rota inválida */}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
