import React from "react";

const Form = (props) => {
  const { task, setTask, tasks, setTasks, empty, setEmpty } = props;
  // get task
  const handleTaskChange = (event) => {
    const value = event.target.value;
    setTask(value);
  };

  // store task
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!task || task === " ") {
      setEmpty(true);
    } else {
      setEmpty(false);
      const copyTasks = [...tasks];
      copyTasks.push({ name: task, done: false });
      setTasks(copyTasks);
      setTask("");
    }
  };
  return (
    <>
      {empty && (
        <div className="container alert">You must fill something !</div>
      )}
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
    </>
  );
};

export default Form;
