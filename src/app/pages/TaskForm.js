import { useEffect, useState } from "react";

const TaskForm = ({ addTask, task, updateTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    const taskData = { title, description, priority };
    if (task) {
      updateTask({ ...task, ...taskData });
      resetForm();
    } else {
      addTask(taskData);
      resetForm();
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setPriority("Medium");
  };

  useEffect(() => {
    if (task) {
      const { title, description, priority } = task;
      setTitle(title || "");
      setDescription(description || "");
      setPriority(priority || "Medium");
    }
  }, [task]);

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div style={formContainerStyle}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={inputStyle}
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={textareaStyle}
        ></textarea>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={selectStyle}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button type="submit" style={buttonStyle}>
          {task ? "Update Task" : "Add Task"}
        </button>

        {task && (
          <button
            onClick={() => {
              resetForm();
              updateTask(null, "reset");
            }}
            style={cancelButtonStyle}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

const formStyle = {
  margin: "20px auto",
  textAlign: "center",
  maxWidth: "800px",
  width: "100%",
};

const formContainerStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "10px",
  alignItems: "center",
  justifyContent: "center",
};

const inputStyle = {
  padding: "8px",
  fontSize: "16px",
  flex: 1,
  minWidth: "250px",
};
const textareaStyle = {
  padding: "8px",
  fontSize: "16px",
  flex: 1,
  minWidth: "250px",
  minHeight: "10px",
};

const selectStyle = {
  padding: "8px",
  fontSize: "16px",
  minWidth: "150px",
};

const buttonStyle = {
  padding: "8px 16px",
  backgroundColor: "#4caf50",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  width: "100%",
  maxWidth: "150px",
};

const cancelButtonStyle = {
  ...buttonStyle,
  backgroundColor: "red",
};

export default TaskForm;
