import React, { useState } from "react";
import "./DeleteAccount.css";

function DeleteAccount() {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email && !mobile) {
      alert("Please enter your registered email or mobile number.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="delete-account-page">
      <div className="delete-account-card">

        <h1>GoTurf Account Deletion</h1>

        <p>
          If you want to delete your GoTurf account and associated personal
          data, you can submit a deletion request using the form below.
        </p>

        <h2>Request Account Deletion</h2>

        {!submitted ? (
          <form onSubmit={handleSubmit}>

            <label htmlFor="email">
              Registered Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="mobile">
              Registered Mobile Number
            </label>

            <input
              id="mobile"
              type="tel"
              placeholder="Enter your registered mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />

            <button type="submit">
              Request Account Deletion
            </button>

          </form>
        ) : (
          <div className="delete-success">
            <h3>Deletion Request Received</h3>

            <p>
              Your GoTurf account deletion request has been received.
              We will verify the account details and process the request.
            </p>
          </div>
        )}

        <div className="deletion-info">

          <h2>What will be deleted?</h2>

          <ul>
            <li>GoTurf account information</li>
            <li>User profile information</li>
            <li>Authentication information</li>
            <li>Associated personal data</li>
          </ul>

          <h2>Data Retention</h2>

          <p>
            Certain information may be retained where required for legal,
            security, fraud prevention, accounting, or regulatory purposes.
          </p>

          <h2>Need Help?</h2>

          <p>
            If you have questions regarding account or data deletion,
            please contact the GoTurf support team.
          </p>

        </div>

      </div>
    </div>
  );
}

export default DeleteAccount;