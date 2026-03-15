import React from "react";

function MoodButton({ mood, setMood }) {
  return (
    <button onClick={() => setMood(mood)}>
      {mood.emoji} {mood.label}
    </button>
  );
}
export default MoodButton;