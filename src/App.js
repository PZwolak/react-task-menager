import { useState, useEffect } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddtask, setShowAddTask] = useState(true);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch(
      `${window.location.protocol}//${window.location.hostname}:5000/tasks`
    );
    const data = await res.json();
    return data;
  };

  const fetchTasksWithId = async (id) => {
    const res = await fetch(
      `${window.location.protocol}//${window.location.hostname}:5000/tasks/${id}`
    );
    const data = await res.json();
    return data;
  };

  const addTask = async (task) => {
    const res = await fetch(
      `${window.location.protocol}//${window.location.hostname}:5000/tasks`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      }
    );

    const data = await res.json();
    setTasks([...tasks, data]);
  };

  const deleteTask = async (id) => {
    await fetch(
      `${window.location.protocol}//${window.location.hostname}:5000/tasks/${id}`,
      {
        method: "DELETE",
      }
    );
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = async (id) => {
    const taskToToggle = await fetchTasksWithId(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await fetch(
      `${window.location.protocol}//${window.location.hostname}:5000/tasks/${id}`,
      {
        method: "PUT",
        headers:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
      }
    );

    const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  // const

  return (
    <Router>
    <div className="app-container">
      
      <Header
        onAdd={() => setShowAddTask(!showAddtask)}
        showAdd={showAddtask}
      />

      <Route path='/' exact render={(props)=>(
        <>
      {showAddtask && <Form onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
      ) : (
        "No task to display"
      )}
        </>
      )} />
      <Route path='/about' component={About} />

      <Footer />

    </div>
    </Router>
  );
}

export default App;
