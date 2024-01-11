/* This code is a React component called "Player". It imports various dependencies and components,
including React, useEffect, useState, useLocation, and several custom components. */
import React, { useEffect, useState } from "react";
import "../Styles/player.css";
import { useLocation } from "react-router-dom";
import apiClient from "../Spotify";
import SongCard from "../Components/SongCard";
import Queue from "../Components/Queue";
import AudioPLayer from "../Components/audioPlayer/AudioPLayer";
import Widgets from "../Components/widgets/Widgets";

export default function Player() {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTrack(res.data.items[0].track);
        });
    }
  }, [location.state]);

  useEffect(() => {
    console.log("currentIndex:", currentIndex);
    console.log("tracks:", tracks);
    setCurrentTrack(tracks[currentIndex]?.track);
    console.log("currentTrack:", currentTrack);
  }, [currentIndex, tracks]);

  return (
    <div className="screen-container flex">
    <div className="left-player-body">
    <AudioPLayer
          currentTrack={currentTrack}
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      {/* Only render if currentTrack is defined */}
      {currentTrack && (
        <Widgets artistID={currentTrack?.album?.artists[0]?.id} />
      )}
    </div>
    <div className="right-player-body">
      {/* Only render if currentTrack is defined */}
      {currentTrack && <SongCard album={currentTrack?.album} />}
      <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
    </div>
  </div>
  );
}
