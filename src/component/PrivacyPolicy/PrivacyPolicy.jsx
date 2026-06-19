import "./privacy.css";

function PrivacyPolicy() {
  return (
    <div className="policy-container">

      <h1>Privacy Policy</h1>

      <p>Last updated: June 2026</p>

      <h2>1. Information We Collect</h2>
      <p>
        GoTurf collects user information including name, email address,
        phone number, profile image, booking details, tournament registrations,
        and location data when required for booking services.
      </p>

      <h2>2. How We Use Information</h2>
      <p>
        We use collected information to provide turf booking services,
        manage tournaments, improve user experience, process transactions,
        and maintain account security.
      </p>

      <h2>3. Third Party Services</h2>
      <p>
        GoTurf uses Firebase Authentication, MongoDB Atlas, Cloudinary,
        Google Sign-In and payment gateway providers for secure service delivery.
      </p>

      <h2>4. Data Security</h2>
      <p>
        We implement secure authentication systems and encrypted communication
        to protect your personal information.
      </p>

      <h2>5. User Rights</h2>
      <p>
        Users may request account deletion or data removal by contacting support.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        Email: support@goturf.co.in
      </p>

    </div>
  );
}

export default PrivacyPolicy;