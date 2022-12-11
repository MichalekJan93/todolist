import './AllTasks.css';
import data from '../data';
import { useState } from "react";
import deleteImg from '../img/delete.png'
import AddTasks from './AddTask'
import Title from "./Title";

const AllTasks = () => {

    const [myTasks, setMyTasks] = useState(data);

    const tasksHandler = (id) => {
        const filteredTasks = myTasks.filter((oneTask) =>{
           return oneTask.id !== id;
        })
        setMyTasks(filteredTasks);
    }

    const checkID = () => {
        for(let i = 0; i < myTasks.length; i++){
            if(i === myTasks.length -1){
                return myTasks[i].id + 1;
            }
        }
    }

    const addNewTask = (newTask) => {
        let task = {
            id: checkID(),
            name: newTask
        };
        const newTasks = myTasks;
        newTasks.push(task);
        setMyTasks([...newTasks]);
    }

    const deleteAllTasks = () => {
        setMyTasks([]);
    }

    return(
        <div className='tasks'>
            <Title />
            <AddTasks addTask={addNewTask}/>
            {
                myTasks.map((oneTask) => {
                    const {id, name} = oneTask;

                    return <div className='one-task' key={id}>
                        <p>{name}</p>
                        <button onClick={() => tasksHandler(id)}><img src={deleteImg} alt='todoApp'/></button>
                    </div>
                })
            }
            <button className='main-button' onClick={deleteAllTasks}>Delete all tasks</button>
        </div>
    )
}

export default AllTasks;
