const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const todos = require('./routes/todos.route'); // Imports routes for the todos
const app = express();

const password = 1234;
// Set up mongoose connection
let dev_db_url = 'mongodb+srv://test-user:'+password+'@cluster0.hntoj.mongodb.net/todoslist?retryWrites=true&w=majority';

let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB , {
    useNewUrlParser: true, useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://test-user:1234@cluster0.hntoj.mongodb.net/todoslist?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("todoslist").collection("sample_tools");
//   // perform actions on the collection object
//   client.close();
// });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/todos', todos);

let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});