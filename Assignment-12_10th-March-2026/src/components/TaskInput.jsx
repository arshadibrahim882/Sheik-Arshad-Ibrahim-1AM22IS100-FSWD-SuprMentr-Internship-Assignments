import React, { useState } from "react";

function TaskInput({ addTask }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    addTask(task);
    setTask("");
  };

  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}
export default TaskInput;