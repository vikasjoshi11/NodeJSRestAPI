const Todos = require('../models/todos.model');

exports.test = function (req, res) {
    res.send('Greetings from the Todos controller!');
};

exports.todos_create = function (req, res) {
    let todos = new Todos(
        {
            todoName: req.body.name,
            todosId: req.body.id,
            todosDescription: req.body.description
        }
    );

    todos.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Todos Created successfully')
    })
};


exports.todos_details = function (req, res) {

    Todos.findById(req.params.id, function (err, todos) {
        if (err) return next(err);
        res.send(todos);
    })

};

exports.todos_all_details = function (req, res) {
    Todos.find( function (err, todos){
        if(err) res.send('Failed to retrieve the todos list' + err);
        res.send(todos);

    })
}

exports.todos_update = function (req, res) {

    Todos.findByIdAndUpdate( { _id: req.params.id }, { $set: req.body }, { new : true }, function (err, product) {
        if (err) return next(err);
        res.send(product);
    });
};


exports.todos_delete = function (req, res) {

    Todos.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.updateIntoMongoDB = function (req, res) {
    Todos.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, doc) => {
    if (!err) { res.send('Updated successfully!'); }
    else
    console.log('Error during updating the record: ' + err);
    });
};