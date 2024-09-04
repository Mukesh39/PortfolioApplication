import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/ContactForm.css";
import call from "../assets/mukeshkkk.png";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          e.target.reset(); // Clears the form after successful submission
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage("Network Issues Kindly Direct Mail to Muk.786422@gmail.com ");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
  };

  return (
    <>
      <h1 className="heading-contact-box">Contact me </h1>
      <div className="contact-form-box">
        <div className="left-image-box">
          <img className="image-boy" src={call} alt="contactImg" />
        </div>
        <div className="contact-form">
          <form onSubmit={sendEmail}>
            <h1>Get in Touch</h1>
            <label>Name</label>
            <input type="text" name="user_name" required />
            <label>Email</label>
            <input type="email" name="user_email" required />
            <label>Message</label>
            <textarea name="message" required />
            <input type="submit" value="Send" disabled={isSubmitting} />
            {stateMessage && <p className="contact-form-message">{stateMessage}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
