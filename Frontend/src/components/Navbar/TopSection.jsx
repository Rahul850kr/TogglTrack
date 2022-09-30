import React from "react";
import { NavLink } from "react-router-dom";
import "./TopSection.css";
import { AiFillCaretDown } from "react-icons/ai";

function TopSection() {
  return (
    <div>
      <div className="navbar-desktop">
        <div className="top-section">
          <ul className="top-section-list">
            <li>
              <NavLink className="top-section-items" to="track">
                Back to Toggl Global
              </NavLink>
            </li>
            <li className="top-section-items top-section-dropdown">
              <span>Products</span>
              <span>
                <AiFillCaretDown className="top-section-items-icon" />
              </span>
            </li>
            <li>
              <NavLink className="top-section-items" to="track">
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink className="top-section-items" to="track">
                Our mission
              </NavLink>
            </li>
            <li>
              <NavLink className="top-section-items" to="track">
                Working at Toggl
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopSection;