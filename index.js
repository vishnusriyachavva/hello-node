/* eslint-disable no-unused-vars */
const { connect } = require("./connectDB.js");
const Todo = require("./TodoModel.js");
const createTodo = async () => {
    try {
      await connect();
      //const todo=a;
      const todo = await Todo.addTask({
        title: "Second Item",
        dueDate: new Date(),
        completed: false,
      });
      console.log(`Created todo with ID : ${todo.id}`);
    } catch (error) {
      console.error(error);
    }
  };
  
  const countItems = async () => {
    try {
      const totalCount = await Todo.count();
      console.log(`Found ${totalCount} items in the table!`);
    } catch (error) {
      console.error(error);
    }
  };

  const getAllTodos = async () => {
    try {
      const todos = await Todo.findAll(
    
      );
      const todoList = todos.map((todo) => todo.displayableString()).join("\n");
      console.log(todoList);
    } catch (error) {
      console.error(error);
    }
  };

  const getSingleTodo = async () => {
    try {
      const todo = await Todo.findOne(
       
      );
  
      console.log(todo.displayableString());
    } catch (error) {
      console.error(error);
    }
  };

  const updateItem = async (id) => {
    try {
      const todo = await Todo.update(
        { completed: true },
        {
          where: {
            id: id,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const deleteItem = async (id) => {
    try {
      const deletedRowCount = await Todo.destroy({
        where: {
          id: id,
        },
      });
    
      console.log(`Deleted ${deletedRowCount} rows!`);
    } catch (error) {
      console.error(error);
    }
  };



const run = async () => {
  await createTodo();
  // await countItems();
  await getAllTodos();
 
};

run();