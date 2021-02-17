const express = require('express');
const router = express.Router();

const todos_controller = require('../controllers/todos.controller');


router.get('/test', todos_controller.test);

router.post('/create', todos_controller.todos_create);

router.get('/:id', todos_controller.todos_details);

router.get('/', todos_controller.todos_all_details);

router.put('/:id/update', todos_controller.todos_update);

router.delete('/:id/delete', todos_controller.todos_delete);

module.exports = router;