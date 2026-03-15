const express = require('express');
const router = express.Router();   

const {
    createTodo,
    getAllTodos,
    updateTodo,
    deleteTodo
} = require('../Controller/todoController');
 
router.post('/todos',createTodo);
router.get('/todos',getAllTodos);
router.put('/todos/:id',updateTodo);
router.delete('/todos/:id',deleteTodo); 

module.exports = router;