// import the model
const Todo = require('../models/Todo')


exports.getTodo = async(req, res) => {
    try {
        // fetch all todo items from database

        const todos = await Todo.find({});

        res.status(200)
        .json({
            success: true,
            data: todos,
            message: 'Entire todo data has been fetched'
        })
    } catch (error) {
        console.error(error)
        res.status(500)
        .json({
            success: false,
            data: 'Internal Server Error',
            message: error.message
        })
    }
}


// we can write another controller on the same page also but for better readability i will create another controller in another file.