import React, { useState } from 'react';

const BillPay = () => {
  const [bills, setBills] = useState([
    { id: 1, name: 'Electricity', amount: 120.00, dueDate: '2023-10-15', paid: false },
    { id: 2, name: 'Water', amount: 45.50, dueDate: '2023-10-20', paid: false },
    { id: 3, name: 'Internet', amount: 60.00, dueDate: '2023-10-25', paid: false },
  ]);

  const payBill = (id) => {
    setBills(bills.map(bill => bill.id === id ? { ...bill, paid: true } : bill));
  };

  return (
    <div className="bill-pay">
      <h2>Bill Pay</h2>
      <ul>
        {bills.map(bill => (
          <li key={bill.id}>
            <span>{bill.name} - ${bill.amount} (Due: {bill.dueDate})</span>
            {!bill.paid ? (
              <button onClick={() => payBill(bill.id)}>Pay Now</button>
            ) : (
              <span>Paid</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BillPay;
