import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="balance">
        <h3>Account Balance</h3>
        <p>$5,432.10</p>
      </div>
      <div className="quick-actions">
        <button>
          <span className="action-icon">💸</span>
          Transfer Money
        </button>
        <button>
          <span className="action-icon">📄</span>
          Pay Bills
        </button>
        <button>
          <span className="action-icon">🔒</span>
          Security Settings
        </button>
      </div>
      <div className="recent-transactions">
        <h3>Recent Transactions</h3>
        <ul>
          <li>
            <span className="transaction-name">Grocery Store</span>
            <span className="transaction-amount">-$45.67</span>
            <span className="transaction-date">Sep 18</span>
          </li>
          <li>
            <span className="transaction-name">Salary Deposit</span>
            <span className="transaction-amount income">+$3,200.00</span>
            <span className="transaction-date">Sep 15</span>
          </li>
          <li>
            <span className="transaction-name">Utility Bill</span>
            <span className="transaction-amount">-$120.00</span>
            <span className="transaction-date">Sep 10</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
