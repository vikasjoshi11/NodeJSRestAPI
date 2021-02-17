const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let todosSchema = new Schema({
    todoName: {
        type: String,
        required: 'This field is required!'
    },
    todosId: {
        type: String,
    },
    todosDescription: {
        type: String,
    }
});

module.exports = mongoose.model('Todos', todosSchema);