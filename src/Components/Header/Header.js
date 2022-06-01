import React from "react";
import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <div>
      <div className="mb-5 pb-2">
        <HeaderTop></HeaderTop>
      </div>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid d-flex justify-content-center align-items-center">
          <a class="navbar-brand text-warning" href="#">
            Masterkey
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link active text-warning"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-warning" href="#">
                  Features
                </a>
              </li>{" "}
              <li class="nav-item">
                <a class="nav-link text-warning" href="#">
                  About us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-warning" href="#">
                  Contact Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-warning" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <button className="text-warning btn">Login</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
