# Project Name
I have created a music player website using the Spotify API. This project is a Reactjs application that includes features such as player controls, album listings, volume control, and music progress.

## Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up a Spotify Developer account and obtain API credentials.
4. Replace `'SPOTIFY_API_ENDPOINT'` in `components/Player.js` with the actual Spotify API endpoint.
5. Run the application using `npm run dev`.



## Components

### 1. Login.jsx
The `Login` component renders a login page with a Spotify logo and a login button.

### 2. AudioPlayer.jsx
The `AudioPlayer` component handles playing audio tracks, displaying track information, and providing controls for playing, pausing, skipping to the next track, and skipping to the previous track.

### 3. Controls.jsx
The `Controls` component renders a set of controls for a music player, including buttons for previous, play/pause, and next actions.

### 4. ProgressCircle.jsx
The `ProgressCircle` component renders a circular progress bar with an image in the center.

### 5. WaveAnimation.jsx
The `WaveAnimation` component renders a series of div elements with a CSS class that determines whether they are active or not based on the `isPlaying` prop.

### 6. WidgetCard.jsx
The `WidgetCard` component is a functional component that takes in four props: `title`, `similar`, `featured`, and `newRelease`.

### 7. WidgetEntry.jsx
The `WidgetEntry` function is a React component that renders a widget entry with a title, subtitle, and image.

### 8. Widgets.jsx
The `Widgets` component fetches and displays similar artists, featured playlists, and new releases based on an artist ID.

### 9. AlbumImage.jsx
The `AlbumImage` function is a React component that renders an album image with a shadow effect.

### 10. AlbumInfo.jsx
The `AlbumInfo` function is a React component that renders information about an album, including its name, artists, album type, total tracks, and release date.

### 11. Queue.jsx
The `Queue` component is a React functional component that takes two props, `tracks` and `setCurrentIndex`.

### 12. Sidebar.jsx
The `Sidebar` component is responsible for rendering a sidebar container with various buttons/icons for navigation.

### 13. SidebarButton.jsx
The `SidebarButton` component is a button that renders an icon and a title, changing its style based on the current location.

### 14. SongCard.jsx
The `SongCard` component renders the album image and information for a given album.

### 15. Home.jsx
The `Home` function is a React component that renders different routes based on the current URL path, displaying a login page if there is no token available.

### 16. Library.jsx
The `Library` component is responsible for rendering a user's playlists and allowing them to play a selected playlist.

### 17. Player.jsx
The `Player` component is a React component that imports various dependencies and components, including React, useEffect, useState, useLocation, and several custom components.

### 18. App.jsx
The `App` component renders the `Home` component.

## Usage

npm run dev to run this project.

## Installation

npm install to download all dependencies and set up the project.

## License

This project is licensed under the Ashish Kumar Singh.