import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-item">
        <div className="header-title">
          <h2>Masterkey</h2>
        </div>
        <div className="serch-var">
          <input type="text" placeholder="Search anything" />
          <button>
            {" "}
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
