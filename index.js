const express = require ('express');
const mongoose = require ('mongoose');
const cors =  require ('cors');
const Task = require ('./models/Task');

const app = express ();
app.use (cors());
app.use (express.json());

mongoose.connect('mongodb+srv://titusraj30:4eWSQGVgw5icPOTS@inventory-management.ih453.mongodb.net/?retryWrites=true&w=majority&appName=Inventory-Management',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()  =>  console.log('connected to database'))
    .catch(err  =>  console.error ('Connection Error:',err));

//Routes
app.get('/tasks', async (req,res)  =>{
    const tasks = await Task.find();
    res.json(tasks);
    
});

app.post('/tasks', async(req,res) =>{
    const task = new Task (req.body);
    await task.save();
    res.status(201).json(task);
});
app.put('/tasks/:id', async (req,res)  =>{
    const updated = await
    Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(updated);
});

app.delete('/tasks/:id',async (req,res)  => {
    await 
    Task.findByIdAndDelete(req.params.id);
    res.status(204).end();

});

app.listen(3000,()  =>
console.log('server running on port 3000'));
