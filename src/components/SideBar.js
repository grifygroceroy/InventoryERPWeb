import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../css/sidebar.css";

function SideBar() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null); // Track open menu

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu); // Toggle submenu
  };

  return (
    <div id="sidebar" className="text-white d-flex flex-column sidebar">
      {/* Brand Section */}
      <div className="d-flex align-items-center justify-content-center h-20 border-secondary py-3">
        <img
          src="https://storage.googleapis.com/a1aa/image/Jg3eMHZ4sIylj8_hp-FCwBqtmS6L0H27L-n2_D7ph1Q.jpg"
          alt="Logo"
          className="rounded-circle"
          height="40"
          width="40"
        />
        <span className="ms-2 fs-4 fw-bold">Inventory</span>
      </div>

      {/* User Info */}
      <div className="d-flex flex-column align-items-center mt-4">
        <img
          src="https://storage.googleapis.com/a1aa/image/K155lSZz5ZLd3FEk38rGuNDC7pyxLX6JJTZLRzW6buE.jpg"
          alt="User profile"
          className="rounded-circle"
          height="80"
          width="80"
        />
        <span className="mt-2 fs-5">Rahul Sharma</span>
      </div>

      {/* Navigation */}
      <nav className="mt-4 flex-grow-1">
        <NavLink to="/dashboard" className="sidebar-link">
          <i className="fas fa-tachometer-alt me-3"></i> Dashboard
        </NavLink>

        {/* Data Master Menu */}
        <button
          className="sidebar-link btn-toggle"
          onClick={() => toggleMenu("master")}
        >
          <i className="fas fa-folder me-3"></i> Data Master
          <i
            className={`fas fa-chevron-${openMenu === "master" ? "up" : "down"} ms-auto`}
          ></i>
        </button>
        {openMenu === "master" && (
          <div className="submenu">
            <NavLink to="/users" className="sidebar-sublink">
              <i className="fas fa-users me-3"></i> Users
            </NavLink>
            <NavLink to="/settings" className="sidebar-sublink">
              <i className="fas fa-cogs me-3"></i> Settings
            </NavLink>
          </div>
        )}

        <NavLink to="/orders" className="sidebar-link">
          <i className="fas fa-shopping-cart me-3"></i> Orders
        </NavLink>

        {/* Products Menu */}
        <button
          className="sidebar-link btn-toggle"
          onClick={() => toggleMenu("products")}
        >
          <i className="fas fa-box me-3"></i> Products
          <i
            className={`fas fa-chevron-${openMenu === "products" ? "up" : "down"} ms-auto`}
          ></i>
        </button>
        {openMenu === "products" && (
          <div className="submenu">
            <NavLink to="/master/add-product" className="sidebar-sublink">
              <i className="fas fa-plus me-3"></i> Add Product
            </NavLink>
            <NavLink to="/list/product-list" className="sidebar-sublink">
              <i className="fas fa-list me-3"></i> Product List
            </NavLink>
          </div>
        )}

        <NavLink to="/pricing" className="sidebar-link">
          <i className="fas fa-tags me-3"></i> Pricing
        </NavLink>
        <NavLink to="/analytics" className="sidebar-link">
          <i className="fas fa-chart-line me-3"></i> Analytics
        </NavLink>
        <NavLink to="/logout" className="sidebar-link">
          <i className="fas fa-sign-out-alt me-3"></i> Logout
        </NavLink>
      </nav>
    </div>
  );
}

export default SideBar;
