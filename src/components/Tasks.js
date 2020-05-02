import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tasks = (props) => {
  const { tasks, setTasks } = props;
  return (
    <div className="container tasks">
      {tasks
        .sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1))
        .map((task, index) => {
          // delete task
          const handleDelete = () => {
            const copyTasks = [...tasks];
            copyTasks.splice(index, 1);
            setTasks(copyTasks);
          };

          // handle checkbox
          const handleCheckbox = () => {
            const copyTasks = [...tasks];
            copyTasks[index].done = !copyTasks[index].done;
            setTasks(copyTasks);
          };

          return (
            <div key={index} className={task.done ? "line" : "no-line"}>
              <input
                type="button"
                className={task.done ? "blue" : "white"}
                onClick={handleCheckbox}
              />
              &nbsp;{task.name}&nbsp;
              <FontAwesomeIcon
                className="trash"
                icon="trash"
                size="xs"
                onClick={handleDelete}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Tasks;
