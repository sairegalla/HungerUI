import { useState } from "react";
import "../index.css";
const Header = () => {
  [statusLogin, setStatusLogin] = useState(true);

  return (
    <div className="header">
      <a href="/">
        <img
          className="logo"
          alt="logo"
          src="https://cdn.dribbble.com/users/4987860/screenshots/15665665/foodie.jpg"
        />
      </a>
      <div className="nav-items">
        <ul>
          <li>Cart</li>
          <li>Help</li>
          <li>About</li>
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
