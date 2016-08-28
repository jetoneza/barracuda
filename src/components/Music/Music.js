import React from 'react';
import { Howl } from 'howler';
import path from 'path';

class Music extends React.Component {
  constructor(props) {
    super(props);

    this.player = null;
    this.state = {
      isPlaying: false,
      end: false,
      isPaused: false,
    };
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
        end: false,
      });
    }
  }

  pause = () => {
    if(this.state.isPlaying) {
      this.player.pause();
      this.setState({
        isPlaying: false,
        isPaused: true,
      })
    }
  }

  render() {
    const { isPlaying, isPaused , end } = this.state;
    const actionButton = isPlaying ? <button className="btn btn-info" onClick={this.pause}>Pause</button> : <button className="btn btn-success" onClick={this.play}>Play</button>;

    return (
      <div className="col-md-3">
        <h1>Music Page</h1>
        { isPlaying && <div className="alert alert-info">Playing</div> }
        { end && <div className="alert alert-success">Finished</div> }
        { isPaused && <div className="alert alert-info">Paused</div> }
        { actionButton }
      </div>
    );
  }
}

export default Music;
