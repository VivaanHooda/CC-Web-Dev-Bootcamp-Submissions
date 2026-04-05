function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div className="task">
      <span className={task.done ? "done" : ""}>
        {task.title} ({task.priority})
      </span>

      <div>
        <button onClick={() => toggleTask(task.id)}>Done</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;