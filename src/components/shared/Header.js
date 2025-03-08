import React from "react";

function Header() {
  return (
    <header id="head_master" className="d-flex align-items-center justify-content-between bg-white p-3 border-bottom">
      <div className="d-flex align-items-center">
        <button id="menu-toggle" className="btn toggle-btn">
          <i className="fas fa-bars fs-4"></i>
        </button>
      </div>
      <div className="d-flex align-items-center">
        <button className="btn btn-outline-secondary mx-2">
          <i className="fas fa-bell"></i>
        </button>

        <button className="btn btn-outline-secondary mx-2">
          <i className="fas fa-cog"></i>
        </button>
        <img
          src="https://storage.googleapis.com/a1aa/image/K155lSZz5ZLd3FEk38rGuNDC7pyxLX6JJTZLRzW6buE.jpg"
          alt="User profile picture"
          className="rounded-circle"
          height="40"
          width="40"
        />
      </div>
    </header>
  );
}

export default Header;
