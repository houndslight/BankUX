import React, { useState } from 'react';

const Transfers = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleTransfer = (e) => {
    e.preventDefault();
    // Simulate transfer
    setMessage(`Transferred $${amount} to ${recipient}`);
    setRecipient('');
    setAmount('');
  };

  return (
    <div className="transfers">
      <h2>Transfer Money</h2>
      <p>You can also send payments via <strong>Zelle</strong>.</p>
      <form onSubmit={handleTransfer}>
        <label>
          Recipient Account:
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        <button type="submit">Transfer</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Transfers;
