const express = require ('express');
const mongoose = require ('mongoose');
const cors =  require ('cors');
const Task = require ('/Task');

const app = express ();
app.use (cors());
app.use (express.json());

mongoose.connect('mongodb+srv://titusraj30:4eWSQGVgw5icPOTS@inventory-management.ih453.mongodb.net/?retryWrites=true&w=majority&appName=Inventory-Management',{
    useNewUrlParser: true,
    useUnifiedTopology: true,

});

//Routes
app.get('/tasks', async (req,res)  =>{
    const task =new Task(req.body);
    await task.save();
    res.status(201).json(task);
});

app.post('/tasks', async(req,res) =>{
    const task = new Task (req.body);
    await task.save();
    res.status(201).json(task);
});
app.put('/tasks/:id', async (req,res)  =>{
    const updated = await
    TaskfindByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(updaated);
});

app.delete('/tasks/:id',async (req,res)  => {
    await 
    Task.findByIdAndDelete(req.params.is);
    res.status(204).end();

});

app.listen(3000,()  =>
console.log('server running on port 3000'));
