import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="container-fluid contact">
      <div className="heading text-center">
        <h1>
          <span>Contact </span>us
        </h1>
      </div>

      <div className="row justify-content-center">
        <form action="" className="col-md-7">
          <div className="inputBox">
            <input type="text" required />
            <h3>Full Name</h3>
          </div>

          <div className="inputBox">
            <input type="email" required />
            <h3>E-mail</h3>
          </div>

          <div className="inputBox">
            <textarea name="" id="" cols="30" rows="10" required></textarea>
            <h3>Message</h3>
          </div>

          <input type="submit" value="send" />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
