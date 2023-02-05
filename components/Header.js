import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
const Header = () => {
  [statusLogin, setStatusLogin] = useState(true);

  return (
    <div className="header">
      <Link to="/">
        <img
          className="logo"
          alt="logo"
          src="https://cdn.dribbble.com/users/4987860/screenshots/15665665/foodie.jpg"
        />
      </Link>
      <div className="nav-items">
        <ul>
          <li>Cart</li>
          <li>Help</li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contactus">Contant Us</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      <button
        type="button"
        onClick={() => {
          setStatusLogin(!statusLogin);
        }}
      >
        {statusLogin ? "login" : "logout"}
      </button>
    </div>
  );
};

export default Header;
