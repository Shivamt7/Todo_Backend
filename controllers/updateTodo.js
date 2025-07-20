const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const todoUpdate = await Todo.findByIdAndUpdate({ _id: id }, {title, description, updatedAt: Date.now()});

    if (!todoUpdate) {
      res.status(404).json({
        success: false,
        message: `Data for the Given ${id} not found`,
      });
    }

    res.status(200).json({
      success: true,
      data: todoUpdate,
      message: `Data for the given ${id} has updated`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: error.message,
    });
  }
};
