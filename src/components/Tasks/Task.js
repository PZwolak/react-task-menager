import { AiOutlineCloseCircle } from "react-icons/ai";
const Task = ({task, onDelete, onToggle}) => {
    return (
        <div onDoubleClick={()=>onToggle(task.id)} className={`task ${task.reminder ? 'task--remind' : ''}`}>
            <h3>{task.text}</h3>
            <p>{task.day}</p>
            <i onClick={()=>onDelete(task.id)}><AiOutlineCloseCircle /></i>
        </div>
    )
}

export default Task
