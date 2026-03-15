import React from "react";

function MoodDisplay({ mood }) {
  if (!mood) 
    return null;

  return (
    <div className="result">
      <h2>Your mood today is:</h2>
      <p>{mood.emoji} {mood.label}</p>
    </div>
  );
}
export default MoodDisplay;