import React from "react";
import "./ContactUs.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ContactUs = () => {
  return (
    <div
      className="container-fluid contact"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
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
