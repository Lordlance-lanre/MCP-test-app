import React from 'react';
import { EyeIcon, BlacklistUserIcon, ActivateUserIcon } from '../assets/icons';
import './ActionMenu.css';

export default function ActionMenu({ isOpen, user, onViewDetails, onBlacklist, onActivate, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="action-menu-dropdown" onClick={(e) => e.stopPropagation()}>
      <button 
        className="action-menu-item"
        onClick={() => {
          onViewDetails(user);
          onClose();
        }}
      >
        <EyeIcon size={16} color="#545F7D" />
        <span>View Details</span>
      </button>

      <button 
        className="action-menu-item"
        onClick={() => {
          onBlacklist(user.id);
          onClose();
        }}
      >
        <BlacklistUserIcon size={16} color="#545F7D" />
        <span>Blacklist User</span>
      </button>

      <button 
        className="action-menu-item"
        onClick={() => {
          onActivate(user.id);
          onClose();
        }}
      >
        <ActivateUserIcon size={16} color="#545F7D" />
        <span>Activate User</span>
      </button>
    </div>
  );
}
