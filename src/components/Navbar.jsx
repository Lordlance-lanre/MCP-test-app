import React from 'react';
import { SearchIcon, BellIcon, ChevronDownIcon, MenuIcon } from '../assets/icons';
import logo from '../assets/logo.svg';
import './Navbar.css';

export default function Navbar({ onToggleSidebar, onLogout }) {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <button className="mobile-menu-btn" onClick={onToggleSidebar} aria-label="Toggle navigation">
          <MenuIcon size={24} color="#213F7D" />
        </button>
        <div className="navbar-logo">
          <img src={logo} alt="Lendsqr Logo" />
        </div>
      </div>

      <div className="navbar-search">
        <div className="search-input-wrapper">
          <input 
            type="text" 
            placeholder="Search for anything" 
            className="search-input"
          />
          <button className="search-btn" aria-label="Search">
            <SearchIcon size={14} color="#FFFFFF" />
          </button>
        </div>
      </div>

      <div className="navbar-right">
        <a href="#docs" className="navbar-link">Docs</a>
        
        <button className="navbar-icon-btn" aria-label="Notifications">
          <BellIcon size={20} color="#213F7D" />
        </button>

        <div className="navbar-profile">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" 
            alt="Adedeji" 
            className="profile-avatar"
          />
          <span className="profile-name">Adedeji</span>
          <ChevronDownIcon size={12} color="#213F7D" />

          {/* Quick profile drop menu on hover/click */}
          <div className="profile-dropdown">
            <button onClick={onLogout} className="dropdown-logout-btn">Log out</button>
          </div>
        </div>
      </div>
    </header>
  );
}
