import React from 'react';
import './App.css';
import TopBar from './menus/TopBar';
import Grid from './menus/Grid';
import Main from './menus/Main';
import Sections from './menus/Sections';
import AudioPlayer from './entertainment/audio/AudioPlayer';

const App = () => (
      <div>
      <TopBar />
      {/* <Sections />
      <Grid /> */}
      <Main />
      <AudioPlayer />
    </div>
)

export default App;
