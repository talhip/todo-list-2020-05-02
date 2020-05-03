import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faList } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faList);

function App() {
  const [task, setTask] = useState(""); // state to get task
  const [tasks, setTasks] = useState([]); // state to store task
  const [empty, setEmpty] = useState(false); // state for empty field

  return (
    <>
      <Header />
      <Tasks tasks={tasks} setTasks={setTasks} />
      <Form
        task={task}
        setTask={setTask}
        tasks={tasks}
        setTasks={setTasks}
        empty={empty}
        setEmpty={setEmpty}
      />
      <Footer creator="Matis" />
    </>
  );
}

export default App;
