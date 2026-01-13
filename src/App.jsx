import { useState } from "react";
import TicketForm from "./Components/TicketForm.jsx";

export default function App() {
  const [task, setTask] = useState([]);

  const addTask = (newTask) => {
    setTask([...task, { ...newTask, id: Date.now(), status: "waiting" }]);
  };

  const updateTask = (id, newTask) => {};

  const deleteTask = (id) => {};

  return (
    <div className="app">
      <header>
        <h1>Ticket Management Application</h1>
        <p>Manage and track customer tickets efficiently</p>
      </header>
      <main>
        <TicketForm addTask={addTask} />
      </main>
    </div>
  );
}
