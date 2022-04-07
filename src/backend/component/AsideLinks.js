import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const opened = [];

export default function AsideLinks({ flug, path, children }) {
  const [isActive, setActive] = useState(false);
  const handleActive = (e) => {
    setActive(!isActive);
  }
  

  return (
    <li className={children ? `aside_drop` : ""}>
      <Link
        to="#"
        className={`aside_drop_btn ${isActive ? "active" : ""}`}
        onClick={handleActive}
      >
        {flug}
      </Link>
      {children}
    </li>
  );
}
