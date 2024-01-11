/**
 * The SongCard component is a React component that renders the album image and information for a given
 * album.
 * @returns The SongCard component is returning a JSX element. It is a div element with the className
 * "songCard-body flex". Inside the div, it renders two components: AlbumImage and AlbumInfo.
 */
import React from 'react';
import '../Styles//SongCard.css';
import AlbumImage from './albumImage';
import AlbumInfo from './albumInfo';

function SongCard({ album }) {
  return (
    <div className="songCard-body flex">
      <AlbumImage url={album?.images[0]?.url} />
      <AlbumInfo album={album} />
    </div>
  );
}

export default SongCard;
