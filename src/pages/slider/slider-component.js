import React, { useState } from "react";

// music player component
import { PlayArrow, Pause, SkipPrevious, SkipNext } from "@mui/icons-material";
import "./slider.css";
import VolumeMuteRoundedIcon from "@mui/icons-material/VolumeMuteRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";

export const Slider = () => {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "300px", margin: "auto" }}>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        style={{ width: "100%" }}
      />
      <p>Value: {value}</p>
    </div>
  );
};

export const MusicPlayerSlider = () => {
  const playingTrackLength = 210;
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(36);
  const [volume, setVolume] = useState(50);

  const formatDuration = (value) => {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="music-player">
      {/* Album Image */}
      <img
        src="https://th.bing.com/th?id=OIP.pnsnllWHz2xGWm2-uUd9xwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
        alt="Album Cover"
        className="album-cover"
      />

      {/* Song Info */}
      <div className="song-info">
        <p className="artist">Max Ver</p>
        <p className="title">Monza - (Never lost)</p>
        <p className="subtitle">Monza trill</p>
      </div>

      {/* Progress Bar */}
      <div className="progress-container">
        <span>{formatDuration(progress)}</span>
        <input
          step={1}
          type="range"
          min="0"
          max={playingTrackLength}
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
          className="progress-bar"
        />
        <span>{formatDuration(playingTrackLength - progress)}</span>
      </div>

      {/* Controls */}
      <div className="controls">
        <SkipPrevious className="icon" />
        <div className="play-btn" onClick={togglePlay}>
          {isPlaying ? (
            <Pause className="icon" />
          ) : (
            <PlayArrow className="icon" />
          )}
        </div>
        <SkipNext className="icon" />
      </div>

      {/* Volume Control */}
      <div className="volume-container">
        <VolumeMuteRoundedIcon className="icon" color="disabled" />
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          className="volume-bar"
        />
        <VolumeUpRoundedIcon className="icon" color="disabled" />
      </div>
    </div>
  );
};

export const VolumeSlider = () => {
  const [volumeHorizontal, setVolumeHorizontal] = useState(50);
  const [volumeVertical, setVolumeVertical] = useState(50);

  return (
    <div>
      <div className="volume-horizontal">
        <VolumeMuteRoundedIcon
          className="icon"
          onClick={() => setVolumeHorizontal(0)}
        />
        <input
          type="range"
          min="0"
          max="100"
          value={volumeHorizontal}
          onChange={(e) => setVolumeHorizontal(e.target.value)}
          className="horizontal-slider"
        />
        <VolumeUpRoundedIcon
          className="icon"
          onClick={() => setVolumeHorizontal(100)}
        />
      </div>
      <div className="volume-vertical">
        <VolumeMuteRoundedIcon
          className="icon"
          onClick={() => setVolumeVertical(0)}
        />
        <input
          type="range"
          min="0"
          max="100"
          value={volumeVertical}
          onChange={(e) => setVolumeVertical(e.target.value)}
          className="vertical-slider"
          orient="vertical"
        />
        <VolumeUpRoundedIcon
          className="icon"
          onClick={() => setVolumeVertical(100)}
        />
      </div>
    </div>
  );
};

export const DualRangeSlider = () => {
  const [minValue, setMinValue] = useState(20);
  const [maxValue, setMaxValue] = useState(80);

  const handleMinChange = (e) => {
    setMinValue(Number(e.target.value));
  };

  const handleMaxChange = (e) => {
    setMaxValue(Number(e.target.value));
  };

  return (
    <div className="dual-range-slider">
      <div className="slider-container">
        <input
          type="range"
          min="0"
          max="100"
          value={minValue}
          onChange={handleMinChange}
          className="range-slider"
        />
        <input
          type="range"
          min="0"
          max="100"
          value={maxValue}
          onChange={handleMaxChange}
          className="range-slider"
        />
        <div
          className="slider-track"
          style={{
            left: `${maxValue < minValue ? maxValue : minValue}%`,
            width: `${Math.abs(maxValue - minValue)}%`,
          }}
        ></div>
      </div>
      <span>
        Range selected from {minValue} - {maxValue}
      </span>
    </div>
  );
};
