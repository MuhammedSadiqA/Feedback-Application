import React from 'react'

function Header() {


  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
      <div className="container">

        {/* Logo + Company Name */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img
            src="https://d3eqn3hw2x95rk.cloudfront.net/seo/og_images/logo_qZlpEoR.png"
            width="40"
            className="img-fluid"
            alt="Logo"
          />
          <h5 className="mb-0 fw-bold">LUMINAR TECHNOLAB</h5>
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="features">features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#">Student Feedback</a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Header
