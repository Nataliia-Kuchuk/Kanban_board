import React from 'react';
import Header from './Header';
import Task from './Task';
import { useDrop } from 'react-dnd';
import { toast } from 'react-hot-toast';

const Section = ({ status, tasks, setTasks, todos, inProgress, closed}) => {
      const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
      }));
    
    let text = 'Todo';
    let bg = 'red';
    let tasksToMap = todos;
    if (status === 'inprogress') {
        text = 'In Progress';
        bg = 'pink';
        tasksToMap = inProgress
    }
 if (status === "closed") {
   text = "Closed";
   bg = "green";
   tasksToMap = closed;
    }
    const addItemToSection = (id) => {
        console.log('droped', id, status)
        setTasks(prev => {
            const mTasks = prev.map(t => {
                if (t.id === id) {
                    return {...t, status: status}
                }
                return t
            })
            localStorage.setItem('tasks', JSON.stringify(mTasks) )
            toast("Task status changed", { icon: "😲" });
            return mTasks
        })
    }
    return (
      <div ref={drop} className={`${isOver} ? 'red' : ''`  }>
        <Header text={text} bg={bg} count={tasksToMap.length} />
       
        {tasksToMap.length > 0 &&
          tasksToMap.map((task) => (
            <Task key={task.id} tasks={tasks} setTasks={setTasks} task={task} />
          ))}
      </div>
    );
};

export default Section;