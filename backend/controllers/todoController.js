const Todo = require("../models/todoModel");

const showTodos = async(req,res) =>{
    const user_id = req.user._id
    const todos = await Todo.find({user_id}).sort({createdAt:-1});
    res.status(200).json(todos)
}

const createTodo = async(req,res) =>{
    const {content} = req.body;
    try {
        const user_id = req.user._id
        const createdtodo = await Todo.create({
            content,
            user_id
        });
            res.status(200).json(createdtodo)
            //Always send response from the backend otherwise you're not gonna get your changes updates at the frontend
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
   
}

const deleteTodo = async(req,res) =>{
    const _id = req.params.id
    const todo = await Todo.findByIdAndDelete(_id);
    if(todo){
        res.status(200).json(todo)
    }
    
}

module.exports = {
    showTodos,
    createTodo,
    deleteTodo
}