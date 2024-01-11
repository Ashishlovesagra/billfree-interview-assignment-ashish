/**
 * The Home function is a React component that renders different routes based on the current URL path,
 * and displays a login page if there is no token available.
 * @returns The Home component is returning different components based on the value of the token state.
 * If the token is empty, it returns the Login component. Otherwise, it returns a Router component with
 * a div containing a Sidebar component and a Routes component. The Routes component defines different
 * routes and their corresponding components.
 */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from './Library';
import Feed from './feed';
import Trending from './Trending';
import Player from './Player';
import Favorites from './favorites';
import '../Styles/Home.css';
import Sidebar from '../Components/Sidebar';
import Login from '../auth/Login';
import { setClientToken } from '../Spotify';


function Home() {
    const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
    <Router>
      <div className="main-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Home;