import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ThemeToggle from "./components/themetoggle";
import "./App.css";
import "./index.css";
function App() {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.log("Tasks Updated:", tasks);
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <h1>Interactive Task Dashboard</h1>

      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <TaskForm addTask={addTask} />

      <p className="summary">
        Total Tasks: {tasks.length} | Completed:{" "}
        {tasks.filter((t) => t.completed).length}
      </p>

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;