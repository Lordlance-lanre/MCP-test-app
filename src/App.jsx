import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserDetails from './pages/UserDetails';
import { getUsers, updateUserStatus } from './services/userService';
import storageMiddleware from './services/storageMiddleware';
import './App.css';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return storageMiddleware.getItem('lendsqr_auth', false) === true;
  });
  const [currentView, setCurrentView] = useState(() => {
    return storageMiddleware.getItem('lendsqr_current_view', 'dashboard');
  });
  const [selectedUser, setSelectedUser] = useState(() => {
    return storageMiddleware.getItem('lendsqr_selected_user', null);
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('users');
  const [toastMessage, setToastMessage] = useState('');

  // Load users data
  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      setLoading(true);
      try {
        const data = await getUsers();
        if (isMounted) {
          setUsers(data);
          // If a user was previously selected, refresh their data
          if (selectedUser) {
            const found = data.find((u) => String(u.id) === String(selectedUser.id));
            if (found) setSelectedUser(found);
          }
        }
      } catch (err) {
        console.error('Failed to load users:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    storageMiddleware.setItem('lendsqr_auth', true);
    setCurrentView('dashboard');
    storageMiddleware.setItem('lendsqr_current_view', 'dashboard');
    showToast('Logged in successfully');
  };

  const handleLogout = () => {
    storageMiddleware.clear();
    setIsAuthenticated(false);
    setSelectedUser(null);
    setCurrentView('login');
    showToast('Logged out');
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    storageMiddleware.setItem('lendsqr_selected_user', user);
    setCurrentView('user-details');
    storageMiddleware.setItem('lendsqr_current_view', 'user-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    storageMiddleware.setItem('lendsqr_current_view', 'dashboard');
  };

  const handleUpdateUserStatus = (userId, newStatus) => {
    const updatedUsers = updateUserStatus(userId, newStatus);
    setUsers(updatedUsers);
    if (selectedUser && String(selectedUser.id) === String(userId)) {
      const updatedSelected = updatedUsers.find((u) => String(u.id) === String(userId));
      if (updatedSelected) {
        setSelectedUser(updatedSelected);
        storageMiddleware.setItem('lendsqr_selected_user', updatedSelected);
      }
    }
    showToast(`User status updated to ${newStatus}`);
  };

  const handleSelectNav = (navId) => {
    setActiveNav(navId);
    if (navId === 'users' || navId === 'dashboard') {
      setCurrentView('dashboard');
      storageMiddleware.setItem('lendsqr_current_view', 'dashboard');
    }
  };

  // If not authenticated, render Login page
  if (!isAuthenticated || currentView === 'login') {
    return (
      <>
        <Login onLoginSuccess={handleLoginSuccess} />
        {toastMessage && <div className="app-toast">{toastMessage}</div>}
      </>
    );
  }

  return (
    <div className="app-layout">
      <Navbar 
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        onLogout={handleLogout}
      />

      <div className="app-main-body">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          activeNav={activeNav}
          onSelectNav={handleSelectNav}
          onLogout={handleLogout}
        />

        <main className="app-content-area">
          {currentView === 'user-details' ? (
            <UserDetails
              user={selectedUser}
              onBack={handleBackToDashboard}
              onUpdateUserStatus={handleUpdateUserStatus}
            />
          ) : (
            <Dashboard
              users={users}
              onSelectUser={handleSelectUser}
              onUpdateUserStatus={handleUpdateUserStatus}
              loading={loading}
            />
          )}
        </main>
      </div>

      {toastMessage && <div className="app-toast">{toastMessage}</div>}
    </div>
  );
}
