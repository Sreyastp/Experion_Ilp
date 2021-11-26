import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <div className="title">CRM System</div>
      <div className="navbar">
        <div className="contentbox">
          <Link to="/">Home</Link>
        </div>
        <div className="contentbox">Main</div>
        <div className="contentbox">
          <Link to="/staff-list">Staff List</Link>
        </div>
        <div className="contentbox">
          <Link to="/login">Login</Link>
        </div>
        <div className="contentbox">
          <Link to="/register">Register</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
