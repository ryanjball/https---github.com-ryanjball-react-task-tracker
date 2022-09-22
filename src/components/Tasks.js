
import Task from './Task'
//want task as part of state
//hook called useState



//state is immutable, have to use setTasks
const Tasks = ({ tasks, onToggle, onDelete}) => {
    

    return (
        <>
        {tasks.map((task) => (
            <Task key = {task.id} task = {task} onToggle = {onToggle} onDelete = {onDelete}  />
            
            //pass in each task as prop
        ))}  
        </>
    )
}

export default Tasks
