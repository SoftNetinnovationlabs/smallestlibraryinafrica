import React from "react";
import "./ContactSupport.css";

const ContactSupport = () => {
  return (
    <div className="contact-support-container">
      <div className="contact-box">
        <h1>Website Access Restricted</h1>
        <p>
          Please contact us at{" "}
          <a href="mailto:support@netoracloud.com">support@netoracloud.com</a>{" "}
          to complete your payment and activate your website.
        </p>
      </div>
    </div>
  );
};

export default ContactSupport;
