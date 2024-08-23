const express = require("express")
const {showTodos,createTodo,deleteTodo} = require("../controllers/todoController");

const requireAuth = require("../middlewares/requireAuth");

const router = express.Router()

router.use(requireAuth);

router.get("/",showTodos);

router.post("/",createTodo)

router.delete("/:id",deleteTodo)

module.exports = router;