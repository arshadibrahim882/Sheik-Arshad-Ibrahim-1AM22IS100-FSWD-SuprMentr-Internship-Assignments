import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, editTask }) {
  if (tasks.length === 0) {
    return <p>No tasks available</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}
export default TaskList;