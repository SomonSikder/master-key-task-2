import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-down" className="bg-dark py-4">
      <div className="container pt-3">
        <div className="row container text-center text-warning">
          <div className="col-lg-4">
            <h2 className="font-style">Masterkey</h2>
            <p className="text-light text-center">
              &copy; 2022 Masterkey. All right reserve.
            </p>
          </div>
          <div className="col-lg-4">
            <h3>Follow Us</h3>
            <div className="flex">
              <a href="">
                <img
                  src="https://img.icons8.com/fluency/48/undefined/instagram-new.png"
                  alt="img"
                />
              </a>
              <a href="">
                <img
                  src="https://img.icons8.com/fluency/48/undefined/facebook-new.png"
                  alt="img"
                />
              </a>
              <a href="">
                <img
                  src="https://img.icons8.com/fluency/48/undefined/youtube-play.png"
                  alt="img"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <h4 href="" className="nav-link text-warning">
              Support
            </h4>
            <a href="" className="nav-link text-warning">
              FAQs
            </a>
            <a href="" className="nav-link text-warning">
              Support Center
            </a>
            <a href="" className="nav-link text-warning">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
