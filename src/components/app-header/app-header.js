import React from "react";
import cartIcon from "./shopping-cart-solid.svg";
import "./app-header.scss";
import { Link } from "react-router-dom";

const AppHeader = ({ total }) => {
  return (
    <header className="header">
      <Link to="/mainPage/" className="header__link">
        Menu
      </Link>
      {/* <a className="header__link" href="#">
                Menu
            </a> */}
      <Link to="/cartPage/" className="header__link">
        <img className="header__cart" src={cartIcon} alt="cart"></img>
        Total: {total} $
      </Link>
      {/* <a className="header__link" href="#">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {total} $
            </a> */}
    </header>
  );
};

export default AppHeader;
