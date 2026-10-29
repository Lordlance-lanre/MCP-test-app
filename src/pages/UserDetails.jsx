import React, { useState } from 'react';
import { BackArrowIcon, StarIcon } from '../assets/icons';
import './UserDetails.css';

export default function UserDetails({ user, onBack, onUpdateUserStatus }) {
  const [activeTab, setActiveTab] = useState('general');

  if (!user) {
    return (
      <div className="user-details-content">
        <button className="back-btn" onClick={onBack}>
          <BackArrowIcon size={18} />
          <span>Back to Users</span>
        </button>
        <p>No user selected.</p>
      </div>
    );
  }

  const tabs = [
    { id: 'general', label: 'General Details' },
    { id: 'documents', label: 'Documents' },
    { id: 'bank', label: 'Bank Details' },
    { id: 'loans', label: 'Loans' },
    { id: 'savings', label: 'Savings' },
    { id: 'app', label: 'App and System' },
  ];

  const handleBlacklist = () => {
    onUpdateUserStatus(user.id, 'Blacklisted');
  };

  const handleActivate = () => {
    onUpdateUserStatus(user.id, 'Active');
  };

  return (
    <div className="user-details-content">
      {/* Back to users link */}
      <button className="back-btn" onClick={onBack}>
        <BackArrowIcon size={20} color="#545F7D" />
        <span>Back to Users</span>
      </button>

      {/* Title & Action Buttons */}
      <div className="details-header-row">
        <h1 className="page-title">User Details</h1>
        <div className="user-actions-btns">
          <button 
            type="button" 
            className="btn-blacklist" 
            onClick={handleBlacklist}
          >
            BLACKLIST USER
          </button>
          <button 
            type="button" 
            className="btn-activate" 
            onClick={handleActivate}
          >
            ACTIVATE USER
          </button>
        </div>
      </div>

      {/* User Summary Header Card */}
      <div className="user-summary-card">
        <div className="summary-top-row">
          <div className="user-main-info">
            <div className="user-avatar-circle">
              {user.userName ? user.userName.charAt(0).toUpperCase() : 'U'}
            </div>
            <div className="user-name-id">
              <h2 className="user-name">{user.userName}</h2>
              <span className="user-id">{user.id}</span>
            </div>
          </div>

          <div className="summary-divider-v" />

          <div className="user-tier-info">
            <span className="tier-label">User's Tier</span>
            <div className="tier-stars">
              <StarIcon filled={user.tier >= 1} size={16} color="#E9B200" />
              <StarIcon filled={user.tier >= 2} size={16} color="#E9B200" />
              <StarIcon filled={user.tier >= 3} size={16} color="#E9B200" />
            </div>
          </div>

          <div className="summary-divider-v" />

          <div className="user-bank-summary">
            <h3 className="user-balance">{user.accountBalance || '₦200,000.00'}</h3>
            <span className="user-bank-account">{user.accountNumber}/{user.bankName}</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="summary-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Details Card (Content) */}
      <div className="user-info-card">
        {activeTab === 'general' ? (
          <>
            {/* Personal Information */}
            <section className="info-section">
              <h3 className="section-title">Personal Information</h3>
              <div className="info-grid grid-5">
                <div className="info-item">
                  <span className="info-label">FULL NAME</span>
                  <span className="info-value">{user.userName}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">PHONE NUMBER</span>
                  <span className="info-value">{user.phoneNumber}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">EMAIL ADDRESS</span>
                  <span className="info-value">{user.email}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">BVN</span>
                  <span className="info-value">{user.bvn}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">GENDER</span>
                  <span className="info-value">{user.gender}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">MARITAL STATUS</span>
                  <span className="info-value">{user.maritalStatus}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">CHILDREN</span>
                  <span className="info-value">{user.children}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">TYPE OF RESIDENCE</span>
                  <span className="info-value">{user.residenceType}</span>
                </div>
              </div>
            </section>

            <div className="card-divider-h" />

            {/* Education and Employment */}
            <section className="info-section">
              <h3 className="section-title">Education and Employment</h3>
              <div className="info-grid grid-4">
                <div className="info-item">
                  <span className="info-label">LEVEL OF EDUCATION</span>
                  <span className="info-value">{user.education}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">EMPLOYMENT STATUS</span>
                  <span className="info-value">{user.employmentStatus}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">SECTOR OF EMPLOYMENT</span>
                  <span className="info-value">{user.sector}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">DURATION OF EMPLOYMENT</span>
                  <span className="info-value">{user.duration}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">OFFICE EMAIL</span>
                  <span className="info-value">{user.officeEmail}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">MONTHLY INCOME</span>
                  <span className="info-value">{user.monthlyIncome ? `${user.monthlyIncome[0]} - ${user.monthlyIncome[1]}` : '₦200,000.00 - ₦400,000.00'}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">LOAN REPAYMENT</span>
                  <span className="info-value">{user.loanRepayment}</span>
                </div>
              </div>
            </section>

            <div className="card-divider-h" />

            {/* Socials */}
            <section className="info-section">
              <h3 className="section-title">Socials</h3>
              <div className="info-grid grid-3">
                <div className="info-item">
                  <span className="info-label">TWITTER</span>
                  <span className="info-value">{user.twitter}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">FACEBOOK</span>
                  <span className="info-value">{user.facebook}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">INSTAGRAM</span>
                  <span className="info-value">{user.instagram}</span>
                </div>
              </div>
            </section>

            <div className="card-divider-h" />

            {/* Guarantor */}
            <section className="info-section">
              <h3 className="section-title">Guarantor</h3>
              <div className="info-grid grid-4">
                <div className="info-item">
                  <span className="info-label">FULL NAME</span>
                  <span className="info-value">{user.guarantor?.name || 'Debby Ogana'}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">PHONE NUMBER</span>
                  <span className="info-value">{user.guarantor?.phoneNumber || '07060780922'}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">EMAIL ADDRESS</span>
                  <span className="info-value">{user.guarantor?.email || 'debby@gmail.com'}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">RELATIONSHIP</span>
                  <span className="info-value">{user.guarantor?.relationship || 'Sister'}</span>
                </div>
              </div>
            </section>
          </>
        ) : (
          <div className="empty-tab-content">
            <h3>{tabs.find((t) => t.id === activeTab)?.label}</h3>
            <p>No extra records or files currently available for this section.</p>
          </div>
        )}
      </div>
    </div>
  );
}
