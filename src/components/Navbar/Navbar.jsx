// Header.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/images/qt=q_95.jpg" alt="Brand" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/services-products">
                Services & Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item bold" to="/career">Career</Link></li>
                <li><Link className="dropdown-item bold" to="/industries">Industries</Link></li>
                <li><Link className="dropdown-item" to="/fmcg-goods-marketing">FMCG Goods Marketing</Link></li>
                <li><Link className="dropdown-item" to="/retail">Retail</Link></li>
                <li><Link className="dropdown-item" to="/manufacturing">Manufacturing</Link></li>
                <li><Link className="dropdown-item" to="/leather-industry">Leather Industry</Link></li>
                <li><Link className="dropdown-item" to="/travel-logistics">Travel & Logistics</Link></li>
                <li><Link className="dropdown-item" to="/essence-perfumes">Essence - n - Perfumes</Link></li>
                <li><Link className="dropdown-item" to="/pharma-industry">Pharma Industry</Link></li>
                <li><Link className="dropdown-item" to="/banking">Banking</Link></li>
                <li><Link className="dropdown-item" to="/textile-marketing">Textile Marketing</Link></li>
                <li><Link className="dropdown-item" to="/life-sciences">Life Sciences</Link></li>
                <li><Link className="dropdown-item" to="/healthcare">Healthcare</Link></li>
                <li><Link className="dropdown-item" to="/media-it-communication">Media IT & Communication</Link></li>
                <li><Link className="dropdown-item" to="/energy-resources">Energy Resources Industry</Link></li>
                <li><Link className="dropdown-item" to="/high-tech-solutions">High Tech Solutions</Link></li>
                <li><Link className="dropdown-item bold" to="/contact-us">Contact Us</Link></li>
                <li><Link className="dropdown-item bold" to="/newsroom">Newsroom</Link></li>
                <li><Link className="dropdown-item bold" to="/faqs">FAQs</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
