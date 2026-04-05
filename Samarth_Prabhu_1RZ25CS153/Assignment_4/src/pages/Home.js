import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("tasks"));
    if (data) setTasks(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "completed") return t.done;
    if (filter === "pending") return !t.done;
    return true;
  });

  const pickRandom = () => {
    if (tasks.length === 0) return;
    const random = tasks[Math.floor(Math.random() * tasks.length)];
    alert(random.title);
  };

  return (
    <div className="container">
      <h1>Productivity Tracker</h1>

      <TaskForm addTask={addTask} />

      <br />

      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={() => setFilter("pending")}>Pending</button>

      <br /><br />

      <button onClick={pickRandom}>Pick Random Task</button>

      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />

      <Link to="/stats">Go to Stats</Link>
    </div>
  );
}

export default Home;