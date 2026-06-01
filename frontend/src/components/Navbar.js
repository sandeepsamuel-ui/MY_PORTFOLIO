import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaTrophy,
  FaEnvelope,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo-circle">SS</div>

        <div className="logo-text">SANDEEP SAMUEL</div>
        
      </div>

      <ul>
        <li>
          <a href="#home">
            <FaHome className="nav-icon" />
            Home
          </a>
        </li>

        <li>
          <a href="#about">
            <FaUser className="nav-icon" />
            About
          </a>
        </li>

        <li>
          <a href="#skills">
            <FaCode className="nav-icon" />
            Skills
          </a>
        </li>

        <li>
          <a href="#projects">
            <FaProjectDiagram className="nav-icon" />
            Projects
          </a>
        </li>

        <li>
          <a href="#achievement">
            <FaTrophy className="nav-icon" />
            Achievements
          </a>
        </li>

        <li>
          <a href="#contact">
            <FaEnvelope className="nav-icon" />
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
