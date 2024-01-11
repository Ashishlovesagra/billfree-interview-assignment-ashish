/**
 * The `SidebarButton` component is a button that renders an icon and a title, and changes its style
 * based on the current location.
 * @returns The SidebarButton component is returning a JSX element.
 */
import React from "react";
import "../Styles//SidebarButton.css";
import { IconContext } from "react-icons";
import { Link, useLocation } from "react-router-dom";

function SidebarButton(props) {
  const location = useLocation();

  const isActive = location.pathname === props.to;

  const btnClass = isActive ? "btn-body active" : "btn-body";
  return (
    <Link to={props.to}>
      <div className={btnClass}>
        <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
          {props.icon}
          <p className="btn-title">{props.title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  );
}

export default SidebarButton;
