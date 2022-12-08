import './AllTasks.css';
import data from '../data';

const AllTasks = () => {
    return(
        <div>
            {
                data.map((oneTask) => {
                    return <div className='one-task'><h4>{oneTask.name}</h4></div>
                })
            }
        </div>
    )
}

export default AllTasks;
