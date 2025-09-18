import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Transfers from './components/Transfers';
import BillPay from './components/BillPay';
import Security from './components/Security';

function App() {
  const [view, setView] = useState('dashboard');

  const renderView = () => {
    switch (view) {
      case 'dashboard':
        return <Dashboard />;
      case 'transfers':
        return <Transfers />;
      case 'billpay':
        return <BillPay />;
      case 'security':
        return <Security />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="logo">🏦 BankUX</div>
        <div className="header-actions">
          <button className="profile-button" aria-label="Profile">👤</button>
          <button className="settings-button" aria-label="Settings">⚙️</button>
        </div>
      </header>
      <main className="main-content">
        <h1>Welcome to BankUX</h1>
        {renderView()}
      </main>
      <nav className="nav-bar">
        <button className={view === 'dashboard' ? 'active' : ''} onClick={() => setView('dashboard')}>
          <span className="nav-icon">🏠</span>
          <span className="nav-label">Dashboard</span>
        </button>
        <button className={view === 'transfers' ? 'active' : ''} onClick={() => setView('transfers')}>
          <span className="nav-icon">💸</span>
          <span className="nav-label">Transfer</span>
        </button>
        <button className={view === 'billpay' ? 'active' : ''} onClick={() => setView('billpay')}>
          <span className="nav-icon">📄</span>
          <span className="nav-label">Bills</span>
        </button>
        <button className={view === 'security' ? 'active' : ''} onClick={() => setView('security')}>
          <span className="nav-icon">🔒</span>
          <span className="nav-label">Security</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
