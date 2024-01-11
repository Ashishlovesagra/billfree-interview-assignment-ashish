/**
 * The WidgetEntry function is a React component that renders a widget entry with a title, subtitle,
 * and image.
 * @returns a JSX element.
 */
import React from "react";
import "../../Styles/widgetEntry.css";

export default function WidgetEntry({ title, subtitle, image }) {
  return (
    <div className="entry-body flex">
      <img src={image} alt={title} className="entry-image" />
      <div className="entry-right-body flex">
        <p className="entry-title">{title}</p>
        <p className="entry-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}
