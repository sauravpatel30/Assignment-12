import Header from './components/Header'
import Task from './components/Task'
import './App.css'
import { useState, useEffect } from "react";
import AddTask from './components/AddTask'
import axios from "axios";

function App() {

  const [showAdd,setshowAdd] = useState(false)

  const [task,setTask] = useState([])


//delete task  
const deleteTask = async (id) =>{
  axios.delete(`/deletedata/${id}`).then((res)=>{
    console.log(res.data.data);
    setTask(res.data.data)
  })
}

//fetch task
useEffect(()=>{  
  fetchTasks()
}, [])

const fetchTasks = async () => {
  axios.get("/listTask").then((res)=>{
    console.log(res.data.data);
    setTask(res.data.data)
  })
}

//add task
const addTask = async (ta) =>{

  axios.post("/addTask",task).then((res)=>{
    setTask(res.data.data)
  })
}

  return (
    <div class="front-data">
        <Header title="Task Manger" onAdd={()=>setshowAdd(!showAdd) } showAddTask={showAdd} />
        {showAdd && <AddTask onAdd={addTask} />}
        { task.length > 0 ? <Task task={task} onDelete={
          ()=> deleteTask(task.title)} /> : <h3>No task found</h3>} 
    </div>
  );
}

export default App;
