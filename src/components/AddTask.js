import {useState} from 'react';



const AddTask = ({ onAdd }) => {

    const [data, setdata] =  useState({
        titel: "",
        date: "",
        remender: false,
    });
    
    const onSubmit=(e)=>{
        e.preventDefault()

        if(!text){
            alert('Please Add a Task')
            return
        }
        else if(!day){
            alert('Please Add a Day')
            return
        }

        onAdd({ data })

        setdata('')
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Task</label>
                <input type="text" placeholder="enter the task" value={text} onChange={(e)=>setdata({...data , title: e.target.value})} />    
            </div>
            <div>
                <label>Date & Time</label>
                <input type="text" placeholder="enter the Date and Time" value={day} onChange={(e)=>setdata({...data , date: e.target.value})} />    
            </div>
            <div>
                <label>Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setdata({...data , remender: e.target.value})} />    
            </div>
            <div>
                <input type="submit" className="addBtn" value="Add Task" />    
            </div>
            
        </form>
    )
}

export default AddTask
