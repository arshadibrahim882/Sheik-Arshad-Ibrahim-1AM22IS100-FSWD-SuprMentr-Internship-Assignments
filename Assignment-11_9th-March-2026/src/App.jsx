import React, { useState } from "react";
import MoodButton from "./components/MoodButton";
import MoodDisplay from "./components/MoodDisplay";
import "./App.css";

function App() {
  const [mood, setMood] = useState(null);

  const moods = [
    { label: "Happy", emoji: "😊", color: "#FFF9C4" },
    { label: "Sad", emoji: "😢", color: "#BBDEFB" },
    { label: "Angry", emoji: "😡", color: "#FFCDD2" },
    { label: "Tired", emoji: "😴", color: "#E1BEE7" }
  ];

  const appStyle = {
    backgroundColor: mood ? mood.color : "#f5f5f5"
  };

  return (
    <div className="container" style={appStyle}>
      <h1>Mood Tracker</h1>
      <p>Select your mood for today</p>

      <div className="buttons">
        {moods.map((m) => (
          <MoodButton
            key={m.label}
            mood={m}
            setMood={setMood}
          />
        ))}
      </div>

      <MoodDisplay mood={mood} />
    </div>
  );
}
export default App;