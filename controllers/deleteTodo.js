const Todo = require('../models/Todo')


exports.deleteTodo = async(req, res) => {
    try {

        const {id} = req.params

        const todoDelete = await Todo.findByIdAndDelete({ _id: id })

        if (!todoDelete) {
            res.status(404)
            .json({
                success: false,
                message: `Given ${id} not found in database`
            })
        }

        res.status(200)
        .json({
            success: true,
            data: todoDelete,
            message: `Given ${id} has been deleted`
        })
    } catch(error) {
        console.error(error)
        res.status(500)
        .json({
            success: false,
            data: 'Internal Server Error',
            message: error.message
        })
    }
}