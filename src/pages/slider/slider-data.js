import {
  DualRangeSlider,
  MusicPlayerSlider,
  Slider,
  VolumeSlider,
} from "./slider-component";

export const sliderData = {
  seoTitle: "Slider Component – A Complete Guide",
  seoDescription:
    "Explore the versatility of sliders, an essential UI component for range selection, input control, and media navigation. Learn to design and implement sliders effectively.",
  seoKeywords: [
    "slider component",
    "range slider",
    "UI sliders",
    "input sliders",
    "volume slider",
    "media slider",
    "progress bar",
  ],
  pageTitle: "Slider",
  pageDescription: [
    "Sliders are interactive UI components that allow users to select values or ranges by dragging a handle along a track.",
    "They are commonly used for range selection, volume control, and media playback.",
  ],
  pageImage: "https://material-web.dev/components/images/slider/hero.webp",
  types: ["Basic Slider", "Volume Slider", "Range Slider", "Media Slider"],
  interactiveDemo:
    "https://material-web.dev/components/slider#interactive-demo",
  accessibity:
    "Sliders are accessible with keyboard support, screen reader announcements for values, and ARIA roles for better usability.",
  examples: [
    {
      component: <Slider />,
      description:
        "A simple slider component that allows users to select a single value within a predefined range. The slider provides a smooth and interactive way to adjust numerical inputs.",
      id: "basic-slider",
      title: "Basic Slider",
      usages:
        "Used in volume controls, brightness adjustments, form inputs, progress tracking, and any UI requiring a single-value selection within a range.",
      purpose:
        "To provide a user-friendly input method for selecting a value within a defined range, improving accessibility and interaction.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";

export const Slider = () => {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="container">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
      />
      <p>Value: {value}</p>
    </div>
  );
};`,
        "app.css": `.container {
  padding: 20px;
  max-width: 300px;
  margin: auto;
}

input[type="range"] {
  width: 100%;
}`,
      },
      open: false,
    },
    {
      component: <VolumeSlider />,
      description:
        "A vertical or horizontal slider for adjusting volume levels.",
      id: "volume-slider",
      title: "Volume Control Slider",
      usages: "Use volume sliders for audio or media volume adjustment.",
      purpose: "To provide users with precise control over volume levels.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";

import { VolumeMuteRounded, VolumeUpRounded } from "@mui/icons-material";

export const VolumeSlider = () => {
  const [volumeHorizontal, setVolumeHorizontal] = useState(50);
  const [volumeVertical, setVolumeVertical] = useState(50);

  return (
    <div>
      <div className="volume-horizontal">
        <VolumeMuteRounded
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
        <VolumeUpRounded
          className="icon"
          onClick={() => setVolumeHorizontal(100)}
        />
      </div>
      <div className="volume-vertical">
        <VolumeUpRounded
          className="icon"
          onClick={() => setVolumeVertical(100)}
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
        <VolumeMuteRounded
          className="icon"
          onClick={() => setVolumeVertical(0)}
        />
      </div>
    </div>
  );
};

`,
        "app.css": `.volume-horizontal {
  display: flex;
  align-items: center;
  gap: 8px;
}

.horizontal-slider {
  width: 150px;
  cursor: pointer;
}

.volume-vertical {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.vertical-slider {
  height: 120px;
  transform: rotate(-90deg);
  cursor: pointer;
}
  
.icon {
  color: currentColor;
  font-size: 28px;
  cursor: pointer;
}`,
      },
      open: false,
    },
    {
      component: <DualRangeSlider />,
      description:
        "A dual-handle range slider that allows users to select a minimum and maximum value, like price filter. It visually represents the selected range with a track between the handles.",
      id: "range-slider",
      title: "Range Slider",
      usages:
        "Used in pricing filters, budget selectors, volume controls, and other applications where users need to define a range of values.",
      purpose:
        "To provide an intuitive and interactive way for users to select a numerical range, ensuring better user experience in filtering and selection processes.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";

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
            left: \`\${maxValue < minValue ? maxValue : minValue}%\`,
            width: \`\${Math.abs(maxValue - minValue)}%\`,
          }}
        ></div>
      </div>
      <span>
        Range selected from {maxValue < minValue ? maxValue : minValue} -{" "}
        {maxValue < minValue ? minValue : maxValue}
      </span>
    </div>
  );
};
`,
        "app.css": `.dual-range-slider {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 18px;
}

.slider-container {
  position: relative;
  width: 200px;
  background-color: rgba(0, 0, 0, 0.4);
  height: 5px;
  border-radius: 3px;
}

.range-slider {
  position: absolute;
  width: 100%;
  pointer-events: none;
  appearance: none;
  background: transparent;
  z-index: 2;
}

.range-slider::-webkit-slider-thumb {
  pointer-events: auto;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  margin-top: -5px;
}

.slider-track {
  position: absolute;
  height: 5px;
  background: white;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 3px;
}`,
      },
      open: false,
    },
    {
      component: <MusicPlayerSlider />,
      description:
        "A slider for navigating or seeking through media, such as video or audio.",
      id: "media-slider",
      title: "Media Playback Slider",
      usages:
        "Use media sliders for video or audio playback, allowing users to seek specific timestamps.",
      purpose:
        "To enhance the media playback experience with precise seek control.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";

import { PlayArrow, Pause, SkipPrevious, SkipNext, VolumeMuteRounded, VolumeUpRounded } from "@mui/icons-material";

export const MusicPlayerSlider = () => {
  const playingTrackLength = 210;
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(36);
  const [volume, setVolume] = useState(50);

  const formatDuration = (value) => {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return \`\${minute}:\${secondLeft < 10 ? \`0\${secondLeft}\` : secondLeft}\`;
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
        <VolumeMuteRounded className="icon" color="disabled" />
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          className="volume-bar"
        />
        <VolumeUpRounded className="icon" color="disabled" />
      </div>
    </div>
  );
};`,
        "app.css": `.music-player {
  width: 320px;
  padding: 16px;
  border-radius: 12px;
  background: linear-gradient(135deg, #ff758c, #ff7eb3, #a18cd1);
  color: white;
  text-align: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
}

.album-cover {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  float: left;
  margin-right: 12px;
}

.song-info {
  overflow: hidden;
  text-align: left;
}

.artist {
  font-size: 12px;
  opacity: 0.8;
}

.title {
  font-weight: bold;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.subtitle {
  font-size: 12px;
  opacity: 0.8;
}

.progress-container {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.progress-bar {
  flex: 1;
  margin: 0 8px;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 8px;
  align-items: center;
}

.icon {
  color: currentColor;
  font-size: 28px;
  cursor: pointer;
}

.play-btn {
  border-radius: 50%;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 50%;
}

.volume-container {
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.volume-bar {
  flex: 1;
  margin-inline: 8px;
}`,
      },
      open: false,
    },
  ],
  links: {
    Types: "#types",
    // "Interactive Demo": "#interactive-demo",
    Accessibility: "#accessibity",
    Examples: {
      "Basic Slider": "#basic-slider",
      "Volume Slider": "#volume-slider",
      "Range Slider": "#range-slider",
      "Media Slider": "#media-slider",
    },
    References: "#references",
  },
  references: {
    "Material Design Sliders": "https://material.io/components/sliders",
    "HTML Input Range Documentation":
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range",
    "ARIA Slider Accessibility Guide":
      "https://www.w3.org/WAI/ARIA/apg/patterns/slider/",
  },
  previousNavigation: { title: "Check box", link: "/all-components/check-box" },
  nextNavigation: {
    title: "Input field",
    link: "/all-components/input",
  },
};
