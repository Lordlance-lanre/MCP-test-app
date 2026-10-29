import React from 'react';

export const FilterIcon = ({ className = '', size = 16, color = '#545F7D' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M2 3.5H14M4.5 8H11.5M7 12.5H9" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const MoreIcon = ({ className = '', size = 16, color = '#545F7D' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="3" r="1.5" fill={color} />
    <circle cx="8" cy="8" r="1.5" fill={color} />
    <circle cx="8" cy="13" r="1.5" fill={color} />
  </svg>
);

export const SearchIcon = ({ className = '', size = 16, color = '#FFFFFF' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="7" cy="7" r="5" stroke={color} strokeWidth="1.8" />
    <path d="M10.8 10.8L14.5 14.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const BellIcon = ({ className = '', size = 20, color = '#213F7D' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8A6 6 0 0 0 6 8C6 15 3 17 3 17H21S18 15 18 8Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.73 21C13.55 21.3 13.3 21.55 13 21.72C12.7 21.9 12.35 22 12 22C11.65 22 11.3 21.9 11 21.72C10.7 21.55 10.45 21.3 10.27 21" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChevronDownIcon = ({ className = '', size = 14, color = '#213F7D' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9L12 15L18 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const EyeIcon = ({ className = '', size = 16, color = '#545F7D' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const BlacklistUserIcon = ({ className = '', size = 16, color = '#E4033B' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M16 21V19C16 16.7909 14.2091 15 12 15H5C2.79086 15 1 16.7909 1 19V21" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="8.5" cy="7" r="4" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="17" y1="8" x2="23" y2="14" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="23" y1="8" x2="17" y2="14" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export const ActivateUserIcon = ({ className = '', size = 16, color = '#39CD62' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M16 21V19C16 16.7909 14.2091 15 12 15H5C2.79086 15 1 16.7909 1 19V21" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="8.5" cy="7" r="4" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="17 11 19 13 23 9" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const BackArrowIcon = ({ className = '', size = 20, color = '#545F7D' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <line x1="19" y1="12" x2="5" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="12 19 5 12 12 5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const StarIcon = ({ filled = false, size = 16, color = '#E9B200' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? color : "none"} stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const CalendarIcon = ({ className = '', size = 16, color = '#545F7D' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke={color} strokeWidth="1.8"/>
    <line x1="16" y1="2" x2="16" y2="6" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="8" y1="2" x2="8" y2="6" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="3" y1="10" x2="21" y2="10" stroke={color} strokeWidth="1.8"/>
  </svg>
);

/* Sidebar Nav Icons */
export const BriefcaseIcon = ({ size = 16, color = '#213F7D' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);

export const HomeIcon = ({ size = 16, color = '#213F7D' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

export const UsersGroupIcon = ({ size = 16, color = '#213F7D' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

export const ShieldUserIcon = ({ size = 16, color = '#213F7D' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

export const MoneySackIcon = ({ size = 16, color = '#213F7D' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="20" height="12" rx="2"/>
    <circle cx="12" cy="12" r="2"/>
    <path d="M6 12h.01M18 12h.01"/>
  </svg>
);

export const HandshakeIcon = ({ size = 16, color = '#213F7D' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 17l-5-5a3.5 3.5 0 0 1 0-5l1-1a3.5 3.5 0 0 1 5 0l1 1"/>
    <path d="M13 7l5 5a3.5 3.5 0 0 1 0 5l-1 1a3.5 3.5 0 0 1-5 0l-1-1"/>
  </svg>
);

export const PiggyBankIcon = ({ size = 16, color = '#213F7D' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8.7 3.3 2 4.3V19h4v-2h4v2h4v-4.5c1.4-1.3 2-3 2-5 0-2.5-1-4.5-2-4.5z"/>
    <circle cx="9" cy="11" r="1"/>
  </svg>
);

export const HandCoinsIcon = ({ size = 16, color = '#213F7D' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/>
    <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/>
    <circle cx="18" cy="6" r="3"/>
  </svg>
);

export const UserCheckIcon = ({ size = 16, color = '#213F7D' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="8.5" cy="7" r="4"/>
    <polyline points="17 11 19 13 23 9"/>
  </svg>
);

export const KarmaIcon = ({ size = 16, color = '#213F7D' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
  </svg>
);

export const BankIcon = ({ size = 16, color = '#213F7D' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="21" x2="21" y2="21"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
    <polyline points="5 6 12 3 19 6"/>
    <line x1="4" y1="10" x2="4" y2="21"/>
    <line x1="20" y1="10" x2="20" y2="21"/>
    <line x1="8" y1="14" x2="8" y2="17"/>
    <line x1="12" y1="14" x2="12" y2="17"/>
    <line x1="16" y1="14" x2="16" y2="17"/>
  </svg>
);

export const CoinsIcon = ({ size = 16, color = '#213F7D' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="8" r="6"/>
    <path d="M18.09 10.37A6 6 0 1 1 10.34 18"/>
    <path d="M7 6h1v4"/>
  </svg>
);

export const SlidersIcon = ({ size = 16, color = '#213F7D' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="21" x2="4" y2="14"/>
    <line x1="4" y1="10" x2="4" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="12"/>
    <line x1="12" y1="8" x2="12" y2="3"/>
    <line x1="20" y1="21" x2="20" y2="16"/>
    <line x1="20" y1="12" x2="20" y2="3"/>
    <line x1="1" y1="14" x2="7" y2="14"/>
    <line x1="9" y1="8" x2="15" y2="8"/>
    <line x1="17" y1="16" x2="23" y2="16"/>
  </svg>
);

export const BadgePercentIcon = ({ size = 16, color = '#213F7D' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9 15L15 9"/>
    <circle cx="9.5" cy="9.5" r=".5" fill={color}/>
    <circle cx="14.5" cy="14.5" r=".5" fill={color}/>
  </svg>
);

export const ClipboardListIcon = ({ size = 16, color = '#213F7D' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <path d="M12 11h4M12 16h4M8 11h.01M8 16h.01"/>
  </svg>
);

export const ChartBarIcon = ({ size = 16, color = '#213F7D' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10"/>
    <line x1="18" y1="20" x2="18" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="16"/>
  </svg>
);

export const SignOutIcon = ({ size = 16, color = '#213F7D' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);

export const MenuIcon = ({ size = 24, color = '#213F7D' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

export const CloseIcon = ({ size = 20, color = '#213F7D' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
