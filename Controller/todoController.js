const Todo = require('../models/Todo');

// Create a new todo
const createTodo = async(req,res)=>{
    try {
        const todo = await Todo.create(req.body);
        res.status(201).json(todo);
    } catch (error) {
        console.error('Error creating todo:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Get all todos

const getAllTodos = async(req,res)=>{
    try {
        const todo = await Todo.find();
        res.status(200).json(todo);
    } catch (error) {
        console.error('Error fetching todos:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const updateTodo = async (req,res)=>{
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(todo);
    } catch (error) {
        console.error('Error updating todo:', error);
        res.status(500).json({ error: 'Internal server error' });  
    }
}

const deleteTodo = async(req,res)=>{
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        console.error('Error deleting todo:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    createTodo,
    getAllTodos,
    updateTodo,
    deleteTodo
}