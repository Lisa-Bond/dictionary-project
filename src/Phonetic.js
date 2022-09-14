import React from "react";
import "./Phonetic.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <div className="row">
        <div className="col-3">
          <span>{props.phonetic.text}</span>
        </div>
        <div className="audio-player col-9">
          <ReactAudioPlayer
            src={props.phonetic.audio}
            autoPlay={false}
            controls
          />
        </div>
      </div>
    </div>
  );
}
