import './AllTasks.css';
import data from '../data';
import { useState } from "react";
import deleteImg from '../img/delete.png'

const AllTasks = () => {

    const [myTasks, setMyTasks] = useState(data);

    console.log(myTasks)

    const tasksHandler = (id) => {
        const filteredTasks = myTasks.filter((oneTask) =>{
           return oneTask.id !== id;
        })
        setMyTasks(filteredTasks);

    }

    const deleteAllTasks = () => {
        setMyTasks([]);
    }

    return(
        <div className='tasks'>
            {
                myTasks.map((oneTask) => {
                    const {id, name} = oneTask; // Destruction -> zavorky podle toho jestli cteme objekt nebo pole

                    return <div className='one-task' key={id}>
                        <h4>{name}</h4>
                        <button onClick={() => tasksHandler(id)}><img src={deleteImg} alt='todoApp'/></button>
                    </div>
                })
            }
            <button className='main-button' onClick={deleteAllTasks}>Delete all tasks</button>
        </div>
    )
}

export default AllTasks;
