/**
 * The `AlbumImage` function is a React component that renders an album image with a shadow effect.
 * @returns The AlbumImage component is returning a JSX element. It consists of a div with the
 * className "albumImage flex" that contains an img element with the src set to the provided url and
 * alt set to "album art". Inside the div, there is another div with the className "albumImage-shadow"
 * that contains an img element with the src set to the provided url and alt set to "shadow".
 */
import React from "react";
import "../Styles/albumImage.css";

function AlbumImage({ url }) {
  return (
    <div className="albumImage flex">
      <img src={url} alt="album art" className="albumImage-art" />
      <div className="albumImage-shadow">
        <img src={url} alt="shadow" className="albumImage-shadow" />
      </div>
    </div>
  );
}

export default AlbumImage;