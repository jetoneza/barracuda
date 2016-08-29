import React from 'react';
import { Howl } from 'howler';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.player = null;
    this.seek = null;

    this.state = {
      isPlaying: false,
      isPaused: false,
      isLoaded: false,
      duration: 0,
      seek: 0,
    }
  }

  componentWillMount() {
    const src = 'assets/music/files/sample.mp3';
    this.player = new Howl({
      src,
      preload: true,
      onload: this.onLoad,
      onend: this.onEnd,
    });
  }

  onLoad = () => {
    this.setState({
      duration: this.player.duration(),
      isLoaded: true,
    });
  }

  onEnd = () => {
    this.stopSeek();
    this.setState({
      isPlaying: false,
      isPaused: false,
      duration: 0,
      seek: 0,
    });
  }

  stopSeek = () => {
    clearInterval(this.seek);
  }

  updateSeek = () => {
    this.setState({ seek: this.player.seek() });
  }

  play = () => {
    if(!this.state.isPlaying) {
      this.player.play();
      this.stopSeek();
      this.updateSeek();
      this.setState({
        isPlaying: true,
        isPaused: false,
      });
      this.seek = setInterval(this.updateSeek, 1000);
    }
  }

  pause = () => {
    if(this.state.isPlaying) {
      this.player.pause();
      this.stopSeek();
      this.setState({
        isPlaying: false,
        isPaused: true,
      });
    }
  }

  stop = () => {
    if(this.state.isPlaying || this.state.isPaused) {
      this.player.stop();
      this.stopSeek();
      this.setState({
        isPlaying: false,
        isPaused: false,
        seek: 0,
      });
    }
  }

  formatDigit = (num) => {
    return num.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
  }

  render() {
    const { isPlaying, isLoaded, seek, duration} = this.state;
    const actionMethod = isPlaying ? this.pause : this.play;
    const actionIcon = isPlaying ? 'pause' : 'play';
    const percent = (seek / duration) * 100;

    const progressStyle = {
      width: `${percent}%`,
    };

    const progressWrapperStyle = {
      'margin-bottom': '3px'
    };

    const min = parseInt(seek / 60);
    const sec = parseInt(seek % 60);

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Music Player</div>
        <div className="panel-body">
          <div className="media">
            <div className="media-left">
              <button className="btn btn-primary btn-circle btn-lg" disabled={!isLoaded} onClick={actionMethod}><i className={`glyphicon glyphicon-${actionIcon}`}></i></button>
            </div>
            <div className="media-body">
              <div className="progress" style={progressWrapperStyle}>
                <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={progressStyle}>
                </div>
              </div>
              {this.formatDigit(min)}:{this.formatDigit(sec)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MusicPlayer;
