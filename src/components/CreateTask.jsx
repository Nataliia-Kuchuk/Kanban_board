import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
const CreateTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState({
    id: "",
    name: "",
    status: "todo",
  });
    const handleSubmit = (e) => {
        e.preventDefault();
        if(task.name.length < 3)return toast.error('Tasks must have more than 3 characters')
        if (task.name.length > 100)
          return toast.error("Tasks must have less than 100 characters");
        setTasks((prev) => {//or tasks as props
            const list = [...prev, task]
            localStorage.setItem('tasks', JSON.stringify(list))
            return list
        })
        toast.success('Task created')
        setTask({
          id: "",
          name: "",
          status: "todo",
        }); 
    }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task.name}
        onChange={(e) =>
          setTask({ ...task, id: uuidv4(), name: e.target.value })
        }
              className="input"
      />
      <button className="btn">Create</button>
    </form>
  );
};

export default CreateTask;
