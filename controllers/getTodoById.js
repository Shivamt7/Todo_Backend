const Todo = require("../models/Todo");

exports.getTodoById = async (req, res) => {
  try {
    const id = req.params.id

    const todoById = await Todo.findById({_id: id});


    // data for given Id not found

    if (!todoById) {
        res.status(404)
        .json({
            success: false,
            message: `Data not found for given ${id}`
        })
    }

    res.status(200).json({
      success: true,
      data: todoById,
      message: "Todo Data by Id is fetched",
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
