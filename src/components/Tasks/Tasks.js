import Task from './Task'
import "../Tasks/Tasks.scss"

const Tasks = ({tasks, onDelete, onToggle}) => {

    return (
        <div className="tasks">
            {tasks.map(task=>{
               return <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            })}
        </div>
    )
}

export default Tasks
