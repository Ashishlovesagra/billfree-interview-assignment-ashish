/**
 * The `AlbumInfo` function is a React component that renders information about an album, including its
 * name, artists, album type, total tracks, and release date.
 * @returns The `AlbumInfo` component is returning a JSX element. It consists of a div with the
 * className "albumInfo-card" that contains three child div elements. The first child div has the
 * className "albumName-container" and contains another div with the className "marquee" that contains
 * a p element displaying the album name and artists. The second child div has the className
 * "album-info" and contains
 */

import React from "react";
import "../Styles/albumInfo.css";

function AlbumInfo({ album }) {
  const artists = [];
  album?.artists?.forEach((element) => {
    artists.push(element.name);
  });

  return (
    <div className="albumInfo-card">
      <div className="albumName-container">
        <div className="marquee">
          <p>{album?.name + " - " + artists?.join(", ")}</p>
        </div>
      </div>
      <div className="album-info">
        <p>{`${album?.name} is an ${album?.album_type} by ${artists?.join(
          ", "
        )} with ${album?.total_tracks} track(s)`}</p>
      </div>
      <div className="album-release">
        <p>Release Date: {album?.release_date}</p>
      </div>
    </div>
  );
}

export default AlbumInfo;