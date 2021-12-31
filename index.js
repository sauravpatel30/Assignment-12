const express = require('express')
const mongoose  = require('mongoose')
const app = express()
const port = 4000

const taskModel = require('./models/task');

app.get('/listTask',async(req,res)=>{
    const data = await taskModel.find({});
    if(data.length===0){
        alert("no data found")
    }else{
        return res.json({data: data});  
    } 
});

app.delete('/deletedata/:id',async(req,res)=>{
    const deldata = await taskModel.findOneAndDelete({title: req.params.id});
    const data = await taskModel.find({});
    return res.json({data: data});
})

app.post('/addTask',async(req,res)=>{
    const data = await taskModel.create(req.body);
    const data = await taskModel.find({});
    return res.json({data: data});
})
mongoose
    .connect("mongodb://localhost:27017/task_manger")
    .then((res)=>console.log("database conncected"));

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))