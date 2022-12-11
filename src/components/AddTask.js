import './AddTask.css';
import addImg from "../img/plus.png";

const AddTask = (props) => {

    const add = () => {
        const input = document.getElementById('new-task');
        const newTask = input.value;
        if(input.value.length > 0){
            input.value = '';
            props.addTask(newTask);
        }
    }

    return(
        <div className='add-task'>
            <input type='text' id='new-task'></input>
            <button id='send-task' onClick={add}><img src={addImg} alt='todoApp'/></button>
        </div>
    )
}

export default AddTask;