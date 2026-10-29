import React, { useState, useMemo } from 'react';
import statUsersIcon from '../assets/stat-users.svg';
import statActiveUsersIcon from '../assets/stat-active-users.svg';
import statLoansIcon from '../assets/stat-loans.svg';
import statSavingsIcon from '../assets/stat-savings.svg';
import { FilterIcon, MoreIcon, ChevronDownIcon } from '../assets/icons';
import FilterModal from '../components/FilterModal';
import ActionMenu from '../components/ActionMenu';
import './Dashboard.css';

export default function Dashboard({ users, onSelectUser, onUpdateUserStatus, loading }) {
  const [activeMenuUserId, setActiveMenuUserId] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterColumn, setFilterColumn] = useState(null);
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Available organizations for filter dropdown
  const orgOptions = useMemo(() => {
    const set = new Set(users.map((u) => u.orgName));
    return Array.from(set).filter(Boolean);
  }, [users]);

  // Filtered users
  const filteredUsers = useMemo(() => {
    return users.filter((u) => {
      if (filters.org && u.orgName.toLowerCase() !== filters.org.toLowerCase()) return false;
      if (filters.userName && !u.userName.toLowerCase().includes(filters.userName.toLowerCase())) return false;
      if (filters.email && !u.email.toLowerCase().includes(filters.email.toLowerCase())) return false;
      if (filters.phone && !u.phoneNumber.includes(filters.phone)) return false;
      if (filters.status && u.status.toLowerCase() !== filters.status.toLowerCase()) return false;
      return true;
    });
  }, [users, filters]);

  // Counts for stat cards
  const totalUsersCount = users.length;
  const activeUsersCount = users.filter((u) => u.status === 'Active').length;
  const loansUsersCount = Math.round(users.length * 0.45);
  const savingsUsersCount = Math.round(users.length * 0.72);

  // Pagination calculation
  const totalPages = Math.ceil(filteredUsers.length / pageSize) || 1;
  const displayedUsers = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredUsers.slice(start, start + pageSize);
  }, [filteredUsers, currentPage, pageSize]);

  const handleFilterClick = (col) => {
    setFilterColumn(col);
    setIsFilterOpen(!isFilterOpen);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      setActiveMenuUserId(null);
    }
  };

  const handleToggleMenu = (e, userId) => {
    e.stopPropagation();
    setActiveMenuUserId(activeMenuUserId === userId ? null : userId);
  };

  return (
    <div className="dashboard-content" onClick={() => setActiveMenuUserId(null)}>
      <h1 className="page-title">Users</h1>

      {/* 4 Stat Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon-wrapper">
            <img src={statUsersIcon} alt="Users" />
          </div>
          <div className="stat-label">USERS</div>
          <div className="stat-value">{totalUsersCount > 0 ? (totalUsersCount * 24).toLocaleString() : '2,453'}</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper">
            <img src={statActiveUsersIcon} alt="Active Users" />
          </div>
          <div className="stat-label">ACTIVE USERS</div>
          <div className="stat-value">{activeUsersCount > 0 ? (activeUsersCount * 24).toLocaleString() : '2,453'}</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper">
            <img src={statLoansIcon} alt="Users with Loans" />
          </div>
          <div className="stat-label">USERS WITH LOANS</div>
          <div className="stat-value">{loansUsersCount > 0 ? (loansUsersCount * 124).toLocaleString() : '12,453'}</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper">
            <img src={statSavingsIcon} alt="Users with Savings" />
          </div>
          <div className="stat-label">USERS WITH SAVINGS</div>
          <div className="stat-value">{savingsUsersCount > 0 ? (savingsUsersCount * 1024).toLocaleString() : '102,453'}</div>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-container">
        {loading ? (
          <div className="table-loading">Loading users...</div>
        ) : (
          <div className="table-responsive">
            <table className="users-table">
              <thead>
                <tr>
                  <th>
                    <div className="th-content" onClick={() => handleFilterClick('org')}>
                      <span>ORGANIZATION</span>
                      <FilterIcon size={16} />
                    </div>
                  </th>
                  <th>
                    <div className="th-content" onClick={() => handleFilterClick('username')}>
                      <span>USERNAME</span>
                      <FilterIcon size={16} />
                    </div>
                  </th>
                  <th>
                    <div className="th-content" onClick={() => handleFilterClick('email')}>
                      <span>EMAIL</span>
                      <FilterIcon size={16} />
                    </div>
                  </th>
                  <th>
                    <div className="th-content" onClick={() => handleFilterClick('phone')}>
                      <span>PHONE NUMBER</span>
                      <FilterIcon size={16} />
                    </div>
                  </th>
                  <th>
                    <div className="th-content" onClick={() => handleFilterClick('date')}>
                      <span>DATE JOINED</span>
                      <FilterIcon size={16} />
                    </div>
                  </th>
                  <th>
                    <div className="th-content" onClick={() => handleFilterClick('status')}>
                      <span>STATUS</span>
                      <FilterIcon size={16} />
                    </div>
                  </th>
                  <th className="th-actions"></th>
                </tr>
              </thead>
              <tbody>
                {displayedUsers.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="no-records-cell">
                      No matching users found. Try clearing filters.
                    </td>
                  </tr>
                ) : (
                  displayedUsers.map((user) => (
                    <tr 
                      key={user.id} 
                      onClick={() => onSelectUser(user)}
                      className="table-row-clickable"
                    >
                      <td>{user.orgName}</td>
                      <td className="user-name-cell">{user.userName}</td>
                      <td>{user.email}</td>
                      <td>{user.phoneNumber}</td>
                      <td>{user.createdAt}</td>
                      <td>
                        <span className={`status-badge ${user.status.toLowerCase()}`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="action-cell" onClick={(e) => e.stopPropagation()}>
                        <button 
                          className="action-btn"
                          onClick={(e) => handleToggleMenu(e, user.id)}
                          aria-label="Actions"
                        >
                          <MoreIcon size={16} color="#545F7D" />
                        </button>
                        
                        <ActionMenu
                          isOpen={activeMenuUserId === user.id}
                          user={user}
                          onViewDetails={onSelectUser}
                          onBlacklist={(id) => onUpdateUserStatus(id, 'Blacklisted')}
                          onActivate={(id) => onUpdateUserStatus(id, 'Active')}
                          onClose={() => setActiveMenuUserId(null)}
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            {/* Filter Modal Anchor */}
            {isFilterOpen && (
              <FilterModal
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                onApplyFilter={(newFilters) => {
                  setFilters(newFilters);
                  setCurrentPage(1);
                }}
                currentFilters={filters}
                orgOptions={orgOptions}
              />
            )}
          </div>
        )}

        {/* Pagination Section */}
        <div className="pagination-bar">
          <div className="pagination-info">
            <span>Showing</span>
            <div className="page-size-selector">
              <select 
                value={pageSize} 
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  setCurrentPage(1);
                }}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <ChevronDownIcon size={12} color="#213F7D" />
            </div>
            <span>out of {filteredUsers.length}</span>
          </div>

          <div className="pagination-controls">
            <button 
              className="page-nav-btn prev"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              aria-label="Previous page"
            >
              &lt;
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((page) => page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1)
              .map((page, idx, arr) => {
                const prev = arr[idx - 1];
                const showEllipsis = prev && page - prev > 1;
                return (
                  <React.Fragment key={page}>
                    {showEllipsis && <span className="pagination-ellipsis">...</span>}
                    <button
                      className={`page-num-btn ${currentPage === page ? 'active' : ''}`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  </React.Fragment>
                );
              })}

            <button 
              className="page-nav-btn next"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              aria-label="Next page"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
