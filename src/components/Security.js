import React, { useState } from 'react';

const Security = () => {
  const [twoFA, setTwoFA] = useState(false);
  const [biometric, setBiometric] = useState(false);

  return (
    <div className="security">
      <h2>Security Settings</h2>
      <div>
        <label>
          <input
            type="checkbox"
            checked={twoFA}
            onChange={(e) => setTwoFA(e.target.checked)}
          />
          Enable Two-Factor Authentication
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={biometric}
            onChange={(e) => setBiometric(e.target.checked)}
          />
          Enable Biometric Login
        </label>
      </div>
      <p>Security Tip: Always use strong passwords and enable 2FA for better protection.</p>
    </div>
  );
};

export default Security;
