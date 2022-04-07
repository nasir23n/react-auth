import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import DropDown from "../component/DropDown";

export default function TopNav({ asideActive, setAsideActive }) {
  const {logout} = useAuth();
  return (
    <div className={`top_nav ${asideActive ? "active" : ""}`}>
      <button
        className={`top_nav_toggle ${asideActive ? "active" : ""}`}
        onClick={() => setAsideActive(!asideActive)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <Link to="/" className="hidden_home">
        ADMIN PANEL
      </Link>
      <div className="setting_drop">
        <DropDown
            button={<i className="fa fa-cog"></i>}
        >
          <li>
            <Link to="#">
              <i className="fa fa-cogs"></i>Vew profile
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-users"></i>All Admin
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-user"></i>Create profile
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-adjust"></i>Panel layout
            </Link>
          </li>
          <li>
            <Link to="#" onClick={logout}>
              <i className="fa fa-sign-out-alt"></i>Logout
            </Link>
          </li>
        </DropDown>
      </div>
    </div>
  );
}
