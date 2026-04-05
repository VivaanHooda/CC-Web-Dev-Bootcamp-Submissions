import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Stats() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("tasks"));
    if (data) setTasks(data);
  }, []);

  const completed = tasks.filter((t) => t.done).length;
  const pending = tasks.length - completed;

  return (
    <div>
      <h1>Stats</h1>

      <p>Total Tasks: {tasks.length}</p>
      <p>Completed: {completed}</p>
      <p>Pending: {pending}</p>

      <Link to="/">Back</Link>
    </div>
  );
}

export default Stats;