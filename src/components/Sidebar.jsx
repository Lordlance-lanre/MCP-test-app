import React from 'react';
import {
  BriefcaseIcon,
  ChevronDownIcon,
  HomeIcon,
  UsersGroupIcon,
  ShieldUserIcon,
  MoneySackIcon,
  HandshakeIcon,
  PiggyBankIcon,
  HandCoinsIcon,
  UserCheckIcon,
  KarmaIcon,
  BankIcon,
  CoinsIcon,
  SlidersIcon,
  BadgePercentIcon,
  ClipboardListIcon,
  ChartBarIcon,
  SignOutIcon,
  CloseIcon,
} from '../assets/icons';
import './Sidebar.css';

export default function Sidebar({ isOpen, onClose, activeNav = 'users', onSelectNav, onLogout }) {
  const customerNav = [
    { id: 'users', label: 'Users', icon: UsersGroupIcon },
    { id: 'guarantors', label: 'Guarantors', icon: ShieldUserIcon },
    { id: 'loans', label: 'Loans', icon: MoneySackIcon },
    { id: 'decision-models', label: 'Decision Models', icon: HandshakeIcon },
    { id: 'savings', label: 'Savings', icon: PiggyBankIcon },
    { id: 'loan-requests', label: 'Loan Requests', icon: HandCoinsIcon },
    { id: 'whitelist', label: 'Whitelist', icon: UserCheckIcon },
    { id: 'karma', label: 'Karma', icon: KarmaIcon },
  ];

  const businessNav = [
    { id: 'organization', label: 'Organization', icon: BriefcaseIcon },
    { id: 'loan-products', label: 'Loan Products', icon: HandCoinsIcon },
    { id: 'savings-products', label: 'Savings Products', icon: BankIcon },
    { id: 'fees-charges', label: 'Fees and Charges', icon: CoinsIcon },
    { id: 'transactions', label: 'Transactions', icon: MoneySackIcon },
    { id: 'services', label: 'Services', icon: SlidersIcon },
    { id: 'service-account', label: 'Service Account', icon: ShieldUserIcon },
    { id: 'settlements', label: 'Settlements', icon: ClipboardListIcon },
    { id: 'reports', label: 'Reports', icon: ChartBarIcon },
  ];

  const settingsNav = [
    { id: 'preferences', label: 'Preferences', icon: SlidersIcon },
    { id: 'fees-pricing', label: 'Fees and Pricing', icon: BadgePercentIcon },
    { id: 'audit-logs', label: 'Audit Logs', icon: ClipboardListIcon },
    { id: 'systems-messages', label: 'Systems Messages', icon: SlidersIcon },
  ];

  const handleNavClick = (id) => {
    if (onSelectNav) onSelectNav(id);
    if (window.innerWidth <= 992 && onClose) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && <div className="sidebar-backdrop" onClick={onClose} />}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-mobile-close">
          <span>Navigation Menu</span>
          <button onClick={onClose} aria-label="Close sidebar">
            <CloseIcon size={20} color="#213F7D" />
          </button>
        </div>

        {/* Switch Organization Dropdown Button */}
        <div className="sidebar-switch-org">
          <BriefcaseIcon size={16} color="#213F7D" />
          <span className="org-name">Switch Organization</span>
          <ChevronDownIcon size={12} color="#213F7D" />
        </div>

        {/* Dashboard link */}
        <div 
          className={`sidebar-item ${activeNav === 'dashboard' ? 'active' : ''}`}
          onClick={() => handleNavClick('dashboard')}
        >
          <HomeIcon size={16} color={activeNav === 'dashboard' ? '#213F7D' : '#545F7D'} />
          <span>Dashboard</span>
        </div>

        {/* Section: CUSTOMERS */}
        <div className="sidebar-section">
          <div className="sidebar-section-title">CUSTOMERS</div>
          {customerNav.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;
            return (
              <div
                key={item.id}
                className={`sidebar-item ${isActive ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                <Icon size={16} color={isActive ? '#213F7D' : '#545F7D'} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* Section: BUSINESSES */}
        <div className="sidebar-section">
          <div className="sidebar-section-title">BUSINESSES</div>
          {businessNav.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;
            return (
              <div
                key={item.id}
                className={`sidebar-item ${isActive ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                <Icon size={16} color={isActive ? '#213F7D' : '#545F7D'} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* Section: SETTINGS */}
        <div className="sidebar-section">
          <div className="sidebar-section-title">SETTINGS</div>
          {settingsNav.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;
            return (
              <div
                key={item.id}
                className={`sidebar-item ${isActive ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                <Icon size={16} color={isActive ? '#213F7D' : '#545F7D'} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>

        <div className="sidebar-divider" />

        {/* Logout */}
        <div className="sidebar-item logout" onClick={onLogout}>
          <SignOutIcon size={16} color="#213F7D" />
          <span>Logout</span>
        </div>

        <div className="sidebar-version">v1.2.0</div>
      </aside>
    </>
  );
}
