import styles from "./page.module.css";
import TaskManager from "./pages/TaskManager";
import Header from "./pages/Header";

export default function Home() {
  const initialTasks = [
    {
      id: 1,
      title: "Sample Task 1",
      description: "This is a sample task.",
      priority: "High",
      completed: false,
    },
    {
      id: 2,
      title: "Sample Task 2",
      description: "This is another sample task.",
      priority: "Medium",
      completed: false,
    },
    {
      id: 3,
      title: "Sample Task 3",
      description: "This is another sample task.",
      priority: "Medium",
      completed: false,
    },
  ];

  return (
    <div className={styles.page}>
      <Header />
      <TaskManager initialTasks={initialTasks} />
    </div>
  );
}
