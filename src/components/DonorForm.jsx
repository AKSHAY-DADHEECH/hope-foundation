import React from "react";
import "../styles/components/donor-form.css";

const DonorForm = () => {
  return (
    <section className="donor-form">
      <h2>Donor Details</h2>

      <form>
        <input type="text" placeholder="Full Name *" required />
        <input type="email" placeholder="Email *" required />
        <input type="text" placeholder="Mobile Number *" required />

        <textarea placeholder="Message (Optional)" rows="4"></textarea>

        <button type="submit">DONATE NOW</button>
      </form>
    </section>
  );
};

export default DonorForm;
