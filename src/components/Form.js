import React from "react";

const Form = (props) => {
  const { task, setTask, tasks, setTasks } = props;
  // get task
  const handleTaskChange = (event) => {
    const value = event.target.value;
    setTask(value);
  };

  // store task
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!task) {
      alert("Fill something !");
    } else {
      const copyTasks = [...tasks];
      copyTasks.push({ name: task, done: false });
      setTasks(copyTasks);
      setTask("");
    }
  };
  return (
    <div className="container form">
      <form onSubmit={handleSubmit}>
        <input
          className="field"
          placeholder="new task"
          type="text"
          value={task}
          onChange={handleTaskChange}
        />
        <input className="submit-button" type="submit" value="Add task" />
      </form>
    </div>
  );
};

export default Form;
