import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) return;

    addTask({
      id: Date.now(),
      title,
      priority,
      done: false,
    });

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task"
      />

      <select onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="high">High</option>
      </select>

      <button>Add</button>
    </form>
  );
}

export default TaskForm;