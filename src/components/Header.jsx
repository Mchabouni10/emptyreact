import React from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="navbar">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            {/* <img
              src="logo.png"
              style={{ height: "40px", width: "120px" }}
            /> */}
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/news" className="nav-link">
              News
            </Link>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link">Allsports ▼</span>
            <ul className="dropdown-menu">
              <li className="nav-item">
                <Link to="/allsports/football" className="nav-link">
                  Football
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/allsports/nba" className="nav-link">
                  NBA
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/allsports/tennis" className="nav-link">
                  Tennis
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/allsports/FormulaOne" className="nav-link">
                  Formula1
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/allsports/motogp" className="nav-link">
                  MotoGP
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/scores" className="nav-link">
              Scores
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
