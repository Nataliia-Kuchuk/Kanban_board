import React from 'react';
import { useDrag } from 'react-dnd';
import { toast } from 'react-hot-toast';

const Task = ({ task, tasks, setTasks }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'task',
        item: {id: task.id},
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }));

    console.log(isDragging)
    const handleRemove = (id) => {
        const fTasks = tasks.filter(task => task.id !== id)
        localStorage.setItem('tasks', JSON.stringify(fTasks))
        setTasks(fTasks)

        toast("Task removed", { icon: "👽" });
    }
    return (
        <div ref={drag} style={{ display: 'flex'}} className={`${isDragging ? 'opac' : ''  }`}>
            <div className='task'>{task.name}</div>
            <div onClick={() => handleRemove(task.id)} style={{ padding: '3px', height: 25, margin: 5 }}>
                <img width={20}  height={20} style={{position: 'relative', top: '-3px'}} src="del.png" alt="" />
            </div>
        </div>
    );
};

export default Task;