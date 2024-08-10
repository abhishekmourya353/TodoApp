

const express  = require("express");
const router = express.Router();

//import controller
const {creattodo} = require("../controllers/creattodo");
//const {getTodo} = require("../controllers/getTodo");
const {getTodo, getTodoById} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} =  require("../controllers/deleteTodo");


// const {getTodo, getTodoById} = require("../controllers/getTodo");
// const {updateTodo} = require("../controllers/updateTodo");
// const {deleteTodo} =  require("../controllers/deleteTodo");

//define APi routes
router.post("/creattodo", creattodo);
//router.get("/getTodo",getTodo);
router.get("/getTodos", getTodo);
router.get("/getTodos/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);
// router.get("/getTodos", getTodo);
// router.get("/getTodos/:id", getTodoById);
// router.put("/updateTodo/:id", updateTodo);
// router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;