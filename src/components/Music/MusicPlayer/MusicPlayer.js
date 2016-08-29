import React from 'react';
import { Howl } from 'howler';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.player = null;

    this.state = {
      isPlaying: false,
      isPaused: false,
    }
  }

  componentWillMount() {
    const src = 'assets/music/files/sample.mp3';
    this.player = new Howl({
      src,
      onend: () => {
        this.setState({
          isPlaying: false,
          end: true,
        })
      }
    });
  }

  play = () => {
    if(!this.state.isPlaying) {
      this.player.play();
      this.setState({
        isPlaying: true,
        isPaused: false,
      });
    }
  }

  pause = () => {
    if(this.state.isPlaying) {
      this.player.pause();
      this.setState({
        isPlaying: false,
        isPaused: true,
      });
    }
  }

  stop = () => {
    if(this.state.isPlaying || this.state.isPaused) {
      this.player.stop();
      this.setState({
        isPlaying: false,
        isPaused: false,
      });
    }
  }

  render() {
    const { isPlaying } = this.state;
    const actionMethod = isPlaying ? this.pause : this.play;
    const actionIcon = isPlaying ? 'pause' : 'play';

    return (
      <div>
        <h2 className="header">Music Player</h2>
        <button className="btn btn-success btn-circle btn-lg" onClick={actionMethod}><i className={`glyphicon glyphicon-${actionIcon}`}></i></button>
      </div>
    );
  }
}

export default MusicPlayer;
