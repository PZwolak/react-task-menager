import {useState} from 'react'
import '../Form/Form.scss'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDate] = useState('')
    const [reminder, setReminder] = useState(true)

    const onSubmit = (e)=>{
        e.preventDefault();

        if(!text){
            alert('Please add task title and date')
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setDate('')
        setReminder(true)
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="form-element">
                <label>Task title</label>
                <input type="text" onChange={(e)=>setText(e.target.value)}></input>
            </div>
            <div className="form-element">
                <label>Task date and time</label>
                <input type="text" onChange={(e)=>setDate(e.target.value)}></input>
            </div>
            <div className="form-element form-element--space-between">
                <label>Set reminder</label>
                <input type="checkbox" checked={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}></input>
            </div>

                <input type="submit"  className="btn btn-primary btn-full" value='Save Task'></input>
        </form>
    )
}

export default AddTask
