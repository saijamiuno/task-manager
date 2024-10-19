"use client";
import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm.js";

const TaskManager = ({ initialTasks }) => {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("allTasks")) || initialTasks;
  });

  const [task, setTask] = useState(null);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("allTasks"));
    if (list) {
      setTasks(list);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("allTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    const id = new Date().toISOString();
    setTasks([...tasks, { id, ...newTask, completed: false }]);
  };

  const editTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (taskToEdit) {
      setTask(taskToEdit);
    }
  };

  const updateTask = (updatedTask, reset) => {
    if (reset) {
      setTask(null);
      return;
    }
    const taskIndex = tasks.findIndex((task) => task.id === updatedTask.id);
    if (taskIndex !== -1) {
      const updatedTasks = [...tasks];
      updatedTasks[taskIndex] = updatedTask;
      setTasks(updatedTasks);
      setTask(null);
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <TaskForm addTask={addTask} task={task} updateTask={updateTask} />
      <TaskList
        tasks={tasks}
        editTask={editTask}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    </div>
  );
};

export default TaskManager;
