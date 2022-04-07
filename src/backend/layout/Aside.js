import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/user.svg";
import AsideLinks from "../component/AsideLinks";

export default function Aside({asideActive}) {
  return (
    <div className={`aside ${asideActive ? 'active' : ''}`}>
      <Link to="/" className="aside_top wev_effect waves-effect">
        ADMIN PANEL
      </Link>
      <div className="aside_fixed_part">
        <div className="aside_profile">
          <div className="profile_image">
            <img src={avatar} alt="U" />
          </div>
          <div className="info">
            <h4 className="name">Nasrullah</h4>
            <p>entnasir23a@gmail.com</p>
          </div>
        </div>
        <ul className="aside_links">
          <AsideLinks
            flug={
                <>
                    <i className="aside_icon fab fa-canadian-maple-leaf"></i>
                    Catagory
                </>
            }   
          >
            <ul>
              <li>
                <Link className="wev_effect  waves-effect" to="#">
                  Add Catagory
                </Link>
              </li>
              <li>
                <Link className="wev_effect  waves-effect" to="#">
                  All Catagory
                </Link>
              </li>
            </ul>
          </AsideLinks>
          <AsideLinks
            flug={
                <>
                    <i className="aside_icon fab fa-canadian-maple-leaf"></i>
                    More
                </>
            }   
          >
            <ul>
              <li>
                <Link className="wev_effect  waves-effect" to="#">
                  Add Catagory
                </Link>
              </li>
              <li>
                <Link className="wev_effect  waves-effect" to="#">
                  All Catagory
                </Link>
              </li>
            </ul>
          </AsideLinks>
        </ul>
      </div>
    </div>
  );
}
