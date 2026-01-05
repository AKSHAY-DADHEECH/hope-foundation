import React, { useState } from "react";
import "../styles/components/donate-amount.css";

const DonateAmount = () => {
  const [amount, setAmount] = useState(1000);

  return (
    <>
    <section className="donate-amount">
      <h2>Select Donation Amount</h2>

      <div className="amount-options">
        {[500, 1000, 2000, 5000].map((amt) => (
          <button
            key={amt}
            className={amount === amt ? "active" : ""}
            onClick={() => setAmount(amt)}
          >
            ₹ {amt}
          </button>
        ))}
      </div>

      <input
        type="number"
        placeholder="Enter Custom Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
    </section>
    <div className="text-child">
      <h1>Give Every Child a Chance to Learn and Dream</h1>
    </div>
    </>
  );
};

export default DonateAmount;
