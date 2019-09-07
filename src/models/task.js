const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    discription: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
        timestamps: true
    }
)

taskSchema.pre('save', async function (next) {
    const task = this

    next()
})

const Task = mongoose.model("Task", taskSchema)
module.exports = Task