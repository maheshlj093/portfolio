import React from 'react';
import '../../App';
import {NavLink,Link} from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/TechGuide">Port<span className='text-danger'>Folio</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={({ isActive }) =>isActive ? "nav-link text-danger fw-bold active" : "fw-bold nav-link"} aria-current="page" to="/Portfolio">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({ isActive }) =>isActive ? "nav-link text-danger fw-bold active" : "fw-bold nav-link"} to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({ isActive }) =>isActive ? "nav-link text-danger fw-bold active" : "fw-bold nav-link"} to="/Project">Projects</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
