/* This code is a React component called `Library`. It is responsible for rendering a user's playlists
and allowing them to play a selected playlist. */
import React, { useEffect, useState } from 'react';
import apiClient from '../Spotify';
import '../Styles/Library.css';
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

function Library() {
  const [playlists, setPlaylists] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiClient.get("me/playlists")
      .then(function (response) {
        setPlaylists(response.data.items);
        setLoading(false);
      })
      .catch(function (error) {
        console.error('Error fetching playlists:', error);
        setLoading(false);
      });
  }, []);

  const navigate = useNavigate();

  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <div className="screen-container">
      <div className="library-body">
        {loading && <p>Loading...</p>}
        {!loading && playlists && playlists.map((playlist) => (
          <div
            className="playlist-card"
            key={playlist.id}
            onClick={() => playPlaylist(playlist.id)}
          >
            {/* Check if playlist.images exists and has at least one element */}
            {playlist.images && playlist.images.length > 0 ? (
              <img
                src={playlist.images[0].url}
                className="playlist-image"
                alt="Playlist-Art"
              />
            ) : (
              <p>No Image Available</p>
            )}
            <p className="playlist-title">{playlist.name}</p>
            <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
            <div className="playlist-fade">
            <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
        {!loading && !playlists && <p>No playlists available.</p>}
      </div>
    </div>
  );
}

export default Library;
