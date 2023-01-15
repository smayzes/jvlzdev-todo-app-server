const Todo = require("../model/Todo");

module.exports.addTodo = async (request, response) => {
  try {
    const newTodo = await Todo.create({
      data: request.body.data,
      createdAt: Date.now(),
    });

    await newTodo.save();

    return response.status(200).json(newTodo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

module.exports.getAllTodos = async (request, response) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });

    return response.status(200).json(todos);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

module.exports.updateTodo = async (request, response) => {
  try {
    await Todo.findOneAndUpdate(
      { _id: request.params.id },
      { data: request.body.data }
    );

    const todo = await Todo.findById(request.params.id);

    return response.status(200).json(todo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

module.exports.deleteTodo = async (request, response) => {
  const todo = await Todo.findByIdAndDelete(request.params.id);
  try {
    return response.status(200).json(todo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
