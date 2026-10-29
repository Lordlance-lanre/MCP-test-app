import React, { useState, useEffect } from 'react';
import './FilterModal.css';

export default function FilterModal({ isOpen, onClose, onApplyFilter, currentFilters, orgOptions }) {
  const [org, setOrg] = useState(currentFilters.org || '');
  const [userName, setUserName] = useState(currentFilters.userName || '');
  const [email, setEmail] = useState(currentFilters.email || '');
  const [date, setDate] = useState(currentFilters.date || '');
  const [phone, setPhone] = useState(currentFilters.phone || '');
  const [status, setStatus] = useState(currentFilters.status || '');

  useEffect(() => {
    setOrg(currentFilters.org || '');
    setUserName(currentFilters.userName || '');
    setEmail(currentFilters.email || '');
    setDate(currentFilters.date || '');
    setPhone(currentFilters.phone || '');
    setStatus(currentFilters.status || '');
  }, [currentFilters, isOpen]);

  if (!isOpen) return null;

  const handleReset = (e) => {
    e.preventDefault();
    setOrg('');
    setUserName('');
    setEmail('');
    setDate('');
    setPhone('');
    setStatus('');
    onApplyFilter({});
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onApplyFilter({
      org,
      userName,
      email,
      date,
      phone,
      status,
    });
    onClose();
  };

  return (
    <div className="filter-popup">
      <form onSubmit={handleSubmit} className="filter-form">
        <div className="filter-field">
          <label htmlFor="filter-org">Organization</label>
          <select 
            id="filter-org"
            value={org} 
            onChange={(e) => setOrg(e.target.value)}
          >
            <option value="">Select</option>
            {orgOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>

        <div className="filter-field">
          <label htmlFor="filter-username">Username</label>
          <input
            id="filter-username"
            type="text"
            placeholder="User"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="filter-field">
          <label htmlFor="filter-email">Email</label>
          <input
            id="filter-email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="filter-field">
          <label htmlFor="filter-date">Date</label>
          <input
            id="filter-date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="filter-field">
          <label htmlFor="filter-phone">Phone Number</label>
          <input
            id="filter-phone"
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="filter-field">
          <label htmlFor="filter-status">Status</label>
          <select
            id="filter-status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
            <option value="Blacklisted">Blacklisted</option>
          </select>
        </div>

        <div className="filter-actions">
          <button type="button" onClick={handleReset} className="filter-btn-reset">
            Reset
          </button>
          <button type="submit" className="filter-btn-submit">
            Filter
          </button>
        </div>
      </form>
    </div>
  );
}
