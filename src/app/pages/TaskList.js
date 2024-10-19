const TaskList = ({ tasks, deleteTask, toggleTaskCompletion, editTask }) => {
  console.log(tasks,"tasks")
  const sortTasksByPriority = () => {
    const customOrder = {
      High: 1,
      Medium: 2,
      Low: 3,
    };

    return tasks?.sort(
      (a, b) => customOrder[a.priority] - customOrder[b.priority]
    );
  };

  const sortedTasks = sortTasksByPriority();

  return (
    <div style={taskListContainerStyle}>
      <h2>Todo Items</h2>
      <div style={taskListStyle}>
        {sortedTasks?.map((task) => (
          <div key={task.id} style={cardStyle}>
            <h3>{task.title}</h3>
            <p>Priority: {task.priority}</p>
            <p>Status: {task.completed ? "Completed" : "Pending"}</p>
            <div style={buttonContainerStyle}>
              <button
                onClick={() => editTask(task.id)}
                style={actionButtonStyle}
              >
                Edit
              </button>
              <button
                onClick={() => toggleTaskCompletion(task.id)}
                style={{
                  ...actionButtonStyle,
                  backgroundColor: task.completed ? "#d4edda" : "#fff3cd",
                }}
              >
                {task.completed ? "✔️" : "✔️"}
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                style={actionButtonStyle}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const taskListContainerStyle = {
  margin: "20px",
};

const taskListStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  maxHeight: "400px",
  overflowY: "auto",
  padding: "10px",
  border: "1px solid #ddd",
  borderRadius: "8px",
};

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "15px",
  flex: "1",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  minWidth: "250px",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
};

const actionButtonStyle = {
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
};

export default TaskList;
