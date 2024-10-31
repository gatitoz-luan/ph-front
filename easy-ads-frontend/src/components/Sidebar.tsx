import React from 'react';
import { FaFacebook, FaGoogle, FaTiktok, FaBars } from 'react-icons/fa';
import { RiDashboardLine, RiMoneyDollarCircleLine, RiFocusLine } from 'react-icons/ri';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'expanded' : 'collapsed'}`}>
      {/* Botão de Colapso */}
      <div className="sidebar-header">
        <button
          onClick={toggleSidebar}
          className="toggle-btn"
        >
          <FaBars />
        </button>
      </div>

      {/* Seção de Canais */}
      <div className="sidebar-section">
        {isOpen && <p className="section-title">Canais</p>}
        <div className={`channel-icons ${isOpen ? 'horizontal' : 'vertical'}`}>
          <a href="#" className="nav-link py-3 " title="Facebook">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="nav-link py-3 " title="Google">
            <FaGoogle size={24} />
          </a>
          <a href="#" className="nav-link py-3 " title="TikTok">
            <FaTiktok size={24} />
          </a>
        </div>
      </div>

      {/* Seção do Menu */}
      <ul className="menu-list">
        {isOpen && <p className="section-title">Menu</p>}
        <li className="nav-item">
          <a href="#" className="nav-link py-3" title="Painel">
            <RiDashboardLine className="sidebar-icon" />
            {isOpen && <span>Painel</span>}
          </a>
        </li>
        <li>
          <a href="#" className="nav-link py-3" title="Financeiro">
            <RiMoneyDollarCircleLine className="sidebar-icon" />
            {isOpen && <span>Financeiro</span>}
          </a>
        </li>
        <li>
          <a href="#" className="nav-link py-3" title="Rastreamento">
            <RiFocusLine className="sidebar-icon" />
            {isOpen && <span>Rastreamento</span>}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
