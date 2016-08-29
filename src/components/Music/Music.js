import React from 'react';

import MusicPlayer from './MusicPlayer/MusicPlayer';

class Music extends React.Component {
  render() {
    return (
      <div className="col-md-3">
        <MusicPlayer />
      </div>
    );
  }
}

export default Music;
