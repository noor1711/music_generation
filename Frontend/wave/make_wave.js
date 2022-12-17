import React, { Component, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";
import "./wave.css";
class Waveform extends Component {
  state = {
    playing: false,
    muted: false,
    volume: 0.5,
    interval: null,
    currentColor: 0,
    colors: [
      "rgba(255, 0, 144, 1)",
      "rgba(255, 0, 144, 0.9)",
      "rgba(255, 0, 144, 0.8)",
      "rgba(255, 0, 144, 0.7)",
      "rgba(255, 0, 144, 0.6)",
      "rgba(255, 0, 144, 0.5)",
      "rgba(255, 0, 144, 0.6)",
      "rgba(255, 0, 144, 0.7)",
      "rgba(255, 0, 144, 0.8)",
      "rgba(255, 0, 144, 0.9)",
    ],
  };

  componentDidMount() {
    const track = document.querySelector("#track");
    this.waveform = WaveSurfer.create({
      barWidth: 5,
      cursorWidth: 4,
      container: "#waveform",
      backend: "WebAudio",
      height: 200,
      progressColor: this.state.colors[0],
      responsive: true,
      waveColor: "#EFEFEF",
      cursorColor: "black",
      volume: 0.5,
    });
    this.waveform.load(track);
    this.interval = setInterval(() => {
      if (this.waveform.isPlaying() || this.playing) {
        this.waveform.setProgressColor(
          this.state.colors[this.state.currentColor]
        );
        this.setState({ currentColor: (this.state.currentColor + 1) % 10 });
      }
    }, 200);
  }

  handlePlay = () => {
    this.setState({ playing: !this.state.playing });
    if (this.waveform.getCurrentTime() >= this.waveform.getDuration() - 0.2) {
      this.waveform.setCurrentTime(0);
    }
    this.waveform.playPause();
  };

  handleMute = () => {
    this.setState({ muted: !this.state.muted });
    this.waveform.toggleMute();
  };

  handleVolUp = () => {
    if (this.state.volume < 1) {
      this.setState({ volume: this.state.volume + 0.1 });
      this.waveform.setVolume(this.state.volume);
    }
  };

  handleVolDown = () => {
    if (this.state.volume > 0) {
      this.setState({ volume: this.state.volume - 0.1 });
      this.waveform.setVolume(this.state.volume);
    }
  };

  render() {
    const url = "https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3";

    return (
      <div className="wave-container">
        <div className="w-75">
          <div id="waveform"></div>
          <div className="btn-group m-2">
            <button className=" music-buttons" onClick={this.handlePlay}>
              {!this.state.playing
                ? "Play"
                : this.waveform.getCurrentTime() >=
                  this.waveform.getDuration() - 0.2
                ? this.handlePlay()
                : "Pause"}
            </button>
            <button className=" music-buttons" onClick={this.handleMute}>
              {!this.state.muted ? "Mute" : "Unmute"}
            </button>
            <button className=" music-buttons" onClick={this.handleVolDown}>
              Vol -
            </button>
            <button className=" music-buttons" onClick={this.handleVolUp}>
              Vol +
            </button>
          </div>

          <audio id="track" src={url} />
        </div>
      </div>
    );
  }
}

export default Waveform;
